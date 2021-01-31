import {ref} from 'vue'

export function useNotice() {
  const notice = ref(false)

  return {
    notice
  }
}