<script setup lang="ts">
const { prefix, to, icon, label } = defineProps<{
  prefix: string
  to: string
  icon: keyof ReturnType<typeof navLinkRegistry>
  label: string
}>()

const registry = navLinkRegistry()

const iconComponent = computed(() => registry[icon])
</script>

<template>
  <nuxt-link
    :to="`/${to}`"
    :class="[
      'relative cursor-pointer',
      {
        'text-sidebar-active-text': $route.name?.toString().startsWith(prefix),
        'text-white hover:text-sidebar-active-text hover:bg-sidebar-active-bg h-10 rounded-l-xl translate-x-[0.01rem] group transition duration-100 ease-linear':
          !$route.name?.toString().startsWith(prefix),
      },
    ]"
  >
    <svg-sidebar-item
      :class="[
        'translate-x-[0.02rem] z-0',
        {
          'fill-sidebar-active-bg': $route.name?.toString().startsWith(prefix),
        },
      ]"
    />

    <div
      :class="[
        'absolute top-1/2 z-50 flex flex-row items-center space-x-3 pl-5',
        {
          'top-3.5': $route.name?.toString().startsWith(prefix),
          'top-2.5': !$route.name?.toString().startsWith(prefix),
        },
      ]"
    >
      <component
        :is="iconComponent"
        class="group-hover:fill-sidebar-active-text transition duration-100 ease-linear"
        :active="$route.name?.toString().startsWith(prefix)"
      />

      <h5 class="text-sm font-semibold">{{ label }}</h5>
    </div>
  </nuxt-link>
</template>
