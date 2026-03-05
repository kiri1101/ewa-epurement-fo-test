<script setup lang="ts">
const { to, icon, label } = defineProps<{
  to: string
  label: string
  icon: keyof ReturnType<typeof navLinkRegistry>
}>()

const routeName = computed(() => to.replaceAll('/', '-'))

const registry = navLinkRegistry()

const iconComponent = computed(() => registry[icon])
</script>

<template>
  <nuxt-link
    :to="`/${to}`"
    :class="[
      'flex items-center space-x-1 group  cursor-pointer py-1 px-5 rounded ',
      {
        'bg-sidebar-active-text text-white': $route.name === routeName,
        'hover:bg-sidebar-active-text hover:text-white':
          $route.name !== routeName,
      },
    ]"
  >
    <component
      :is="iconComponent"
      class="group-hover:fill-white"
      :active="$route.name === routeName"
    />

    <p class="text-xs">{{ label }}</p>
  </nuxt-link>
</template>
