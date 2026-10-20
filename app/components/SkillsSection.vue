<script setup lang="ts">
import { sectionCopy, skillGroups, ui } from '../data/resume'
</script>

<template>
  <section id="skills" class="section" aria-labelledby="skills-title">
    <div class="container">
      <div class="section-head">
        <span class="section-head__num">02</span>
        <h2 id="skills-title" class="section-head__title">{{ ui.sections.skills }}</h2>
        <p class="section-head__desc">{{ sectionCopy.skills }}</p>
      </div>

      <div class="skills" data-reveal>
        <div v-for="(group, gi) in skillGroups" :key="gi" class="skill-row">
          <div>
            <div class="skill-row__label">{{ group.label }}</div>
            <div class="skill-row__desc">{{ group.desc }}</div>
          </div>
          <ul class="chips">
            <li v-for="(item, ci) in group.core" :key="ci" class="chip chip--core">{{ item }}</li>
            <li v-for="(item, ii) in group.items" :key="ii" class="chip">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
