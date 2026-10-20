<script setup lang="ts">
import { profile, site } from '../data/resume'
</script>

<template>
  <footer class="site-footer">
    <div class="container footer__inner">
      <span>© {{ new Date().getFullYear() }} {{ profile.name }} · 最后更新 {{ site.updated }}</span>
      <span>
        本站用 <code>Nuxt 4</code> 静态生成，托管在 <code>GitHub Pages</code>
      </span>
    </div>
  </footer>
</template>
