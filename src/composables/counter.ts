import { computed, watch } from 'vue'
import type { Ref } from 'vue'

export function useCounter(count: Ref<number>) {
  const doubleCount = computed(() => count.value * 2)

  const increment = () => {
    count.value++
  }

  watch(count, (newValue) => {
    console.log(`Count changed: ${newValue}`)
  })

  return {
    doubleCount,
    increment,
  }
}
