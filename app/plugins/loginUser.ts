import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  const authStore = useAuthStore()
  const tokenStore = useTokenStore()

  nuxtApp.provide('loginUser', (authData: AuthResponse) => {
    // save user data in cookie
    if (authData.user) {
      authStore.update({
        email: authData.user.email,
        firstName: authData.user.firstName,
        kycStatus: authData.user.kycStatus,
        lastName: authData.user.lastName,
        phoneCode: authData.user.phoneCode,
        phoneNumber: authData.user.phoneNumber,
        roles: authData.user.roles,
        status: authData.user.status,
        userPseudo: authData.user.userPseudo,
        is_first_login: authData.is_first_login,
      })
    }
    // save user tokens in localStorage
    tokenStore.update({
      token: authData.token,
      refreshToken: authData.refreshToken,
      expired_at: authData.expired_at,
    })
    // save bank accounts in localStorage
  })
})
