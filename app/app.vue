<script setup lang="ts">
import { computed, nextTick, onMounted, watch } from 'vue'
import { locale, profile, setLocale, site } from './data/resume'

const config = useRuntimeConfig()
const route = useRoute()
const siteUrl = String(config.public.siteUrl || '')
const indexable = Boolean(config.public.indexable)

// 岗位子路由各有自己的地址，canonical 要跟着走
const canonical = computed(() => {
  if (!siteUrl) return ''
  const base = String(config.app.baseURL || '/')
  const rest = route.path.startsWith(base) ? route.path.slice(base.length) : route.path
  const rel = rest.replace(/^\/+|\/+$/g, '')
  return `${siteUrl}${rel ? `${rel}/` : ''}`
})

// 用函数形式，切换语言时 head 跟着变
useSeoMeta({
  title: () => `${profile.name} · ${profile.role}`,
  description: () => site.description,
  ogType: 'profile',
  ogTitle: () => `${profile.name} · ${profile.role}`,
  ogDescription: () => site.description,
  ogUrl: () => canonical.value || undefined,
  ogLocale: 'zh_CN',
  twitterCard: 'summary',
  robots: indexable ? 'index, follow' : 'noindex, nofollow',
})

useHead(() => ({
  htmlAttrs: { lang: locale.value === 'zh' ? 'zh-CN' : 'en' },
  link: canonical.value ? [{ rel: 'canonical', href: canonical.value }] : [],
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        jobTitle: profile.role,
        description: site.description,
        email: `mailto:${profile.email}`,
        url: canonical.value || undefined,
        address: { '@type': 'PostalAddress', addressLocality: '广州', addressCountry: 'CN' },
        sameAs: [profile.github, profile.gitee],
        knowsAbout: ['Vue', 'TypeScript', 'Rust', 'PostgreSQL', 'Flutter', 'WebSocket'],
      }),
    },
  ],
}))

// 切语言后兜底：只补当前视口内被重建过的元素，下面的仍然留给滚动动画
watch(locale, async () => {
  await nextTick()
  document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)').forEach((el) => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add('is-in')
  })
})

onMounted(() => {
  // 语言偏好：URL 参数 > localStorage > 默认中文
  // 读 route.query 而不是 location.search —— 挂载那一刻 router 会短暂把
  // query 从地址栏抹掉再写回，直接读 location.search 会读到空值
  try {
    const raw = route.query.lang
    const fromUrl = typeof raw === 'string' ? raw : null
    const saved = localStorage.getItem('locale')
    const next = fromUrl === 'en' || fromUrl === 'zh' ? fromUrl : saved
    if (next === 'en' || next === 'zh') setLocale(next, false)
  } catch {
    /* 隐私模式忽略 */
  }

  const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
  if (!elements.length) return

  const reveal = (el: Element) => el.classList.add('is-in')
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduce || !('IntersectionObserver' in window)) {
    elements.forEach(reveal)
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        reveal(entry.target)
        observer.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
  )

  elements.forEach((el, index) => {
    el.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`)
    observer.observe(el)
  })

  // 兜底：无论如何，6 秒后让内容可见（避免脚本异常导致整页空白）
  window.setTimeout(() => elements.forEach(reveal), 6000)
})
</script>

<template>
  <div class="page-shell">
    <a class="skip-link" href="#main">跳到主要内容</a>
    <SiteHeader />
    <FloatingBrand />
    <NuxtPage />
  </div>
</template>
