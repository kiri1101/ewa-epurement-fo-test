<script setup lang="ts">
const { type = 'text', placeholder = '' } = defineProps<{
  identifier: string
  placeholder?: string
  type?: string
}>()

const pt = {
  root: {
    class:
      'w-full px-4 py-2 h-9 placeholder-text-muted focus:outline-none peer',
    style: 'font-size: 0.875rem; line-height: 1.25rem;',
  },
}
</script>

<template>
  <InputText
    :id="identifier"
    :name="identifier"
    :type="type"
    :pt="pt"
    :placeholder="placeholder"
    autocomplete="off"
  />
</template>

<style scoped>
.p-inputtext.p-variant-filled {
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

.p-inputtext:disabled {
  background: var(--color-bg-secondary) !important;
  color: var(--color-text-muted) !important;
}
</style>
