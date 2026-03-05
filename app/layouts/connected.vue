<script setup lang="ts">
const config = useRuntimeConfig()
const { $apiFetch } = useNuxtApp() as any
const isLoading = ref(false)

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
    hidingLoader()
    return navigateTo(config.public.page.login)
  }
}
</script>

<template>
  <main
    class="w-screen antialiased h-dvh font-montserrat bg-bg-main flex flex-row"
  >
    <aside class="max-w-56 w-full bg-sidebar-bg flex flex-col">
      <div class="grow">
        <div class="py-5 px-5 ml-5 mr-2.5 mt-2 border-b border-border-main">
          <img
            src="/images/logo.jpg"
            class="object-contain object-center w-auto h-auto max-w-20 max-h-12 mx-auto border-border-main border-2"
            alt="App Logo"
          />
        </div>

        <div class="mt-10 flex flex-col pl-5 space-y-1">
          <navbar-nav-link
            prefix="dashboard"
            to="dashboard"
            icon="dashboard"
            :label="$t('menu.dashboard')"
          />

          <navbar-nav-link
            prefix="accounts"
            to="accounts"
            icon="wallet"
            :label="$t('menu.account')"
          />

          <navbar-nav-link
            prefix="beneficiary"
            to="beneficiary/list"
            icon="beneficiary"
            :label="$t('menu.beneficiary.show')"
          />

          <navbar-nav-link
            prefix="transfer"
            to="transfer/list"
            icon="transfer"
            :label="$t('menu.transfer.show')"
          />

          <navbar-nav-link
            prefix="user"
            to="user/profile/infos"
            icon="profile"
            :label="$t('menu.profile')"
          />

          <navbar-nav-link
            prefix="domiciliation"
            to="domiciliation/list"
            icon="domiciliation"
            :label="$t('menu.domiciliation.show')"
          />
        </div>
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

    <div class="grow px-5 pb-3 overflow-auto text-text-primary">
      <slot />
    </div>
  </main>
</template>
