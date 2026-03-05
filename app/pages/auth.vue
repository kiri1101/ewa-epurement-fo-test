<template>
  <div class="grid grid-rows-[auto_1fr]">
    <nav class="grid items-end h-16 grid-cols-2 py-1 border-b-4 border-accent">
      <div class="flex justify-center">
        <div
          class="z-10 flex items-center justify-center translate-y-[1.99rem] lg:translate-y-[2.49rem] border-b-4 border-x-4 border-accent w-20 lg:w-28 h-7 lg:h-9 bg-bg-main"
        >
          <nuxt-link to="/" class="-translate-y-4">
            <img
              src="/images/logo.jpg"
              class="object-contain object-center w-14 h-8 lg:w-20 lg:h-12"
              alt="App Logo"
            />
          </nuxt-link>
        </div>
      </div>

      <div class="flex justify-center">
        <gadget-translate />
      </div>
    </nav>

    <div
      class="relative grow bg-hero-bg h-[calc(100vh-4rem)] flex flex-col justify-center"
    >
      <div
        class="bg-radial-[at_50%_85%] from-accent-light to-transparent h-104 w-72 lg:w-lg blur-xl rounded-full opacity-30 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      <div
        class="grid md:grid-cols-[auto_1fr] gap-5 w-auto max-w-lg md:max-w-4xl p-3 mx-4 sm:mx-auto border-[1.5px] rounded-lg shadow-lg border-accent backdrop-blur-md"
      >
        <div class="hidden md:block">
          <img
            src="/images/login_hero.jpg"
            class="object-cover object-center rounded-lg size-64 md:size-80"
            alt="Login Hero"
          />
        </div>

        <div class="py-5 text-white">
          <NuxtPage :page-key="route => route.fullPath" />
        </div>
      </div>

      <div
        class="grid md:grid-cols-[auto_1fr] gap-5 w-full max-w-lg md:max-w-2xl lg:max-w-4xl p-3 mx-auto"
      >
        <div class="w-64 lg:w-96 hidden md:block" />

        <div class="flex justify-center">
          <div class="flex items-center space-x-2 font-semibold text-white">
            <div>
              <img
                src="/images/security.svg"
                class="object-contain object-center rounded-lg size-8"
                alt="Security Logo"
              />
            </div>

            <h5 class="text-sm">{{ $t('page.login.security') }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
