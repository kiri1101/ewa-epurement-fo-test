// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'
import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css', 'primeicons/primeicons.css'],
  modules: [
    '@primevue/nuxt-module',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: false || 'none',
          cssLayer: false,
        },
      },
    },
  },
  i18n: {
    defaultLocale: 'fr',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'Francais', file: 'fr.json' },
    ],
    strategy: 'no_prefix',
    vueI18n: './i18n/i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  runtimeConfig: {
    private: {
      baseURL: process.env.API_BASE_URL,
      origin: process.env.ORIGIN,
      cookies: {
        httpOnly: true,
      },
      auth: {
        login: process.env.AUTH_LOGIN,
        resetPwd: process.env.AUTH_RESET_PASSWORD,
      },
      validation: {
        zod: {
          min: process.env.ZOD_MIN_LENGTH || '0',
          max: process.env.ZOD_MAX_LENGTH || '0',
          num: {
            min: process.env.ZOD_NUM_MIN_CHAR || '0',
          },
          phone: {
            min: process.env.ZOD_PHONE_MIN_LENGTH || '9',
          },
          otp: process.env.ZOD_OTP_LENGTH,
          secret_min: process.env.ZOD_SECRET_LENGTH,
        },
      },
    },
    public: {
      baseUrl: process.env.BASE_URL,
      fsUrl: process.env.API_ASSET_URL,
      rfsUrl: process.env.READ_ASSET_URL,
      app: {
        name: process.env.APP_NAME,
        assets: {
          id: process.env.ASSET_ID,
          secret: process.env.ASSET_SECRET,
        },
        toastLife: process.env.TOAST_LIFECYCLE,
      },
    },
  },
})
