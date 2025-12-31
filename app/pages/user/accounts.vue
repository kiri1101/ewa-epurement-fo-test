<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})

const config = useRuntimeConfig()
const { t } = useI18n()
const assetStore = useAssetStore()
const showLoader = ref(true)

useHead({
  title: `${t('meta.title.account')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})

onMounted(() => {
  showLoader.value = assetStore.hasAssets ? false : true
})

const cardStyles = computed(() => ({
  backgroundImage: showLoader.value ? '' : `url(${assetStore.list.account_bg})`,
}))
</script>

<template>
  <div>
    <navbar-auth-nav :title="$t('menu.account')" />

    <section class="mt-3">
      <gadget-banner>
        <div class="grid grid-cols-[auto_1fr] h-full">
          <div
            class="text-sidebar-text-primary grid justify-center ml-2 text-sm lg:text-base"
          >
            <h3 class="translate-y-7">
              <p>Voici la liste des comptes bancaires liés à ton compte.</p>

              <p>Gérez vos comptes de débit</p>
            </h3>
          </div>

          <div class="flex justify-end">
            <gadget-image-blur>
              <img
                :src="assetStore.list.account"
                class="object-cover object-center h-26 w-auto z-30"
                alt="Bank Logo"
              />
            </gadget-image-blur>
          </div>
        </div>
      </gadget-banner>
    </section>

    <section class="mt-7">
      <ul class="cards">
        <li
          class="bg-linear-to-b from-[#F2F4FF] to-[#C8D2FD] rounded-lg border border-[#797171] shadow shadow-gray-500"
        >
          <div
            class="p-5 bg-no-repeat bg-position-[top_-1.5rem_right_-1.5rem] bg-contain"
            :style="cardStyles"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <div>
                  <skeleton v-if="showLoader" width="5rem" height="3rem" />

                  <img
                    v-else
                    :src="assetStore.list.logo"
                    class="object-cover object-center w-20 bg-white p-2 rounded-md"
                    alt="App Logo"
                  />
                </div>

                <div>
                  <h3 class="uppercase font-bold text-sm">AFG Bank</h3>
                  <h4 class="text-xs">Compte courant</h4>
                </div>
              </div>

              <button
                type="button"
                class="border border-[#00741D] bg-[#DDF8E5] text-[#00741D] rounded-xl px-3 py-1 text-xs"
              >
                Active
              </button>
            </div>

            <div class="text-sm mt-5">
              <ul class="flex justify-between py-3 border-b border-black/20">
                <li>
                  <h3 class="font-bold">Agence</h3>
                  <h3>Agence Paris Centre</h3>
                </li>
                <li>
                  <h3 class="font-bold">Conseiller</h3>
                  <h3>Marie Martin</h3>
                </li>
              </ul>

              <p
                class="py-1.5 border-b border-black/20 text-input-disabled-text font-semibold text-base"
              >
                FR76 1234 5678 9012 3456 7890 123
              </p>

              <div class="flex justify-between items-center pt-2.5">
                <h3>Solde disponible</h3>

                <span class="bg-white py-0.5 px-2.5 font-bold rounded-xl">
                  20.000.000 XFA
                </span>
              </div>
            </div>
          </div>
        </li>

        <li
          class="bg-linear-to-b from-[#F2F4FF] to-[#C8D2FD] rounded-lg border border-[#797171] shadow shadow-gray-500"
        >
          <div
            class="p-5 bg-no-repeat bg-position-[top_-1.5rem_right_-1.5rem] bg-contain"
            :style="cardStyles"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <div>
                  <skeleton v-if="showLoader" width="5rem" height="3rem" />

                  <img
                    v-else
                    :src="assetStore.list.logo"
                    class="object-cover object-center w-20 bg-white p-2 rounded-md"
                    alt="App Logo"
                  />
                </div>

                <div>
                  <h3 class="uppercase font-bold text-sm">AFG Bank</h3>
                  <h4 class="text-xs">Compte courant</h4>
                </div>
              </div>

              <button
                type="button"
                class="border border-[#00741D] bg-[#DDF8E5] text-[#00741D] rounded-xl px-3 py-1 text-xs"
              >
                Active
              </button>
            </div>

            <div class="text-sm mt-5">
              <ul class="flex justify-between py-3 border-b border-black/20">
                <li>
                  <h3 class="font-bold">Agence</h3>
                  <h3>Agence Paris Centre</h3>
                </li>
                <li>
                  <h3 class="font-bold">Conseiller</h3>
                  <h3>Marie Martin</h3>
                </li>
              </ul>

              <p
                class="py-1.5 border-b border-black/20 text-input-disabled-text font-semibold text-base"
              >
                FR76 1234 5678 9012 3456 7890 123
              </p>

              <div class="flex justify-between items-center pt-2.5">
                <h3>Solde disponible</h3>

                <span class="bg-white py-0.5 px-2.5 font-bold rounded-xl">
                  20.000.000 XFA
                </span>
              </div>
            </div>
          </div>
        </li>

        <li
          class="bg-[#E9E9E9] rounded-lg border border-[#868686] shadow shadow-gray-500"
        >
          <div
            class="p-5 bg-no-repeat bg-position-[top_-1.5rem_right_-1.5rem] bg-contain"
            :style="cardStyles"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <div>
                  <skeleton v-if="showLoader" width="5rem" height="3rem" />

                  <img
                    v-else
                    :src="assetStore.list.disable_logo"
                    class="object-cover object-center w-20 bg-white p-2 rounded-md"
                    alt="App Logo"
                  />
                </div>

                <div>
                  <h3 class="uppercase font-bold text-sm">AFG Bank</h3>
                  <h4 class="text-xs">Compte courant</h4>
                </div>
              </div>

              <button
                type="button"
                class="border border-[#797171] bg-[#fff] text-[#797171] rounded-xl px-3 py-1 text-xs"
              >
                Inactive
              </button>
            </div>

            <div class="text-sm mt-5">
              <ul class="flex justify-between py-3 border-b border-black/20">
                <li>
                  <h3 class="font-bold">Agence</h3>
                  <h3>Agence Paris Centre</h3>
                </li>
                <li>
                  <h3 class="font-bold">Conseiller</h3>
                  <h3>Marie Martin</h3>
                </li>
              </ul>

              <p
                class="py-1.5 border-b border-black/20 text-input-disabled-text font-semibold text-base"
              >
                FR76 1234 5678 9012 3456 7890 123
              </p>

              <div class="flex justify-between items-center pt-2.5">
                <h3>Solde disponible</h3>

                <span class="bg-white py-0.5 px-2.5 font-bold rounded-xl">
                  20.000.000 XFA
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 0.75rem;
}
</style>
