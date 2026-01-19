<script setup lang="ts">
const config = useRuntimeConfig()
const { $apiFetch } = useNuxtApp() as any
const assetStore = useAssetStore()
const isLoading = ref(false)
const showLoader = ref(true)

onMounted(() => {
  showLoader.value = assetStore.hasAssets ? false : true
})

const showingLoader = () => (isLoading.value = true)

const hidingLoader = () => (isLoading.value = false)

const signOut = async () => {
  showingLoader()

  try {
    await $apiFetch(config.public.api.logout, {
      method: 'POST',
    })
  } catch (error) {
  } finally {
    setTimeout(() => {
      hidingLoader()
      return navigateTo(config.public.page.login)
    }, 1000)
  }
}
</script>

<template>
  <main class="w-screen antialiased h-dvh font-montserrat bg-app flex flex-row">
    <aside class="max-w-56 w-full bg-sidebar-menu flex flex-col">
      <div class="grow">
        <div
          class="py-5 pl-5 ml-5 mr-2.5 mt-2 border-b border-sidebar-logo-border"
        >
          <skeleton v-if="showLoader" width="5rem" height="3rem" />

          <img
            v-else
            :src="assetStore.list.logo"
            class="object-cover object-center w-20"
            alt="App Logo"
          />
        </div>

        <ul class="mt-10 flex flex-col pl-5 space-y-1">
          <nuxt-link
            to="/dashboard"
            :class="[
              'relative cursor-pointer',
              {
                'text-sidebar-text-active': $route.name === 'dashboard',
                'text-sidebar-text-primary hover:text-sidebar-text-active hover:bg-app h-10 rounded-l-lg translate-x-[0.01rem] group transition duration-200 ease-linear':
                  $route.name !== 'dashboard',
              },
            ]"
          >
            <svg-sidebar-item
              :class="[
                'translate-x-[0.02rem] z-0',
                {
                  'fill-app': $route.name === 'dashboard',
                },
              ]"
            />

            <div
              :class="[
                'absolute z-50 flex flex-row items-center space-x-3 pl-5',
                {
                  'top-3.5': $route.name === 'dashboard',
                  'top-2.5': $route.name !== 'dashboard',
                },
              ]"
            >
              <svg-dashboard
                class="group-hover:fill-sidebar-svg-hover"
                :active="$route.name === 'dashboard'"
              />

              <h5 class="text-sm font-semibold">{{ $t('menu.dashboard') }}</h5>
            </div>
          </nuxt-link>

          <nuxt-link
            to="/user/accounts"
            :class="[
              'relative cursor-pointer',
              {
                'text-sidebar-text-active': $route.name === 'user-accounts',
                'text-sidebar-text-primary hover:text-sidebar-text-active hover:bg-app h-10 rounded-l-lg translate-x-[0.01rem] group transition duration-200 ease-linear':
                  $route.name !== 'user-accounts',
              },
            ]"
          >
            <svg-sidebar-item
              :class="[
                'translate-x-[0.02rem] z-0',
                {
                  'fill-app': $route.name === 'user-accounts',
                },
              ]"
            />

            <div
              :class="[
                'absolute z-50 flex flex-row items-center space-x-3 pl-5',
                {
                  'top-4': $route.name === 'user-accounts',
                  'top-2.5': $route.name !== 'user-accounts',
                },
              ]"
            >
              <svg-wallet
                class="group-hover:fill-sidebar-svg-hover"
                :active="$route.name === 'user-accounts'"
              />

              <h5 class="text-sm font-semibold">{{ $t('menu.account') }}</h5>
            </div>
          </nuxt-link>

          <nuxt-link
            to="/beneficiary"
            :class="[
              'relative cursor-pointer',
              {
                'text-sidebar-text-active': $route.name === 'beneficiary',
                'text-sidebar-text-primary hover:text-sidebar-text-active hover:bg-app h-10 rounded-l-lg translate-x-[0.01rem] group transition duration-200 ease-linear':
                  $route.name !== 'beneficiary',
              },
            ]"
          >
            <svg-sidebar-item
              :class="[
                'translate-x-[0.01rem] z-0',
                {
                  'fill-app': $route.name === 'beneficiary',
                },
              ]"
            />

            <div
              :class="[
                'absolute z-50 flex flex-row items-center space-x-3 pl-5',
                {
                  'top-4': $route.name === 'beneficiary',
                  'top-2.5': $route.name !== 'beneficiary',
                },
              ]"
            >
              <svg-beneficiary
                class="group-hover:fill-sidebar-svg-hover"
                :active="$route.name === 'beneficiary'"
              />

              <h5 class="text-sm font-semibold">
                {{ $t('menu.beneficiary') }}
              </h5>
            </div>
          </nuxt-link>

          <nuxt-link
            to="/transfer"
            :class="[
              'relative cursor-pointer',
              {
                'text-sidebar-text-active': $route.name === 'transfer',
                'text-sidebar-text-primary hover:text-sidebar-text-active hover:bg-app h-10 rounded-l-lg translate-x-[0.01rem] group transition duration-200 ease-linear':
                  $route.name !== 'transfer',
              },
            ]"
          >
            <svg-sidebar-item
              :class="[
                'translate-x-[0.01rem] z-0',
                {
                  'fill-app': $route.name === 'transfer',
                },
              ]"
            />

            <div
              :class="[
                'absolute z-50 flex flex-row items-center space-x-3 pl-5',
                {
                  'top-4': $route.name === 'transfer',
                  'top-2.5': $route.name !== 'transfer',
                },
              ]"
            >
              <svg-transfer
                class="group-hover:fill-sidebar-svg-hover"
                :active="$route.name === 'transfer'"
              />

              <h5 class="text-sm font-semibold">
                {{ $t('menu.transfer') }}
              </h5>
            </div>
          </nuxt-link>

          <nuxt-link
            to="/user/profile/infos"
            :class="[
              'relative cursor-pointer',
              {
                'text-sidebar-text-active': $route.name
                  ?.toString()
                  .startsWith('user-profile'),
                'text-sidebar-text-primary hover:text-sidebar-text-active hover:bg-app h-10 rounded-l-lg translate-x-[0.01rem] group transition duration-200 ease-linear':
                  !$route.name?.toString().startsWith('user-profile'),
              },
            ]"
          >
            <svg-sidebar-item
              :class="[
                'translate-x-[0.02rem] z-0',
                {
                  'fill-app': $route.name
                    ?.toString()
                    .startsWith('user-profile'),
                },
              ]"
            />

            <div
              :class="[
                'absolute z-50 flex flex-row items-center space-x-3 pl-5',
                {
                  'top-4': $route.name?.toString().startsWith('user-profile'),
                  'top-2.5': !$route.name
                    ?.toString()
                    .startsWith('user-profile'),
                },
              ]"
            >
              <svg-profile
                class="group-hover:fill-sidebar-svg-hover"
                :active="$route.name?.toString().startsWith('user-profile')"
              />

              <h5 class="text-sm font-semibold">
                {{ $t('menu.profile') }}
              </h5>
            </div>
          </nuxt-link>
        </ul>
      </div>

      <div class="mx-5 py-3 border-t border-dashed border-white">
        <button-primary
          type="button"
          :label="$t('button.logout')"
          :loading="isLoading"
          @click.prevent="signOut"
        />
      </div>
    </aside>

    <div class="grow px-5 pb-3 overflow-auto">
      <slot />
    </div>
  </main>
</template>
