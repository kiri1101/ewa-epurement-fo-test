<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})

const config = useRuntimeConfig()
const { $apiFetch } = useNuxtApp() as any
const { t, locale } = useI18n()
const { e, s } = useNotify()
const assetStore = useAssetStore()
const auth = useAuthStore()
const showLoader = ref({
  banner: false,
})

onMounted(() => {
  showLoader.value.banner = assetStore.hasAssets ? true : false
  console.log(auth.state)
})

useHead({
  title: `${t('meta.title.dashboard')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})
</script>

<template>
  <div>
    <navbar-auth-nav :title="$t('menu.dashboard')">
      <button-primary label="New transfer" icon="pi pi-plus-circle" />

      <button-outline label="Simulator" />
    </navbar-auth-nav>

    <section class="mt-3" aria-label="Dashboard banner component">
      <gadget-banner>
        <img
          :src="assetStore.list.spline"
          class="object-cover object-center w-28 right-0 top-0 absolute"
          alt="Spline"
        />

        <div class="grid grid-cols-2 h-full">
          <div
            class="text-sidebar-text-primary grid justify-center ml-2 text-sm lg:text-base"
          >
            <h3 class="translate-y-7">
              <p>
                Welcome,
                <span class="font-bold ml-1">
                  {{ auth.state?.firstName }}!
                </span>
              </p>
              <p>Manage your international transfers with ease</p>
            </h3>
          </div>

          <div class="flex justify-end">
            <gadget-image-blur>
              <img
                :src="assetStore.list.bank"
                class="object-cover object-center size-24 rounded-3xl z-30"
                alt="Bank Logo"
              />
            </gadget-image-blur>
          </div>
        </div>
      </gadget-banner>
    </section>

    <section class="mt-7">
      <ul class="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <li
          class="flex justify-between bg-stat-total-demand py-1.5 px-3 rounded-lg"
        >
          <div class="self-center">
            <img
              v-if="showLoader.banner"
              :src="assetStore.list.stats_file"
              class="object-cover object-center size-14"
              alt="File Stats Logo"
            />

            <skeleton v-else width="4rem" height="4rem" />
          </div>

          <div class="text-right">
            <div class="justify-self-end">
              <img
                v-if="showLoader.banner"
                :src="assetStore.list.stat_arrow_up"
                class="object-cover object-center size-7"
                alt="File Stats Logo"
              />

              <skeleton v-else width="1.75rem" height="1.75rem" />
            </div>

            <h3 class="text-xs xl:text-sm font-medium">
              Total <span class="font-bold">requests</span>
            </h3>

            <h2 class="text-2xl xl:text-3xl font-semibold">20</h2>
          </div>
        </li>

        <li
          class="flex justify-between bg-stat-pending-demand py-1.5 px-3 rounded-lg"
        >
          <div class="self-center">
            <img
              v-if="showLoader.banner"
              :src="assetStore.list.stats_pending"
              class="object-cover object-center size-14"
              alt="File Stats Logo"
            />

            <skeleton v-else width="4rem" height="4rem" />
          </div>

          <div class="text-right">
            <div class="justify-self-end">
              <img
                v-if="showLoader.banner"
                :src="assetStore.list.stat_arrow_up"
                class="object-cover object-center size-7"
                alt="File Stats Logo"
              />

              <skeleton v-else width="1.75rem" height="1.75rem" />
            </div>

            <h3 class="text-xs xl:text-sm font-medium">
              Pending <span class="font-bold">requests</span>
            </h3>

            <h2 class="text-2xl xl:text-3xl font-semibold">20</h2>
          </div>
        </li>

        <li
          class="flex justify-between bg-stat-closed-demand py-1.5 px-3 rounded-lg"
        >
          <div class="self-center">
            <img
              v-if="showLoader.banner"
              :src="assetStore.list.stats_closed"
              class="object-cover object-center size-14"
              alt="File Stats Logo"
            />

            <skeleton v-else width="4rem" height="4rem" />
          </div>

          <div class="text-right">
            <div class="justify-self-end">
              <img
                v-if="showLoader.banner"
                :src="assetStore.list.stat_arrow_up"
                class="object-cover object-center size-7"
                alt="File Stats Logo"
              />

              <skeleton v-else width="1.75rem" height="1.75rem" />
            </div>

            <h3 class="text-xs xl:text-sm font-medium">
              CLosed <span class="font-bold">requests</span>
            </h3>

            <h2 class="text-2xl xl:text-3xl font-semibold">20</h2>
          </div>
        </li>

        <li
          class="flex justify-between bg-stat-required-action py-1.5 px-3 rounded-lg"
        >
          <div class="self-center">
            <img
              v-if="showLoader.banner"
              :src="assetStore.list.stats_action_req"
              class="object-cover object-center size-14"
              alt="File Stats Logo"
            />

            <skeleton v-else width="4rem" height="4rem" />
          </div>

          <div class="text-right">
            <div class="justify-self-end">
              <img
                v-if="showLoader.banner"
                :src="assetStore.list.stat_arrow_up"
                class="object-cover object-center size-7"
                alt="File Stats Logo"
              />

              <skeleton v-else width="1.75rem" height="1.75rem" />
            </div>

            <h3 class="text-xs xl:text-sm font-medium">
              Action <span class="font-bold">required</span>
            </h3>

            <h2 class="text-2xl xl:text-3xl font-semibold">20</h2>
          </div>
        </li>
      </ul>
    </section>

    <section class="mt-10 pb-5">
      <p
        class="border-l-4 border-auth-page bg-gray-100 pl-5 py-1.5 mb-5 text-base text-gray-500 font-normal"
      >
        Transfer history
      </p>

      <table-transfert />
    </section>
  </div>
</template>

<style scoped>
.stats-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 0.75rem;
}
</style>
