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
      dbPath: process.env.DB_PATH,
      cookies: {
        httpOnly: true,
      },
      api: {
        auth: {
          login: process.env.EXT_AUTH_LOGIN,
          resetPwd: process.env.EXT_AUTH_RESET_PASSWORD,
          clientUser: {
            list: process.env.EXT_GET_CLIENT_USERS,
            create: process.env.EXT_CREATE_CLIENT_USER,
          },
        },
        beneficiary: {
          list: process.env.EXT_BENEFICIARY_LIST,
          create: process.env.EXT_CREATE_BENEFICIARY,
          setting: process.env.EXT_BENEFICIARY_SETTING,
        },
        transfer: {
          list: process.env.EXT_TRANSFER_LIST,
          types: process.env.EXT_TRANSFER_TYPES,
          create: process.env.EXT_TRANSFER_CREATE,
          otp: {
            request: process.env.EXT_TRANSFER_REQ_OTP,
            validate: process.env.EXT_TRANSFER_VALIDATE_OTP,
          },
        },
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
      fileUrl: process.env.API_BASE_URL,
      origin: process.env.ORIGIN,
      app: {
        name: process.env.APP_NAME,
        assets: {
          id: process.env.ASSET_ID,
          secret: process.env.ASSET_SECRET,
        },
        toastLife: process.env.TOAST_LIFECYCLE,
        apiTimeout: process.env.API_CALL_TIMEOUT,
      },
      page: {
        login: process.env.PAGE_LOGIN,
        forgotPwd: process.env.PAGE_FORGOT_PWD,
        updatePwd: process.env.PAGE_UPDATE_PWD,
        clientBoard: process.env.PAGE_CLIENT_DASHBOARD,
      },
      api: {
        login: process.env.API_LOGIN,
        logout: process.env.API_LOGOUT,
        validateOtp: process.env.API_VALIDATE_OTP,
        updatePwd: process.env.API_UPDATE_PWD,
        createManage: process.env.API_CREATE_CLIENT_USER,
        managerList: process.env.API_LIST_CLIENT_USER,
        collaborator: {
          search: process.env.API_SEARCH_CLIENT_USER,
        },
        beneficiary: {
          list: process.env.API_BENEFICIARY_LIST,
          create: process.env.API_BENEFICIARY_CREATE,
          setting: process.env.API_BENEFICIARY_SETTING,
        },
        transfer: {
          list: process.env.API_TRANSFER_LIST,
          search: process.env.API_TRANSFER_SEARCH,
          types: process.env.API_TRANSFER_TYPES,
          setting: process.env.API_TRANSFER_SETTING,
          create: process.env.API_TRANSFER_CREATE,
          otp: {
            request: process.env.API_TRANSFER_REQ_OTP,
            validate: process.env.API_TRANSFER_VALIDATE_OTP,
          },
        },
        fileUpload: process.env.EXT_FILE_UPLOAD,
      },
    },
  },
})
