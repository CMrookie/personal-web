// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = process.env.NUXT_APP_BASE_URL || '/'

/**
 * 首帧主题脚本：在 CSS 生效前给 <html> 打上 data-theme，
 * 避免深色模式下刷新时闪一下白屏。
 */
const themeInit = [
  '(function(){',
  'try{',
  "var t=localStorage.getItem('theme');",
  "var q=new URLSearchParams(location.search).get('theme');",
  "if(q==='light'||q==='dark'){t=q;}",
  "if(t!=='light'&&t!=='dark'){",
  "t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';",
  '}',
  'document.documentElement.dataset.theme=t;',
  '}catch(e){document.documentElement.dataset.theme="light";}',
  'if(window.IntersectionObserver){document.documentElement.classList.add("js");}',
  '})();',
].join('')

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  ssr: true,

  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#f7f5f0', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#0d0f13', media: '(prefers-color-scheme: dark)' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${baseURL}favicon.svg` },
      ],
      script: [{ textContent: themeInit }],
    },
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      /** 站点最终地址，构建时用 NUXT_PUBLIC_SITE_URL 覆盖 */
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
      /** 是否允许搜索引擎收录；1 = 允许（默认不收录，保护手机号与邮箱） */
      indexable: process.env.SITE_INDEXABLE === '1',
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      // 内容 store 是模块级单例，并发预渲染会互相串台
      concurrency: 1,
      // 岗位子路由页面上没有任何入口，不会被 crawlLinks 发现，得显式列出
      routes: ['/', '/frontend', '/robots.txt'],
    },
  },
})
