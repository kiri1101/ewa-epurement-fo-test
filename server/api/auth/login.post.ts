import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { ApiResponse } from '~~/shared/utils/model'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const otpCookieStore = authOtp(event)
  const tokenCookieStore = authTokens(event)

  const reqBody = await readBody(event)
  const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
  const t = await loadLocale(lang)

  const loginSchema = z.object({
    username: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min)
        ),
      }),
    secret: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min)
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
    ? ((await api(config.private.auth.login, {
        method: 'POST',
        body: {
          pseudo: payload.data.username.trim(),
          password: payload.data.secret.trim(),
          lang: payload.data.lang.toUpperCase(),
          origin: config.private.origin.toUpperCase(),
        },
      }).catch(error => {
        respError.response = error.data
        respError.code = error.status
        return null
      })) as ApiResponse | null)
    : null

  if (response) {
    /** store OTP in server cookies */
    otpCookieStore.clear()
    otpCookieStore.save(response?.data.otp)
    /** delete opt from api response */
    delete response?.data.otp
    /** store Tokens in server cookies */
    tokenCookieStore.save({
      token: String(response?.data.token),
      refreshToken: String(response?.data.refreshToken),
      expired_at: Number(response?.data.expired_at),
    })
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: response,
    errResponse: respError.code !== 0 ? respError : null,
  }
})
