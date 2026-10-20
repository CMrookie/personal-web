<script setup lang="ts">
import { profile, projects, sectionCopy, ui } from '../data/resume'
</script>

<template>
  <section id="work" class="section" aria-labelledby="work-title">
    <div class="container">
      <div class="section-head">
        <span class="section-head__num">04</span>
        <h2 id="work-title" class="section-head__title">{{ ui.sections.work }}</h2>
        <p class="section-head__desc">{{ sectionCopy.work }}</p>
      </div>

      <article v-for="(item, pi) in projects" :key="pi" class="project" data-reveal>
        <header>
          <div class="project__head">
            <span class="project__kicker">{{ item.kicker }}</span>
            <span v-if="item.period" class="project__period">{{ item.period }}</span>
          </div>
          <h3 class="project__title">{{ item.title }}</h3>
          <p class="project__intro">{{ item.intro }}</p>

          <ul class="chips chips--sm project__stack">
            <li v-for="(tech, ti) in item.stack" :key="ti" class="chip">{{ tech }}</li>
          </ul>
        </header>

        <div v-if="item.highlights?.length" class="project__block">
          <ul class="bullets">
            <li v-for="(point, hi) in item.highlights" :key="hi">{{ point }}</li>
          </ul>
        </div>

        <div v-if="item.results?.length" class="project__block">
          <h4 class="project__label">{{ ui.results }}</h4>
          <ul class="bullets">
            <li v-for="(result, ri) in item.results" :key="ri">{{ result }}</li>
          </ul>
        </div>

        <div v-if="item.repos?.length" class="project__repos">
          <a
            v-for="repo in item.repos"
            :key="repo.url"
            class="repo-link"
            :href="repo.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppIcon name="github" :size="14" />
            {{ repo.label }}
            <AppIcon name="arrow-up-right" :size="13" />
          </a>
          <a class="repo-link" :href="profile.gitee" target="_blank" rel="noopener noreferrer">
            <AppIcon name="arrow-up-right" :size="14" />
            {{ ui.giteeMirror }}
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
