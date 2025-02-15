import { onMounted, onUnmounted } from 'vue'

export function useEventListener<K extends keyof WindowEventMap>(
  target: EventTarget,
  event: K,
  callback: (event: WindowEventMap[K]) => void,
) {
  onMounted(() => target.addEventListener(event, callback as EventListener))
  onUnmounted(() => target.removeEventListener(event, callback as EventListener))
}
