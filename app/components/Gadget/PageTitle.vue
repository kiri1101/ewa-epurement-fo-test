<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <h3 class="text-text-primary font-bold">
    {{ label }}
  </h3>
</template>
