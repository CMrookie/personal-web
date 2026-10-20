import { onMounted, ref } from 'vue'

type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')
let mounted = false

function apply(next: Theme) {
  theme.value = next
  document.documentElement.dataset.theme = next
  try {
    localStorage.setItem('theme', next)
  } catch {
    /* 隐私模式下 localStorage 可能不可用，忽略即可 */
  }
}

export function useTheme() {
  if (import.meta.client) {
    onMounted(() => {
      if (mounted) return
      mounted = true
      theme.value = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
    })
  }

  const toggle = () => apply(theme.value === 'dark' ? 'light' : 'dark')
  return { theme, toggle }
}
