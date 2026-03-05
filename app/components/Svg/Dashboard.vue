<script setup lang="ts">
const { active = false } = defineProps<{
  active?: boolean
}>()
</script>

<template>
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    :class="[
      'hover:fill-sidebar-active-text',
      {
        'fill-white': !active,
        'fill-sidebar-active-text': active,
      },
    ]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.8785 8.90958C15.7902 8.90958 15.6138 8.99779 15.5256 9.086L14.6435 9.96814L16.4959 11.8206L17.3781 10.9385C17.5545 10.7621 17.5545 10.4092 17.3781 10.2328L16.2313 9.086C16.1431 8.99779 16.0549 8.90958 15.8785 8.90958ZM14.2024 10.4974L8.82136 15.7902V17.6427H10.6738L16.0549 12.2617L14.2024 10.4974ZM15.8785 5.29282H8.82136V0H15.8785V5.29282ZM8.82136 13.285V7.05709H15.8785V7.1453C15.208 7.1453 14.617 7.49816 14.2818 7.84219L8.82136 13.285ZM7.05709 8.82136H0V0H7.05709V8.82136ZM7.05709 15.8785H0V10.5856H7.05709V15.8785Z"
    />
  </svg>
</template>
