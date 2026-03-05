<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <p
    class="border-l-4 border-primary-light bg-bg-secondary pl-5 py-1.5 mb-5 text-base text-text-secondary font-normal"
  >
    {{ label }}
  </p>
</template>
