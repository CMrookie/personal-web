/**
 * 简历内容的唯一入口。
 *
 * variants.ts 里每个岗位一份完整内容（中英各一套，
 * 见 java.zh.ts / java.en.ts / fe.zh.ts / fe.en.ts）；
 * 这里把「语言 × 岗位」的组合解析成 reactive 对象 ——
 * 组件直接 import { profile, jobs, ... }，不用关心当前是哪一套。
 */
import { reactive, ref } from 'vue'
import { VARIANTS, isVariantSlug, type VariantSlug } from './variants'

export { isVariantSlug } from './variants'
export type { VariantSlug } from './variants'
import type { ResumeBundle } from './types'

export type Locale = 'zh' | 'en'

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value))

const initial = clone(VARIANTS.default.zh)

export const locale = ref<Locale>('zh')
export const variant = ref<VariantSlug>('default')

export const site = reactive(initial.site)
export const profile = reactive(initial.profile)
export const sectionCopy = reactive(initial.sectionCopy)
export const basicInfo = reactive(initial.basicInfo)
export const strengths = reactive(initial.strengths)
export const skillGroups = reactive(initial.skillGroups)
export const jobs = reactive(initial.jobs)
export const projects = reactive(initial.projects)
export const education = reactive(initial.education)
export const facts = reactive(initial.facts)
export const ui = reactive(initial.ui)

function fill(target: Record<string, unknown>, source: Record<string, unknown>) {
  for (const key of Object.keys(target)) {
    if (!(key in source)) delete target[key]
  }
  Object.assign(target, clone(source))
}

function fillArray(target: unknown[], source: unknown[]) {
  target.splice(0, target.length, ...clone(source))
}

/** (语言 × 岗位) → 一份完整的、可以拿来渲染的数据 */
function resolve(next: Locale, slug: VariantSlug): ResumeBundle {
  return clone(VARIANTS[slug][next])
}

function render(next: Locale, slug: VariantSlug) {
  const bundle = resolve(next, slug)

  fill(site, bundle.site as unknown as Record<string, unknown>)
  fill(profile, bundle.profile as unknown as Record<string, unknown>)
  fill(sectionCopy, bundle.sectionCopy as unknown as Record<string, unknown>)
  fillArray(basicInfo, bundle.basicInfo)
  fillArray(strengths, bundle.strengths)
  fillArray(skillGroups, bundle.skillGroups)
  fillArray(jobs, bundle.jobs)
  fillArray(projects, bundle.projects)
  fill(education, bundle.education as unknown as Record<string, unknown>)
  fillArray(facts, bundle.facts)
  fill(ui, bundle.ui as unknown as Record<string, unknown>)

  locale.value = next
  variant.value = slug
}

/**
 * 切换岗位（路由用）：只改定位文案，其余内容不动。
 * 每次都从原始语言包重建一遍 —— 静态预渲染时多路由共用一个进程，
 * 不重建就会把这个路由的补丁漏给下一个。
 */
export function setVariant(slug: string) {
  render(locale.value, isVariantSlug(slug) ? slug : 'default')
}

export function setLocale(next: Locale, persist = true) {
  if (next !== 'zh' && next !== 'en') return

  render(next, variant.value)

  if (import.meta.client) {
    document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en'
    if (persist) {
      try {
        localStorage.setItem('locale', next)
      } catch {
        /* 隐私模式下忽略 */
      }
      try {
        const url = new URL(window.location.href)
        if (next === 'zh') url.searchParams.delete('lang')
        else url.searchParams.set('lang', next)
        window.history.replaceState(null, '', url)
      } catch {
        /* 忽略 */
      }
    }
  }
}

export function toggleLocale() {
  setLocale(locale.value === 'zh' ? 'en' : 'zh')
}
