<script setup lang="ts">
const assetStore = useAssetStore()
const showBanner = ref(false)

onMounted(() => {
  showBanner.value = assetStore.hasAssets ? true : false
})

const bannerStyles = computed(() => ({
  backgroundImage: showBanner.value
    ? `url(${assetStore.list.banner_bg})`
    : `url('')`,
}))
</script>

<template>
  <div>
    <div v-if="showBanner" class="bg-sidebar-menu rounded-md overflow-clip">
      <div
        class="relative bg-contain bg-no-repeat bg-left h-28 w-full"
        :style="bannerStyles"
      >
        <slot />
      </div>
    </div>

    <skeleton v-else width="100%" height="7rem" />
  </div>
</template>
