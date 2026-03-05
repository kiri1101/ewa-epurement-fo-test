<script setup lang="ts">
defineProps<{
  identifier: string
}>()
</script>

<template>
  <input-otp :name="identifier" variant="filled" :length="6">
    <template #default="{ attrs, events }: any">
      <input
        type="text"
        v-on="events"
        :value="attrs.value"
        class="p-inputtext p-variant-filled p-inputotp-input"
        inputmode="numeric"
        maxlength="1"
        autocomplete="one-time-code"
        data-lpignore="true"
        data-1p-ignore
        data-form-type="other"
      />
    </template>
  </input-otp>
</template>

<style>
.p-inputtext.p-variant-filled {
  background: var(--color-bg-main) !important;
  border-color: var(--color-primary) !important;
  color: var(--color-text-primary) !important;

  &:focus {
    background: var(--color-bg-main) !important;
    border-color: var(--color-primary) !important;
    box-shadow: 0 0 0 0.2rem
      color-mix(in srgb, var(--color-primary) 35%, transparent) !important;
    color: var(--color-text-primary) !important;
  }
}

.p-inputtext {
  &:enabled:focus {
    border-color: var(--color-primary) !important;
  }
}
</style>
