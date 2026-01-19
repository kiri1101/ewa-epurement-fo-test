<script setup lang="ts">
const { reverseGradient = false } = defineProps<{
  cardStyles: {
    backgroundImage: string;
  },
  reverseGradient?: boolean
}>()
</script>

<template>
  <div :class="[
    'from-card-from to-card-to rounded-lg border border-card-border shadow shadow-gray-500',
    reverseGradient ? 'bg-linear-to-t' : 'bg-linear-to-b'
  ]">
    <div class="px-3 py-3.5 bg-no-repeat bg-position-[top_-1.5rem_right_-1.5rem] bg-contain text-xs"
      :style="cardStyles">
      <slot />
    </div>
  </div>
</template>