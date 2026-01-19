<script setup lang="ts">
const { background = 'bg-button-main hover:bg-button-main-hover' } = defineProps<{
  icon: string
  background?: string
}>()
</script>

<template>
  <i :class="[
    'p-1.5 rounded cursor-pointer text-button-main-label hover:text-button-main-hover-label',
    background,
    icon,
  ]" style="font-size: 0.9rem" />
</template>
