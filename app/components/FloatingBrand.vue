<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { locale, profile } from '../data/resume'

const config = useRuntimeConfig()
const src = `${config.app.baseURL}avatar.jpg`

const avatarEl = ref<HTMLElement | null>(null)
const nameEl = ref<HTMLElement | null>(null)
const { setDocked } = useAvatarDock()
const { caption } = useHeroCaption()
const dockedRef = ref(false)
const activeRef = ref(false)
const captionEl = ref<HTMLElement | null>(null)

let frame = 0
let originAvatar = { x: 0, y: 0, size: 0 }
let targetAvatar = { x: 0, y: 0, size: 0 }
let originName = { x: 0, y: 0, w: 0, h: 0 }
let targetName = { x: 0, y: 0, w: 0, h: 0 }
let nameFinal = { x: 0, y: 0, scale: 1 }
let originCaption = { x: 0, y: 0, w: 0, h: 0 }
let captionFinal = { x: 0, y: 0, scale: 1 }
let distance = 140

let isFloating = false
let isDocked = false
let lastAvatarT = ''
let lastNameT = ''
let lastCaptionT = ''

const rect = (el: Element | null) => (el ? el.getBoundingClientRect() : null)

/**
 * 文档坐标（不含 transform）。
 * getBoundingClientRect 会把入场动画的 translateY(16px) 一起算进去 ——
 * 首帧测量正好赶上动画没跑完，落点就会偏 16px，起飞那一下会跳。
 */
function layoutPos(el: HTMLElement) {
  let x = 0
  let y = 0
  let node: HTMLElement | null = el
  while (node) {
    x += node.offsetLeft
    y += node.offsetTop
    node = node.offsetParent as HTMLElement | null
  }
  return { x, y }
}

function measure() {
  const a0 = rect(document.getElementById('avatar-origin'))
  const a1 = rect(document.getElementById('avatar-target'))
  const n0 = rect(document.getElementById('name-origin'))
  const n1 = rect(document.getElementById('name-target'))
  const c0 = rect(document.getElementById('caption-origin'))
  const c1 = rect(document.getElementById('caption-target'))
  if (!a0 || !a1 || !n0 || !n1 || !c0 || !c1) return
  if (!avatarEl.value || !nameEl.value || !captionEl.value) return

  const a0El = document.getElementById('avatar-origin') as HTMLElement
  const n0El = document.getElementById('name-origin') as HTMLElement
  const c0El = document.getElementById('caption-origin') as HTMLElement

  const pa = layoutPos(a0El)
  originAvatar = { x: pa.x, y: pa.y, size: a0.width }
  targetAvatar = { x: a1.left, y: a1.top, size: a1.width }

  const pn = layoutPos(n0El)
  originName = { x: pn.x, y: pn.y, w: n0.width, h: n0.height }
  targetName = { x: n1.left, y: n1.top, w: n1.width, h: n1.height }

  const scale = originName.w ? targetName.w / originName.w : 1
  nameFinal = {
    x: targetName.x,
    y: targetName.y + (targetName.h - originName.h * scale) / 2,
    scale,
  }

  // 副标：按两处字号比例缩放，落到 header 副标的位置
  const c1El = document.getElementById('caption-target')!
  const cScale = parseFloat(getComputedStyle(c1El).fontSize) / parseFloat(getComputedStyle(c0El).fontSize)

  const pc = layoutPos(c0El)
  originCaption = { x: pc.x, y: pc.y, w: c0.width, h: c0.height }
  captionFinal = {
    x: c1.left,
    y: c1.top + (c1.height - c0.height * cScale) / 2,
    scale: cScale,
  }

  distance = Math.max(90, originAvatar.y - targetAvatar.y)

  // 让飞行层的字体和 hero 里那行完全一致（含响应式 clamp 后的实际字号）
  const cs = getComputedStyle(document.getElementById('name-origin')!)
  const fly = nameEl.value
  fly.style.fontFamily = cs.fontFamily
  fly.style.fontSize = cs.fontSize
  fly.style.fontWeight = cs.fontWeight
  fly.style.letterSpacing = cs.letterSpacing
  fly.style.lineHeight = cs.lineHeight
  fly.style.width = `${originName.w}px`

  avatarEl.value.style.width = `${originAvatar.size}px`
  avatarEl.value.style.height = `${originAvatar.size}px`

  const cs2 = getComputedStyle(c0El)
  const fly2 = captionEl.value
  fly2.style.fontFamily = cs2.fontFamily
  fly2.style.fontSize = cs2.fontSize
  fly2.style.fontWeight = cs2.fontWeight
  fly2.style.letterSpacing = cs2.letterSpacing
  fly2.style.lineHeight = cs2.lineHeight

  update()
}

// 滞回：停下来时滚轮会细微来回，阈值卡在一条线上会反复翻转
const DOCK_ENTER = 0.82
const DOCK_EXIT = 0.6

function setState(next: { floating: boolean; docked: boolean }) {
  if (next.floating !== isFloating) {
    isFloating = next.floating
    // 用响应式 class 而不是 classList —— 文本变化触发重渲染时，
    // Vue 会重写 class 属性，命令式加的类会被覆盖掉
    activeRef.value = isFloating
    if (isFloating) document.documentElement.dataset.avatar = 'floating'
    else delete document.documentElement.dataset.avatar
  }

  if (next.docked !== isDocked) {
    isDocked = next.docked
    setDocked(isDocked)
    dockedRef.value = isDocked
    document.documentElement.dataset.avatarDocked = isDocked ? 'true' : 'false'
  }
}

function write(el: HTMLElement | null, next: string, last: string) {
  if (!el || next === last) return last
  el.style.transform = next
  return next
}

function update() {
  frame = 0
  if (!avatarEl.value || !nameEl.value || !originAvatar.size) return

  const progress = Math.min(1, Math.max(0, window.scrollY / distance))
  const ease = progress * progress * (3 - 2 * progress)
  // 用 ease 的幂而不是 progress 的幂：后者在 0 附近斜率无穷大，
  // 刚滚 1px 就缩掉 2%，和停在原地的 hero 头像对不上，看起来就是「一跳」
  const shrink = Math.pow(ease, 0.8)

  // 头像
  const ay = originAvatar.y - window.scrollY
  const ax = originAvatar.x + (targetAvatar.x - originAvatar.x) * ease
  const atop = ay + (targetAvatar.y - ay) * ease
  const aScale = (originAvatar.size + (targetAvatar.size - originAvatar.size) * shrink) / originAvatar.size
  lastAvatarT = write(avatarEl.value, `translate3d(${ax}px, ${atop}px, 0) scale(${aScale})`, lastAvatarT)

  // 名字：同一进度，位置线性插值到 header 里的落点，缩放同步
  const ny = originName.y - window.scrollY
  const nx = originName.x + (nameFinal.x - originName.x) * ease
  const ntop = ny + (nameFinal.y - ny) * ease
  const nScale = 1 + (nameFinal.scale - 1) * ease
  lastNameT = write(nameEl.value, `translate3d(${nx}px, ${ntop}px, 0) scale(${nScale})`, lastNameT)

  // 副标
  const cy = originCaption.y - window.scrollY
  const cx = originCaption.x + (captionFinal.x - originCaption.x) * ease
  const ctop = cy + (captionFinal.y - cy) * ease
  const cScaleNow = 1 + (captionFinal.scale - 1) * ease
  lastCaptionT = write(captionEl.value, `translate3d(${cx}px, ${ctop}px, 0) scale(${cScaleNow})`, lastCaptionT)

  const floating = isFloating ? window.scrollY > 0 : window.scrollY >= 1
  const docked = dockedRef.value ? progress > DOCK_EXIT : progress > DOCK_ENTER
  setState({ floating, docked })
}

function onScroll() {
  if (frame) return
  frame = requestAnimationFrame(update)
}

// 切语言后姓名长度变了，落点要重新量
watch(locale, async () => {
  await nextTick()
  measure()
})

onMounted(() => {
  measure()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', measure)
  if (document.fonts?.ready) document.fonts.ready.then(measure).catch(() => {})
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', measure)
  if (frame) cancelAnimationFrame(frame)
  delete document.documentElement.dataset.avatar
  delete document.documentElement.dataset.avatarDocked
  setDocked(false)
})
</script>

<template>
  <div ref="avatarEl" class="floating-avatar" :class="{ 'is-active': activeRef }" aria-hidden="true">
    <img :src="src" alt="" decoding="async" />
  </div>
  <div ref="nameEl" class="floating-name" :class="{ 'is-active': activeRef }" aria-hidden="true">{{ profile.name }}</div>
  <div
    ref="captionEl"
    class="floating-caption"
    :class="{ 'is-active': activeRef, 'is-role': dockedRef }"
    aria-hidden="true"
  >{{ caption }}</div>
</template>
