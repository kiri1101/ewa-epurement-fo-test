<template>
  <div class="relative">
    <div
      class="bg-radial from-white to-transparent size-38 blur-xl rounded-full opacity-40 pointer-events-none -translate-y-5"
      aria-label="Bank Logo Shadow"
    />

    <div class="absolute top-3 left-5.5">
      <slot />
    </div>
  </div>
</template>
