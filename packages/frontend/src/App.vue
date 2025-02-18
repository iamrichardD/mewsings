// packages/frontend/src/App.vue
<script setup lang="ts">
import { ref } from 'vue'
import type { NarrativeWriting } from '@mewsings/core'

const writings = ref<NarrativeWriting[]>([])
</script>

<template>
  <div>
    <h1>Mewsings</h1>
    <div v-for="writing in writings" :key="writing.id">
      {{ writing.title }}
    </div>
  </div>
</template>
