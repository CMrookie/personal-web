import { ref } from 'vue'
import { profile } from '../data/resume'

/** hero 名字下方那行字：hero 里和飞行层共用同一份状态，乱序动画只跑一份 */
const caption = ref(profile.nameEn)

export function useHeroCaption() {
  return { caption }
}
