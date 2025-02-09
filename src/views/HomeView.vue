<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useMouse } from '@/composables/mouse'

const { x, y } = useMouse()
</script>

<template>
  <main>
    <TheWelcome />
    <p>Mouse position (Home) is at: {{ x }}, {{ y }}</p>
  </main>
</template>
