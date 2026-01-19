<script setup lang="ts">
const assetStore = useAssetStore()
const showLoader = ref(true)

onMounted(() => {
    showLoader.value = assetStore.hasAssets ? false : true
})

const cardStyles = computed(() => ({
    backgroundImage: showLoader.value ? '' : `url(${assetStore.list.account_bg})`,
}))
</script>

<template>
    <div class="bg-[#E9E9E9] rounded-lg border border-[#868686] shadow shadow-gray-500">
        <div class="p-5 bg-no-repeat bg-position-[top_-1.5rem_right_-1.5rem] bg-contain text-xs" :style="cardStyles">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <div>
                        <skeleton v-if="showLoader" width="3.5rem" height="2.1rem" />

                        <img v-else :src="assetStore.list.disable_logo"
                            class="object-cover object-center w-14 bg-white p-2 rounded-md" alt="App Logo" />
                    </div>

                    <div>
                        <h3 class="uppercase font-bold">AFG Bank</h3>
                        <h4>Compte courant</h4>
                    </div>
                </div>

                <button type="button" class="border border-[#797171] bg-[#fff] text-[#797171] rounded-xl px-2.5 py-0.5">
                    Inactive
                </button>
            </div>

            <div class="mt-1">
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

                <p class="py-1.5 border-b border-black/20 text-input-disabled-text font-semibold text-base">
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
    </div>
</template>