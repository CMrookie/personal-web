<script setup lang="ts">
import { locale, setLocale, ui } from '../data/resume'

const options = [
  { value: 'zh' as const, label: '中' },
  { value: 'en' as const, label: 'EN' },
]
</script>

<template>
  <div class="lang" role="group" :aria-label="ui.langAria">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="lang__btn"
      :class="{ 'is-active': locale === option.value }"
      :aria-pressed="locale === option.value"
      @click="setLocale(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>
