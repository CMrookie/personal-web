import { setVariant } from '../data/resume'

/**
 * 岗位在路由进入前就落到 store 上。
 *
 * 必须早于 app.vue 渲染 —— 否则 header / <title> 会先读到上一个岗位的值。
 */
export default defineNuxtRouteMiddleware((to) => {
  const raw = to.params.slug
  const slug = Array.isArray(raw) ? raw[0] : raw
  setVariant(slug ? String(slug) : 'default')
})
