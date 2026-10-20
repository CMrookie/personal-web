<script setup lang="ts">
import { sectionCopy, strengths, ui } from '../data/resume'
</script>

<template>
  <section id="strengths" class="section" aria-labelledby="strengths-title">
    <div class="container">
      <div class="section-head">
        <span class="section-head__num">01</span>
        <h2 id="strengths-title" class="section-head__title">{{ ui.sections.strengths }}</h2>
        <p class="section-head__desc">{{ sectionCopy.strengths }}</p>
      </div>

      <div class="strengths">
        <article v-for="(item, index) in strengths" :key="index" class="strength" data-reveal>
          <div class="strength__idx">{{ String(index + 1).padStart(2, '0') }}</div>
          <h3 class="strength__title">{{ item.title }}</h3>
          <p class="strength__body">{{ item.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
