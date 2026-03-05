<script setup lang="ts">
defineProps<{
  value: string | number
  activeStep: number
  activateCallback: Function
  icon: string
}>()
</script>

<template>
  <button
    type="button"
    class="bg-transparent border-0 inline-flex flex-col gap-2"
    @click.prevent="activateCallback()"
  >
    <span
      :class="[
        'rounded-full border-2 size-9 inline-flex items-center justify-center',
        {
          'bg-accent text-white border-accent':
            Number(value) <= Number(activeStep),
          'border-border-main': Number(value) > Number(activeStep),
        },
      ]"
    >
      <i :class="icon" style="font-size: 0.9rem" />
    </span>
  </button>
</template>
