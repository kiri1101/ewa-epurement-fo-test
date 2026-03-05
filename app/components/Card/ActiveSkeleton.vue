<script setup lang="ts">
const { reverseGradient = false } = defineProps<{
  reverseGradient?: boolean
}>()
</script>

<template>
  <div
    :class="[
      'from-bg-main to-accent-muted rounded-lg shadow shadow-gray-500 border border-border-main',
      reverseGradient ? 'bg-linear-to-t' : 'bg-linear-to-b',
    ]"
  >
    <div
      class="px-3 py-3.5 bg-no-repeat bg-position-[top_-1.5rem_right_-1.5rem] bg-contain text-xs"
      style="background-image: url('/images/account_bg.svg')"
    >
      <slot />
    </div>
  </div>
</template>
