<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="text-white font-semibold text-xxs bg-status-error rounded-md px-1.5 py-px"
  >
    {{ label }}
  </span>
</template>
