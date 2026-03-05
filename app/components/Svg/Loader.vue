<script setup lang="ts">
const {
  width = 'h-5',
  height = 'h-5',
  fill = '#00A651',
} = defineProps<{
  width?: string
  height?: string
  fill?: string
}>()
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="animate-spin"
    :class="[width, height]"
  >
    <path
      d="M12 21a9 9 0 1 1 6.18-15.55.75.75 0 0 1 0 1.06.74.74 0 0 1-1.06 0A7.51 7.51 0 1 0 19.5 12a.75.75 0 1 1 1.5 0 9 9 0 0 1-9 9"
      :fill="fill"
    />
  </svg>
</template>
