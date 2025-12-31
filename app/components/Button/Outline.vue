<script setup>
const pt = {
  root: {
    class:
      'w-full font-semibold h-8 xl:h-9 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-ring',
  },
  label: {
    class:
      'text-xs xl:text-sm text-button-outline-label hover:text-button-outline-hover-label',
  },
}
</script>

<template>
  <Button :pt="pt" />
</template>

<style scoped>
.p-button {
  background: transparent !important;
  border-color: var(--color-button-main-border) !important;
  &:hover {
    background: var(--color-button-outline-hover) !important;
  }
}
</style>
