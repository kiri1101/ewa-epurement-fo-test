<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})
</script>

<template>
  <div class="text-page-title-text">
    <navbar-auth-nav :title="$t('menu.profile')" />

    <section class="mt-5 flex flex-row space-x-4">
      <div class="w-44">
        <div
          class="h-[calc(100dvh-10rem)] bg-sidebar rounded-md border border-border-brown"
          aria-label="User profile menu"
        >
          <div
            class="text-center pt-5 pb-3 mx-3 space-y-4 border-b border-border-dark"
          >
            <button
              type="button"
              class="rounded-full size-14 text-2xl border border-border-black bg-profile"
            >
              NC
            </button>

            <p class="text-sm">Nom et prénom</p>
          </div>

          <ul class="flex flex-col justify-center mt-3 px-2 space-y-1.5">
            <nuxt-link
              to="/user/profile/infos"
              :class="[
                'flex items-end space-x-1 group  cursor-pointer py-1 px-5 rounded ',
                {
                  'bg-sidebar-hover text-sidebar-svg':
                    $route.name === 'user-profile-infos',
                  'hover:bg-sidebar-hover hover:text-sidebar-svg':
                    $route.name !== 'user-profile-infos',
                },
              ]"
            >
              <svg-infos
                class="group-hover:fill-sidebar-svg"
                :active="$route.name === 'user-profile-infos'"
              />

              <h4 class="text-xs">Information</h4>
            </nuxt-link>

            <li
              class="flex items-end space-x-2 group hover:bg-sidebar-hover cursor-pointer py-1 px-5 rounded hover:text-sidebar-svg"
            >
              <svg-preference class="group-hover:fill-sidebar-svg" />

              <h4 class="text-xs">Preferences</h4>
            </li>

            <nuxt-link
              to="/user/profile/managers"
              :class="[
                'flex items-center space-x-1 group  cursor-pointer py-1 px-5 rounded ',
                {
                  'bg-sidebar-hover text-sidebar-svg':
                    $route.name === 'user-profile-managers',
                  'hover:bg-sidebar-hover hover:text-sidebar-svg':
                    $route.name !== 'user-profile-managers',
                },
              ]"
            >
              <svg-users
                class="group-hover:fill-sidebar-svg"
                :active="$route.name === 'user-profile-managers'"
              />

              <h4 class="text-xs">Users</h4>
            </nuxt-link>

            <li
              class="flex items-center space-x-2 group hover:bg-sidebar-hover cursor-pointer py-1 px-5 rounded hover:text-sidebar-svg"
            >
              <svg-security class="group-hover:fill-sidebar-svg" />

              <h4 class="text-xs">Security</h4>
            </li>
          </ul>
        </div>
      </div>

      <div class="grow">
        <NuxtPage :page-key="route => route.fullPath" />
      </div>
    </section>
  </div>
</template>
