<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { profile, facts, sectionCopy, ui } from '../data/resume'

const toast = ref('')
let timer: ReturnType<typeof setTimeout> | undefined

async function copy(text: string, label: string) {
  try {
    await navigator.clipboard.writeText(text)
    toast.value = `${label}${ui.copied}`
  } catch {
    toast.value = ui.copyFailed
  }
  clearTimeout(timer)
  timer = setTimeout(() => (toast.value = ''), 2200)
}

onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <section id="contact" class="section" aria-labelledby="contact-title">
    <div class="container">
      <div class="contact-card" data-reveal>
        <h2 id="contact-title" class="contact-card__title">{{ ui.contactTitle }}</h2>
        <p class="contact-card__lead">{{ sectionCopy.contact }}</p>

        <div class="contact-actions">
          <a class="contact-line contact-line--primary" :href="`mailto:${profile.email}`">
            <AppIcon name="mail" :size="16" />
            <span class="contact-line__value">{{ profile.email }}</span>
          </a>
          <a class="contact-line" :href="`tel:${profile.phone}`">
            <AppIcon name="phone" :size="16" />
            <span class="contact-line__value">{{ profile.phoneDisplay }}</span>
          </a>
          <button
            class="contact-line copy-btn-wrap no-print"
            type="button"
            :aria-label="ui.copyEmailAria"
            @click="copy(profile.email, ui.copyEmail)"
          >
            <AppIcon name="copy" :size="16" />
            <span class="contact-line__value">{{ ui.copyEmail }}</span>
          </button>
        </div>

        <div class="contact-meta">
          <span>{{ ui.intentLabel }}<b>{{ profile.target }}</b></span>
          <span v-for="(fact, fi) in facts" :key="fi">{{ fact.label }}：<b>{{ fact.value }}</b></span>
          <a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a :href="profile.gitee" target="_blank" rel="noopener noreferrer">Gitee ↗</a>
        </div>
      </div>
    </div>

    <div class="toast" :class="{ 'is-show': toast }" role="status" aria-live="polite">{{ toast }}</div>
  </section>
</template>
