<script setup>
const pt = {
  root: {
    class: 'h-9 bg-input cursor-pointer',
  },
}
</script>

<template>
  <input-group-addon :pt="pt">
    <slot />
  </input-group-addon>
</template>

<style>
.p-inputgroupaddon {
  background: var(--color-input) !important;
  border: 1px solid var(--color-input-border) !important;

  &:hover {
    @media (hover: hover) {
      background: var(--color-input-focus) !important;
      border-color: var(--color-input-border-focus) !important;
      box-shadow: 0 0 0 0.2rem var(--color-input-focus-ring) !important;
    }
  }
}
</style>
