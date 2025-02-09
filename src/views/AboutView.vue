<script setup lang="ts">
import { ref } from 'vue'
import { useMouse } from '@/composables/mouse'
import { useCounter } from '@/composables/counter'

const count = ref(0)

const { x, y } = useMouse()
const { doubleCount, increment } = useCounter(count)
</script>

<template>
  <div class="about">
    <p>Mouse position (About) is at: {{ x }}, {{ y }}</p>

    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
