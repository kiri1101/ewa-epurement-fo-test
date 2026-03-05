<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <i
    :class="[
      'p-1.5 rounded-sm cursor-pointer text-white bg-accent hover:bg-accent-light',
      icon,
    ]"
    style="font-size: 0.9rem"
  />
</template>
