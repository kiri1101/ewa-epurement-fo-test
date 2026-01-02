<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const translate = ref()
const pt = {
  root: '',
  content: 'rounded-md w-44',
}

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const chosenLocale = computed(() =>
  locales.value.find(i => i.code === locale.value)
)

const toggle = (event: any) => translate.value.toggle(event)

const switchLang = (locale: 'en' | 'fr') => setLocale(locale)
</script>

<template>
  <div>
    <button
      type="button"
      class="text-sm border px-3 py-1 rounded bg-translate text-translate-text border-translate-border cursor-pointer hover:shadow shadow-gray-300 transition duration-200 ease-linear flex items-center gap-1.5"
      @click.prevent="toggle"
    >
      <span>{{ chosenLocale?.name }}</span>

      <i class="pi pi-angle-down" style="font-size: 0.9rem" />
    </button>

    <Popover ref="translate" :pt="pt">
      <ul class="flex">
        <li
          v-for="locale in availableLocales"
          :key="locale.code"
          class="grow w-full rounded hover:bg-link-hover hover:text-translate-text-hover px-3 py-1 cursor-pointer"
          @click.prevent="switchLang(locale.code)"
        >
          {{ locale.name }}
        </li>
      </ul>
    </Popover>
  </div>
</template>

<style>
.p-popover-content {
  padding: 0.2rem !important;
}
</style>
