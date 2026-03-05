<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <button
    type="button"
    class="border rounded-md text-xs px-2.5 py-0.5 max-w-28 w-full font-medium border-status-error text-status-error bg-bg-main"
  >
    {{ label }}
  </button>
</template>
