import type { ResumeBundle } from './types'
import { stackZh } from './stack.zh'
import { stackEn } from './stack.en'
import { feZh } from './fe.zh'
import { feEn } from './fe.en'

/**
 * 岗位变体。页面里没有任何入口指向这些路由，只能手输地址访问：
 *   /            全栈开发工程师
 *   /frontend/   前端开发工程师
 */
export type VariantSlug = 'default' | 'frontend'

export interface Variant {
  label: string
  zh: ResumeBundle
  en: ResumeBundle
}

export const VARIANTS: Record<VariantSlug, Variant> = {
  default: { label: '全栈开发工程师', zh: stackZh, en: stackEn },
  frontend: { label: '前端开发工程师', zh: feZh, en: feEn },
}

export function isVariantSlug(value: string): value is VariantSlug {
  return value === 'default' || value === 'frontend'
}
