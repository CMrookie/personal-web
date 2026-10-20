<script setup lang="ts">
import { isVariantSlug } from '../data/resume'

const route = useRoute()
const slug = String(route.params.slug ?? '')

// 只认登记过的岗位，其余一律 404 —— 子路由不在页面里暴露入口
if (!isVariantSlug(slug)) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}
</script>

<template>
  <ResumeBody />
</template>
