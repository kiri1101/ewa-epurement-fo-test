<script setup lang="ts">
import moment from 'moment'

const config = useRuntimeConfig()
const { locale } = useI18n()

onMounted(() => {
  list()
})

const { $apiFetch } = useNuxtApp() as any
const { e } = useNotify()
const domList = ref([])
const filterDomList = ref([])
const isListLoading = ref(false)
const isSearching = ref(false)
const searchIndex = ref('')
const searchTimeout = ref()

const showListLoader = () => (isListLoading.value = true)

const hideListLoader = () => (isListLoading.value = false)

const showSearchLoader = () => (isSearching.value = true)

const hideSearchLoader = () => (isSearching.value = false)

const list = async () => {
  showListLoader()
  try {
    const { apiResponse } = await $apiFetch(
      config.public.api.domiciliation.list,
      {
        method: 'POST',
        body: {
          lang: locale.value,
        },
      },
    )

    domList.value = apiResponse
    filterDomList.value = apiResponse
  } catch (error: any) {
    const errorMsg = handleApiError(error)
    if (errorMsg.length > 0) {
      e(errorMsg)
    }
  } finally {
    hideListLoader()
  }
}

const searchDomiciliation = async () => {
  showSearchLoader()
  filterDomList.value = searchIndex.value
    ? domList.value.filter(
        (item: any) =>
          item.ref.toLowerCase().includes(searchIndex.value.toLowerCase()) ||
          item.beneficiary
            .toLowerCase()
            .includes(searchIndex.value.toLowerCase()) ||
          item.nature.toLowerCase().includes(searchIndex.value.toLowerCase()) ||
          item.baseAmount
            .toLowerCase()
            .includes(searchIndex.value.toLowerCase()) ||
          item.createdAt
            .toLowerCase()
            .includes(searchIndex.value.toLowerCase()) ||
          item.code.toLowerCase().includes(searchIndex.value.toLowerCase()),
      )
    : domList.value
  hideSearchLoader()
}

watch(
  () => searchIndex.value,
  newIndex => {
    clearTimeout(searchTimeout.value)

    if (newIndex.trim().length >= 2) {
      searchTimeout.value = setTimeout(() => {
        searchDomiciliation()
      }, 500)
    } else {
      filterDomList.value = domList.value
    }
  },
)
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-row space-x-6">
      <gadget-search
        v-model="searchIndex"
        :is-loading="isSearching"
        @search="searchDomiciliation"
      />

      <div />
    </div>

    <DataTable
      :value="filterDomList"
      :loading="isListLoading"
      paginator
      :rows="10"
      :rowsPerPageOptions="[10, 20, 50]"
      :pt="{
        root: 'text-xs',
        row: {
          headerRow: 'bg-bg-main',
        },
      }"
      resizableColumns
      columnResizeMode="fit"
      showGridlines
    >
      <Column
        :header="$t('page.domiciliation.date')"
        :pt="{
          columnTitle: 'text-xs',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-main)"
      >
        <template #body="slotProps">
          <div class="text-left w-full">
            {{ moment(slotProps.data.createdAt).format('YYYY-MM-DD') }}
          </div>
        </template>
      </Column>
      <Column
        :header="$t('page.domiciliation.id')"
        :pt="{
          columnTitle: 'text-xs',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-main)"
      >
        <template #body="slotProps">
          {{ slotProps.data.ref }}
        </template>
      </Column>
      <Column
        :header="$t('page.domiciliation.beneficiary')"
        :pt="{
          columnTitle: 'text-xs',
          headerCell: 'bg-bg-main',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-main)"
      >
        <template #body="slotProps">
          {{ slotProps.data.beneficiary }}
        </template>
      </Column>
      <Column
        :header="$t('page.domiciliation.new.table.nature')"
        :pt="{
          columnTitle: 'text-xs',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-main)"
      >
        <template #body="slotProps">
          {{ slotProps.data.nature }}
        </template>
      </Column>
      <Column
        :header="$t('page.domiciliation.new.table.declare_import')"
        :pt="{
          columnTitle: 'text-xs',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-main)"
      >
        <template #body="slotProps">
          {{ slotProps.data.importDeclaration }}
        </template>
      </Column>
      <Column
        :header="$t('page.domiciliation.new.table.status')"
        :pt="{
          columnTitle: 'text-xs',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-main)"
      >
        <template #body="slotProps">
          <p
            class="px-3 py-1 w-full text-center rounded bg-primary-light text-white"
          >
            {{ slotProps.data.status }}
          </p>
        </template>
      </Column>
      <Column
        :header="$t('page.domiciliation.benefAmount')"
        :pt="{
          columnTitle: 'text-xs',
          headerCell: 'bg-bg-main',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-main)"
      >
        <template #body="slotProps">
          {{
            Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: slotProps.data.benefCurrency,
            }).format(Number(slotProps.data.benefAmount))
          }}
        </template>
      </Column>
      <Column
        :header="$t('page.domiciliation.balance')"
        :pt="{
          columnTitle: 'text-xs',
          headerCell: 'bg-bg-main',
          columnHeaderContent: 'flex justify-center',
        }"
        style="border-right: 1px solid var(--color-border-main)"
      >
        <template #body="slotProps">
          {{
            Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: slotProps.data.benefCurrency,
            }).format(Number(slotProps.data.balance))
          }}
        </template>
      </Column>
      <Column :header="$t('page.domiciliation.action')">
        <template #body="slotProps">
          <div class="flex items-center gap-2">
            <i
              v-tooltip.left="'View Details'"
              class="pi pi-eye cursor-pointer hover:scale-110 transition-transform duration-200 ease-linear"
              style="font-size: 1rem"
              @click.prevent="
                $router.push(`/domiciliation/${slotProps.data.flowCode}/edit`)
              "
            />
          </div>
        </template>
      </Column>

      <template #empty>
        <div class="grid items-center h-40 text-text-secondary text-center">
          <p class="flex flex-col space-y-1">
            <i class="pi pi-inbox" style="font-size: 2rem" />
            <span class="font-semibold">
              {{ $t('table.empty') }}
            </span>
          </p>
        </div>
      </template>
    </DataTable>
  </div>
</template>
