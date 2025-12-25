import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const otpCookie = authOtp(event)
  const otpSent = otpCookie.getOtpSnapShot()

  const reqBody = await readBody(event)
  const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
  const t = await loadLocale(lang)

  const loginSchema = z.object({
    otp: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.otp), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.otp)
        ),
      })
      .refine(val => Number(val) === Number(otpSent), {
        error: String(t.bad_otp),
      }),
    secret: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.secret_min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.secret_min)
        ),
      }),
    secret_confirm: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.secret_min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.secret_min)
        ),
      }),
    lang: z.literal(['en', 'fr'], {
      error: () => ({ message: t.invalidLang }),
    }),
  })

  const api = fetch(event)

  const payload = await readValidatedBody(event, body =>
    loginSchema.safeParse(body)
  )

  let respError = {
    response: {},
    code: 0,
  }

  const response: ApiResponse | null = payload.success
    ? ((await api(config.private.auth.resetPwd, {
        method: 'POST',
        body: {
          codeOtp: payload.data.otp.trim(),
          actiontype: 1,
          password: payload.data.secret.trim(),
          confirm_password: payload.data.secret_confirm.trim(),
          lang: payload.data.lang.toUpperCase(),
          origin: config.private.origin.toUpperCase(),
        },
      }).catch(error => {
        respError.response = error.data
        respError.code = error.status
        return null
      })) as ApiResponse | null)
    : null

  if (!payload.error || respError.code === 0) {
    /** clear OTP in server cookies */
    otpCookie.clear()
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: response,
    errResponse: respError.code !== 0 ? respError : null,
  }
})
