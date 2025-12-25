<script setup>
const pt = {
  root: {
    class:
      'w-full font-semibold h-9 rounded-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary-ring',
  },
  label: {
    class: 'text-sm text-button-main-label hover:text-button-main-hover-label',
  },
}
</script>

<template>
  <Button :pt="pt" />
</template>

<style scoped>
.p-button {
  background: var(--color-button-main) !important;
  border-color: var(--color-button-main-border) !important;
  &:hover {
    background: var(--color-button-main-hover) !important;
    border-color: var(--color-button-main-hover-border) !important;
  }
}
</style>
