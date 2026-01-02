<script setup lang="ts">
const { type = 'text', placeholder = '' } = defineProps<{
  identifier: string
  placeholder?: string
  type?: string
}>()

const pt = {
  root: {
    class:
      'w-full px-4 py-2 h-9 focus:border-auth-input-border-focus placeholder-input-placeholder focus:outline-none focus:ring-2 focus:ring-auth-input-ring peer',
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
  background-color: var(--color-input) !important;
  border-color: var(--color-border-dark-brown) !important;
  color: var(--color-input-focus-text) !important;

  &:focus {
    background-color: var(--color-input-focus) !important;
    border-color: var(--color-border-brown) !important;
    box-shadow: 0 0 0 0.2rem var(--color-border-focus-brown) !important;
    color: var(--color-input-focus-text) !important;
  }
}

.p-inputtext:disabled {
  background: var(--color-input-disabled) !important;
  color: var(--color-input-disabled-text) !important;
}
</style>
