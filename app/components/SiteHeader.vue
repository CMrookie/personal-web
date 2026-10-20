<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { profile, ui } from '../data/resume'

const links = computed(() => [
  { id: 'strengths', label: ui.nav.strengths },
  { id: 'skills', label: ui.nav.skills },
  { id: 'experience', label: ui.nav.experience },
  { id: 'work', label: ui.nav.work },
  { id: 'contact', label: ui.nav.contact },
])

const { theme, toggle } = useTheme()
const active = ref('')
const stuck = ref(false)

let handler: (() => void) | null = null

onMounted(() => {
  handler = () => {
    stuck.value = window.scrollY > 8
    let current = ''
    for (const link of links.value) {
      const el = document.getElementById(link.id)
      if (el && el.getBoundingClientRect().top <= 140) current = link.id
    }
    active.value = current
  }
  window.addEventListener('scroll', handler, { passive: true })
  handler()
})

onBeforeUnmount(() => {
  if (handler) window.removeEventListener('scroll', handler)
})

const printPage = () => window.print()
</script>

<template>
  <header class="site-header" :class="{ 'is-stuck': stuck }">
    <div class="container nav">
      <a class="brand" href="#top" :aria-label="profile.name">
        <span id="avatar-target" class="brand__mark" aria-hidden="true">CY</span>
        <span class="brand__text">
          <span id="name-target" class="brand__name">{{ profile.name }}</span>
          <small id="caption-target">{{ profile.headline }}</small>
        </span>
      </a>

      <nav class="nav__links" :aria-label="ui.navAria">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          :class="{ 'is-active': active === link.id }"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="nav__actions">
        <LocaleToggle />
        <button
          class="icon-btn"
          type="button"
          :aria-label="theme === 'dark' ? ui.themeToLight : ui.themeToDark"
          :aria-pressed="theme === 'dark'"
          @click="toggle"
        >
          <AppIcon :name="theme === 'dark' ? 'sun' : 'moon'" />
        </button>
        <button class="btn btn--ghost btn--sm no-print" type="button" @click="printPage">
          <AppIcon name="printer" :size="15" />
          <span class="btn__label">{{ ui.savePdf }}</span>
        </button>
      </div>
    </div>
  </header>
</template>
