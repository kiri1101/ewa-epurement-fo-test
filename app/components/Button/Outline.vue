<script setup>
const pt = {
  root: {
    class:
      'w-full font-semibold h-8 xl:h-9 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent',
  },
  label: {
    class: 'text-xs xl:text-sm text-accent',
  },
}
</script>

<template>
  <Button :pt="pt" />
</template>

<style scoped>
.p-button {
  background: transparent !important;
  border-color: var(--color-accent) !important;
  &:hover {
    background: var(--color-accent-muted) !important;
  }
}
</style>
