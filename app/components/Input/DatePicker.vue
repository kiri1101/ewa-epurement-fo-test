<script setup lang="ts">
const { placeholder = '' } = defineProps<{
  placeholder?: string
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
  <DatePicker
    input-class="h-9 px-4 py-2 w-full bg-input shadow border border-border-dark-brown text-input-focus-text peer"
    :input-style="{
      'font-size': '0.875rem',
      'line-height': '1.25rem',
      'border-color': 'var(--color-border-dark-brown) !important',
      '&:focus': {
        'background-color': 'var(--color-input-focus) !important;',
        'border-color': 'var(--color-border-brown) !important;',
        'box-shadow': '0 0 0 0.2rem var(--color-border-focus-brown) !important',
        color: 'var(--color-input-focus-text) !important',
      },
    }"
    :placeholder="placeholder"
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
