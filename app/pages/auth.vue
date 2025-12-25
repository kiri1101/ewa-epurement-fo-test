<script setup>
const config = useRuntimeConfig()
const assetStore = useAssetStore()
const showLoader = ref({
  logo: true,
  hero: true,
})

onMounted(() => {
  showLoader.value.logo = assetStore.hasAssets ? false : true
  showLoader.value.hero = assetStore.hasAssets ? false : true
})
</script>

<template>
  <div class="grid grid-rows-[auto_1fr]">
    <nav
      class="grid items-end h-16 grid-cols-2 py-1 border-b-4 border-auth-navbar-border"
    >
      <div class="flex justify-center">
        <div
          class="z-10 flex items-center justify-center translate-y-10 border-b-4 border-x-4 border-auth-navbar-border w-28 h-9 bg-auth-navbar"
        >
          <div class="-translate-y-4">
            <skeleton v-if="showLoader.logo" width="5rem" height="3rem" />

            <img
              v-else
              :src="assetStore.list.logo"
              class="object-cover object-center w-20"
              alt="App Logo"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <gadget-translate />
      </div>
    </nav>

    <div
      class="relative grow bg-auth-page h-[calc(100vh-4rem)] flex flex-col justify-center"
    >
      <div
        class="bg-radial-[at_50%_85%] from-auth-effect to-transparent h-104 w-72 lg:w-lg blur-xl rounded-full opacity-30 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      <div
        class="grid md:grid-cols-[auto_1fr] gap-5 w-full max-w-lg md:max-w-2xl lg:max-w-4xl p-3 mx-auto border-[1.5px] rounded-lg shadow-lg border-auth-form-border backdrop-blur-md"
      >
        <div class="hidden md:block">
          <div v-if="showLoader.hero" class="w-64 h-96 lg:w-96 lg:h-96">
            <skeleton width="100%" height="100%" />
          </div>

          <img
            v-else
            :src="assetStore.list.login_hero"
            class="object-cover object-center rounded-lg size-96"
            alt="Login Hero"
          />
        </div>

        <div class="py-5 text-auth-text-primary">
          <NuxtPage :page-key="route => route.fullPath" />
        </div>
      </div>
    </div>
  </div>
</template>
