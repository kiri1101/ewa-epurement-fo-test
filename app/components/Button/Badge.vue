<script setup lang="ts">
const { state = 'success' } = defineProps<{
  state?: string
  label: string
}>()
</script>

<template>
  <button
    type="button"
    :class="[
      'border py-0.5 text-xs max-w-28 w-full rounded-md',
      { 'bg-button-green border-border-green': state === 'success' },
    ]"
  >
    {{ label }}
  </button>
</template>
