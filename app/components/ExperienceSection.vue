<script setup lang="ts">
import { education, jobs, sectionCopy, ui } from '../data/resume'
</script>

<template>
  <section id="experience" class="section" aria-labelledby="experience-title">
    <div class="container">
      <div class="section-head">
        <span class="section-head__num">03</span>
        <h2 id="experience-title" class="section-head__title">{{ ui.sections.experience }}</h2>
        <p class="section-head__desc">{{ sectionCopy.experience }}</p>
      </div>

      <ol class="timeline">
        <li
          v-for="(job, ji) in jobs"
          :key="ji"
          class="job"
          :class="{ 'job--note': job.kind === 'note' }"
        >
          <div class="job__meta">
            <span class="job__period">{{ job.period }}</span>
            <span class="job__place">{{ job.place }}</span>
          </div>

          <div class="job__body">
            <h3 class="job__title">
              {{ job.role }}
              <span class="job__company">{{ job.company }}</span>
            </h3>
            <p v-if="job.summary" class="job__summary">{{ job.summary }}</p>

            <ul v-if="job.bullets.length" class="bullets">
              <li v-for="(bullet, bi) in job.bullets" :key="bi">{{ bullet }}</li>
            </ul>

            <div v-if="job.stack.length" class="job__stack chips chips--sm">
              <span v-for="(tech, si) in job.stack" :key="si" class="chip chip--ghost">{{ tech }}</span>
            </div>
          </div>
        </li>
      </ol>

      <div class="edu">
        <div class="edu__period">{{ education.period }}</div>
        <div>
          <h3 class="job__title">
            {{ education.school }}
            <span class="job__company">{{ education.major }} · {{ education.degree }}</span>
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
