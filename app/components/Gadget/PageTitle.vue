<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <h3 class="text-page-title-text font-bold">
    {{ label }}
  </h3>
</template>
