import { ref } from 'vue'

/** 头像是否已停靠进 header —— 由 FloatingAvatar 驱动，其它组件订阅 */
const docked = ref(false)

export function useAvatarDock() {
  function setDocked(next: boolean) {
    if (docked.value !== next) docked.value = next
  }
  return { docked, setDocked }
}
