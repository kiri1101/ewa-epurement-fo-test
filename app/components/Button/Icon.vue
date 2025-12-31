<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <i
    :class="[
      'bg-button-main hover:bg-button-main-hover p-1.5 rounded cursor-pointer text-button-main-label hover:text-button-main-hover-label',
      icon,
    ]"
    style="font-size: 0.9rem"
  />
</template>
