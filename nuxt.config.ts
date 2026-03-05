// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'
import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@primevue/nuxt-module',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
  build: {
    transpile: ['vue-tel-input'],
  },
  vite: {
    plugins: [tailwindcss() as any],
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
      api: {
        auth: {
          login: process.env.EXT_AUTH_LOGIN,
          resetPwd: process.env.EXT_AUTH_RESET_PASSWORD,
          resendOtp: process.env.EXT_RESEND_OTP,
          clientUser: {
            list: process.env.EXT_GET_CLIENT_USERS,
            create: process.env.EXT_CREATE_CLIENT_USER,
          },
        },
        beneficiary: {
          list: process.env.EXT_BENEFICIARY_LIST,
          create: process.env.EXT_CREATE_BENEFICIARY,
          setting: process.env.EXT_BENEFICIARY_SETTING,
          delete: process.env.EXT_BENEFICIARY_DELETE,
          update: process.env.EXT_BENEFICIARY_UPDATE,
          search: process.env.EXT_BENEFICIARY_SEARCH,
        },
        transfer: {
          list: process.env.EXT_TRANSFER_LIST,
          types: process.env.EXT_TRANSFER_TYPES,
          create: process.env.EXT_TRANSFER_CREATE,
          update: process.env.EXT_TRANSFER_UPDATE,
          otp: {
            request: process.env.EXT_TRANSFER_REQ_OTP,
            validate: process.env.EXT_TRANSFER_VALIDATE_OTP,
          },
          engagement: process.env.EXT_GET_ENGAGEMENT_LETTER,
          demandFile: process.env.EXT_TRANSFER_DEMAND_FILE,
        },
        domiciliation: {
          attachments: process.env.EXT_DOMICILIATION_ATTACHMENT,
          list: process.env.EXT_DOMICILIATION_LIST,
          create: process.env.EXT_DOMICILIATION_CREATE,
          detail: process.env.EXT_DOMICILIATION_DETAILS,
        },
        setting: {
          currency: process.env.EXT_SETTING_CURRENCY,
          rates: process.env.EXT_SETTING_RATES,
        },
        build: {
          form: process.env.EXT_FORM_INFORMATION,
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
          iban: {
            min: process.env.ZOD_IBAN_MIN_LENGTH || '0',
            max: process.env.ZOD_IBAN_MAX_LENGTH || '0',
          },
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
        resendOtp: process.env.API_RESEND_OTP,
        updatePwd: process.env.API_UPDATE_PWD,
        createManage: process.env.API_CREATE_CLIENT_USER,
        managerList: process.env.API_LIST_CLIENT_USER,
        beneficiary: {
          list: process.env.API_BENEFICIARY_LIST,
          create: process.env.API_BENEFICIARY_CREATE,
          setting: process.env.API_BENEFICIARY_SETTING,
          search: process.env.API_BENEFICIARY_SEARCH,
          delete: process.env.API_BENEFICIARY_DELETE,
          update: process.env.API_BENEFICIARY_UPDATE,
        },
        transfer: {
          list: process.env.API_TRANSFER_LIST,
          types: process.env.API_TRANSFER_TYPES,
          create: process.env.API_TRANSFER_CREATE,
          otp: {
            request: process.env.API_TRANSFER_REQ_OTP,
            validate: process.env.API_TRANSFER_VALIDATE_OTP,
          },
          engagement: process.env.API_ENGAGEMENT_LETTER,
          demandFile: process.env.API_TRANSFER_DEMAND_FILE,
        },
        domiciliation: {
          attachments: process.env.API_DOMICILIATION_ATTACHMENT,
          list: process.env.API_DOMICILIATION_LIST,
          byId: process.env.API_DOMICILIATION_BYID,
          create: process.env.API_DOMICILIATION_CREATE,
        },
        fileUpload: process.env.EXT_FILE_UPLOAD,
        setting: {
          currency: process.env.API_SETTING_CURRENCY,
          rates: process.env.API_SETTING_RATES,
        },
        encrypt: process.env.API_ENCRYPTION,
        build: {
          form: process.env.API_FORM_BUILDER,
        },
      },
    },
  },
})
