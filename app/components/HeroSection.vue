<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { basicInfo, locale, profile, ui } from '../data/resume'

const { docked } = useAvatarDock()
const { caption } = useHeroCaption()

// 名字下方的副标题：未停靠时是拼音，头像飞进 header 后变成职位英文
const target = computed(() => (docked.value ? profile.roleEn.toUpperCase() : profile.nameEn))

let frame = 0
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·/— '

function scrambleTo(text: string) {
  cancelAnimationFrame(frame)
  if (caption.value === text) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    caption.value = text
    return
  }

  const start = performance.now()
  const duration = 620

  const step = (now: number) => {
    const t = Math.min(1, (now - start) / duration)
    const revealed = Math.floor(t * text.length)
    let out = ''
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') out += ' '
      else if (i < revealed) out += text[i]
      else out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
    }
    caption.value = out
    if (t < 1) frame = requestAnimationFrame(step)
    else caption.value = text
  }

  frame = requestAnimationFrame(step)
}

watch(target, (next) => scrambleTo(next))
onMounted(() => { caption.value = target.value })
onBeforeUnmount(() => cancelAnimationFrame(frame))

const config = useRuntimeConfig()
const avatarSrc = `${config.app.baseURL}avatar.jpg`

const printPage = () => window.print()
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <div class="container hero__grid">
      <div class="hero__main" data-reveal>

        <div class="hero__head">
          <div id="avatar-origin" class="hero__avatar">
            <img :src="avatarSrc" alt="" />
          </div>

          <h1 id="hero-title" class="hero__name" :class="{ 'is-en': locale === 'en' }">
            <span id="name-origin" class="hero__name-text">{{ profile.name }}</span>
            <span id="caption-origin" class="hero__name-en" :class="{ 'is-role': docked }">{{ caption }}</span>
          </h1>
        </div>

        <p class="eyebrow">
          <span class="eyebrow__dot" aria-hidden="true" />
          {{ profile.status }} · {{ profile.location }}
        </p>

        <p class="hero__role">
          <template v-for="(item, index) in profile.roles" :key="index">
            <span v-if="index" class="sep" aria-hidden="true">/</span>
            <span>{{ item }}</span>
          </template>
          <span class="sep" aria-hidden="true">/</span>
          <em>{{ profile.focus }}</em>
        </p>

        <p class="hero__intent">
          {{ ui.intentLabel }}<strong>{{ profile.target }}</strong>
        </p>

        <p class="hero__pitch">{{ profile.pitch }}</p>

        <div class="hero__actions">
          <a class="btn btn--primary" href="#work">
            {{ ui.viewProject }}
            <AppIcon name="arrow-down" :size="16" />
          </a>
          <button class="btn btn--ghost no-print" type="button" @click="printPage">
            <AppIcon name="download" :size="16" />
            {{ ui.downloadPdf }}
          </button>
        </div>

        <div class="hero__meta">
          <a :href="`mailto:${profile.email}`">
            <AppIcon name="mail" :size="15" />
            {{ profile.email }}
          </a>
          <a :href="`tel:${profile.phone}`">
            <AppIcon name="phone" :size="15" />
            {{ profile.phoneDisplay }}
          </a>
          <a :href="profile.github" target="_blank" rel="noopener noreferrer">
            <AppIcon name="github" :size="15" />
            github.com/CMrookie
          </a>
        </div>
      </div>

      <aside class="panel hero__panel" :aria-label="ui.basicInfoAria" data-reveal>
        <div class="panel__bar">
          <span class="panel__dots" aria-hidden="true"><i /><i /><i /></span>
          <span>{{ ui.basicInfoTitle }}</span>
        </div>

        <dl class="panel__facts">
          <div v-for="(item, fi) in basicInfo" :key="fi" class="fact">
            <dt class="fact__label">{{ item.label }}</dt>
            <dd class="fact__value">{{ item.value }}</dd>
          </div>
        </dl>

        <div class="panel__foot">
          <span>{{ profile.industry }}</span>
        </div>
      </aside>
    </div>
  </section>
</template>
