<script setup lang="ts">
const {
  placeholder = '',
  nameKey = 'name',
  valueKey = 'value',
} = defineProps<{
  placeholder?: string
  nameKey?: string
  valueKey?: string | null
}>()

const pt = {
  root: {
    class:
      'w-full h-9 placeholder-text-muted focus:outline-none focus:ring-2 peer',
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
    :option-label="nameKey"
    :option-value="valueKey"
    :placeholder="placeholder"
    :pt="pt"
    filter
  />
</template>

<style>
.p-select {
  background-color: var(--color-bg-main) !important;
  border-color: var(--color-primary-light) !important;
  color: var(--color-text-primary) !important;

  &:focus {
    background-color: var(--color-bg-secondary) !important;
    border-color: var(--color-primary-light) !important;
    box-shadow: 0 0 0 0.2rem var(--color-ring-focus) !important;
    color: var(--color-text-primary) !important;
  }
}
.p-select-filter {
  height: 2rem !important;
  background-color: var(--color-bg-main) !important;
  border-color: var(--color-primary-light) !important;
  color: var(--color-text-primary) !important;

  &:focus {
    background-color: var(--color-bg-secondary) !important;
    border-color: var(--color-primary-light) !important;
    box-shadow: 0 0 0 0.2rem var(--color-ring-focus) !important;
    color: var(--color-text-primary) !important;
  }
}
</style>
