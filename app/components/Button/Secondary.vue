<script setup lang="ts">
const pt = {
  root: {
    class:
      'w-full font-semibold h-8 xl:h-9 rounded-md hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light',
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
  background: var(--color-primary-dark) !important;
  border-color: var(--color-primary-dark) !important;

  &:hover {
    background: var(--color-primary-light) !important;
    border-color: var(--color-primary-light) !important;
  }
}
</style>
