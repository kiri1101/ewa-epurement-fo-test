<script setup lang="ts">
const pt = {
  root: {
    class:
      'w-full font-semibold h-8 xl:h-9 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-dark',
  },
  label: {
    class: 'text-xs xl:text-sm text-white text-nowrap',
  },
}
</script>

<template>
  <Button :pt="pt" />
</template>

<style scoped>
.p-button {
  background: var(--color-accent) !important;
  border-color: var(--color-accent) !important;

  &:hover {
    background: var(--color-accent-light) !important;
    border-color: var(--color-accent-light) !important;
  }
}
</style>
