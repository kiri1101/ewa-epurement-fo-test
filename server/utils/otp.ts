import type { H3Event } from 'h3'

export const authOtp = (event: H3Event) => {
  const otp = getCookie(event, 'authOtp')

  const save = (otp: number | null | undefined) =>
    otp
      ? setCookie(event, 'authOtp', btoa(String(otp)), {
          httpOnly: true,
          secure: Boolean(process.env.APP_PRODUCTION),
          maxAge: 60 * 60 * 24,
        })
      : clear()

  const clear = () => deleteCookie(event, 'authOtp')

  const getOtpSnapShot = (): string | null => (otp ? atob(otp) : null)

  return { getOtpSnapShot, save, clear }
}
