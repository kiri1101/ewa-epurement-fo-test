<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})

const auth = useAuthStore()
</script>

<template>
  <div class="text-text-primary">
    <navbar-auth-nav :title="$t('menu.profile')" />

    <section class="mt-5 flex flex-row space-x-4">
      <div class="w-44">
        <div
          class="h-[calc(100dvh-10rem)] bg-bg-secondary rounded-md border border-border-main"
          aria-label="User profile menu"
        >
          <div
            class="text-center pt-5 pb-3 mx-3 space-y-4 border-b border-border-main"
          >
            <button
              type="button"
              class="rounded-full size-14 text-2xl border border-border-main bg-accent text-white"
            >
              {{ auth.state?.firstName?.charAt(0) }}
            </button>

            <p class="text-xs">
              {{ auth.state?.firstName }} {{ auth.state?.lastName }}
            </p>
          </div>

          <ul class="flex flex-col justify-center mt-3 px-2 space-y-1.5">
            <navbar-profile-nav-link
              to="user/profile/infos"
              :label="$t('page.profile.menu.infos')"
              icon="infos"
            />

            <navbar-profile-nav-link
              to="user/profile/collaborators"
              :label="$t('page.profile.menu.users')"
              icon="users"
            />
          </ul>
        </div>
      </div>

      <div class="grow">
        <NuxtPage :page-key="route => route.fullPath" />
      </div>
    </section>
  </div>
</template>
