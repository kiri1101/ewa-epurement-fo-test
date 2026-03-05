<script setup>
const pt = {
  root: {
    class: 'h-9 cursor-pointer',
  },
}
</script>

<template>
  <input-group-addon :pt="pt">
    <slot />
  </input-group-addon>
</template>

<style scoped>
.p-inputgroupaddon {
  background: var(--color-primary-light) !important;
  border: 1px solid var(--color-primary-light) !important;

  &:hover {
    @media (hover: hover) {
      background: var(--color-bg-secondary) !important;
      border-color: var(--color-border-main) !important;
      box-shadow: 0 0 0 0.2rem var(--color-ring-focus) !important;
    }
  }
}
</style>
