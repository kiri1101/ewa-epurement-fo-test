<script setup lang="ts">
const { placeholder = '' } = defineProps<{
  placeholder?: string
}>()

const pt = {
  root: {
    class:
      'w-full h-9 focus:border-auth-input-border-focus placeholder-input-placeholder focus:outline-none focus:ring-2 focus:ring-auth-input-ring peer',
  },
  label: {
    style: 'font-size: 0.875rem; line-height: 1.25rem;',
  },
  optionLabel: {
    style: 'font-size: 0.875rem; line-height: 1.25rem;',
  },
}
</script>

<template>
  <Select
    option-label="name"
    option-value="value"
    :placeholder="placeholder"
    :pt="pt"
  />
</template>

<style scoped>
.p-select {
  background-color: var(--color-input) !important;
  border-color: var(--color-border-dark-brown) !important;
  color: var(--color-input-text) !important;

  &:focus {
    background-color: var(--color-input-focus) !important;
    border-color: var(--color-border-brown) !important;
    box-shadow: 0 0 0 0.2rem var(--color-border-focus-brown) !important;
    color: var(--color-input-focus-text) !important;
  }
}
</style>
