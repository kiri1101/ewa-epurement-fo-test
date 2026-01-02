<script setup lang="ts">
const assetStore = useAssetStore()
const showLoader = ref(true)

onMounted(() => {
  showLoader.value = assetStore.hasAssets ? false : true
})
</script>

<template>
  <div class="grid grid-rows-[auto_1fr]">
    <nav
      class="grid items-end h-16 grid-cols-2 py-1 border-b-4 border-auth-navbar-border"
    >
      <div class="flex justify-center">
        <div
          class="z-10 flex items-center justify-center translate-y-[1.99rem] lg:translate-y-[2.49rem] border-b-4 border-x-4 border-auth-navbar-border w-20 lg:w-28 h-7 lg:h-9 bg-auth-navbar"
        >
          <nuxt-link to="/" class="-translate-y-4">
            <div v-if="showLoader" class="w-14 h-8 lg:w-20 lg:h-12">
              <skeleton width="100%" height="100%" />
            </div>

            <img
              v-else
              :src="assetStore.list.logo"
              class="object-cover object-center w-14 lg:w-20"
              alt="App Logo"
            />
          </nuxt-link>
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
        class="grid md:grid-cols-[auto_1fr] gap-5 w-auto max-w-lg md:max-w-4xl p-3 mx-4 sm:mx-auto border-[1.5px] rounded-lg shadow-lg border-auth-form-border backdrop-blur-md"
      >
        <div class="hidden md:block">
          <div v-if="showLoader" class="size-64 md:size-80">
            <skeleton width="100%" height="100%" />
          </div>

          <img
            v-else
            :src="assetStore.list.login_hero"
            class="object-cover object-center rounded-lg size-64 md:size-80"
            alt="Login Hero"
          />
        </div>

        <div class="py-5 text-auth-text-primary">
          <NuxtPage :page-key="route => route.fullPath" />
        </div>
      </div>

      <div
        class="grid md:grid-cols-[auto_1fr] gap-5 w-full max-w-lg md:max-w-2xl lg:max-w-4xl p-3 mx-auto"
      >
        <div class="w-64 lg:w-96 hidden md:block" />

        <div class="flex justify-center">
          <div
            class="flex items-center space-x-2 font-semibold text-auth-text-primary"
          >
            <div>
              <skeleton v-if="showLoader" width="2rem" height="2rem" />

              <img
                v-else
                :src="assetStore.list.security"
                class="object-contain object-center rounded-lg size-8"
                alt="Security Logo"
              />
            </div>

            <h5 class="text-sm">{{ $t('page.login.security') }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
