<script setup lang="ts">
definePageMeta({
  layout: 'connected',
  middleware: ['authenticated'],
})

const config = useRuntimeConfig()
const { t, locale } = useI18n()
const auth = useAuthStore()

useHead({
  title: `${t('meta.title.dashboard')} - ${config.public.app.name}`,
  meta: [{ name: 'description', content: 'My design project application.' }],
})
</script>

<template>
  <div>
    <navbar-auth-nav :title="$t('menu.dashboard')">
      <nuxt-link to="/transfer/create" class="max-w-xs">
        <button-primary
          :label="$t('button.new_transfer')"
          icon="pi pi-plus-circle"
        />
      </nuxt-link>
    </navbar-auth-nav>

    <section class="mt-3" aria-label="Dashboard banner component">
      <gadget-banner>
        <img
          src="/images/spline.png"
          class="object-cover object-center w-28 right-0 top-0 absolute"
          alt="Spline"
        />

        <div class="grid grid-cols-2 h-full">
          <div class="text-white grid justify-center ml-2 text-sm lg:text-base">
            <h3 class="translate-y-7">
              <p>
                {{ $t('page.dashboard.welcome') }},
                <span class="font-bold ml-1">
                  {{ auth.state?.firstName }}!
                </span>
              </p>
              <p>{{ $t('page.dashboard.hero_title') }}</p>
            </h3>
          </div>

          <div class="flex justify-end">
            <gadget-image-blur>
              <img
                src="/images/bank.png"
                class="object-cover object-center size-24 rounded-3xl z-30"
                alt="Bank Logo"
              />
            </gadget-image-blur>
          </div>
        </div>
      </gadget-banner>
    </section>

    <section class="mt-7">
      <ul class="grid grid-cols-2 xl:grid-cols-4 gap-3">
        <li
          class="grid grid-cols-[1fr_auto] gap-2 bg-accent-muted py-1.5 px-3 rounded-lg"
        >
          <div class="self-center">
            <img
              src="/images/stats_file.png"
              class="object-cover object-center size-14"
              alt="File Stats Logo"
            />
          </div>

          <div class="text-right">
            <div class="justify-self-end">
              <img
                src="/images/stat_arrow_up.svg"
                class="object-cover object-center size-7"
                alt="File Stats Logo"
              />
            </div>

            <p class="text-xs xl:text-sm font-medium space-x-1">
              <span>{{ $t('page.dashboard.total') }}</span>
              <span class="font-bold">{{ $t('page.dashboard.request') }}</span>
            </p>

            <h2 class="text-2xl xl:text-3xl font-semibold">200</h2>
          </div>
        </li>

        <li
          class="grid grid-cols-[1fr_auto] gap-2 bg-accent-muted py-1.5 px-3 rounded-lg"
        >
          <div class="self-center">
            <img
              src="/images/stats_pending.png"
              class="object-cover object-center size-14"
              alt="File Stats Logo"
            />
          </div>

          <div class="text-right">
            <div class="justify-self-end">
              <img
                src="/images/stat_arrow_up.svg"
                class="object-cover object-center size-7"
                alt="File Stats Logo"
              />
            </div>

            <p class="text-xs xl:text-sm font-medium space-x-1">
              <span v-if="locale === 'en'">
                {{ $t('page.dashboard.pending') }}
              </span>

              <span class="font-bold">{{ $t('page.dashboard.request') }}</span>

              <span v-if="locale === 'fr'">
                {{ $t('page.dashboard.pending') }}
              </span>
            </p>

            <h2 class="text-2xl xl:text-3xl font-semibold">10</h2>
          </div>
        </li>

        <li
          class="grid grid-cols-[1fr_auto] gap-2 bg-accent-muted py-1.5 px-3 rounded-lg"
        >
          <div class="self-center">
            <img
              src="/images/stats_closed.png"
              class="object-cover object-center size-14"
              alt="File Stats Logo"
            />
          </div>

          <div class="text-right">
            <div class="justify-self-end">
              <img
                src="/images/stat_arrow_up.svg"
                class="object-cover object-center size-7"
                alt="File Stats Logo"
              />
            </div>

            <p class="text-xs xl:text-sm font-medium space-x-1">
              <span v-if="locale === 'en'">{{
                $t('page.dashboard.closed')
              }}</span>

              <span class="font-bold">{{ $t('page.dashboard.request') }}</span>

              <span v-if="locale === 'fr'">{{
                $t('page.dashboard.closed')
              }}</span>
            </p>

            <h2 class="text-2xl xl:text-3xl font-semibold">340</h2>
          </div>
        </li>

        <li
          class="grid grid-cols-[1fr_auto] gap-2 bg-accent-muted py-1.5 px-3 rounded-lg"
        >
          <div class="self-center">
            <img
              src="/images/stats_action_req.png"
              class="object-cover object-center size-14"
              alt="File Stats Logo"
            />
          </div>

          <div class="text-right">
            <div class="justify-self-end">
              <img
                src="/images/stat_arrow_up.svg"
                class="object-cover object-center size-7"
                alt="File Stats Logo"
              />
            </div>

            <p class="text-xs xl:text-sm font-medium space-x-1">
              <span v-if="locale === 'en'">{{
                $t('page.dashboard.action')
              }}</span>

              <span class="font-bold">{{ $t('page.dashboard.required') }}</span>

              <span v-if="locale === 'fr'">{{
                $t('page.dashboard.action')
              }}</span>
            </p>

            <h2 class="text-2xl xl:text-3xl font-semibold">107</h2>
          </div>
        </li>
      </ul>
    </section>

    <section class="mt-10 pb-5">
      <custom-title :label="$t('page.dashboard.transfer_history')" />

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
