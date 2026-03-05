<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <p
    class="text-xs font-semibold transition duration-200 ease-linear text-status-error leading-3.5"
  >
    {{ label }}
  </p>
</template>
