<script setup lang="ts">
import { useMouse } from '@/composables/mouse'

const { x, y } = useMouse()
</script>

<template>
  <div class="about">
    <p>Mouse position (About) is at: {{ x }}, {{ y }}</p>
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
