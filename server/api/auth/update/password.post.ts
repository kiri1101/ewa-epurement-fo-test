import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event)

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

  const response: ApiResponse | null = payload.success
    ? ((await api(config.private.api.auth.resetPwd, {
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
        throw createError({
          statusCode: 500,
          statusText: t.server_api_failed,
        })
      })) as ApiResponse | null)
    : null

  if (response) {
    if (String(response?.pesake.code).length > 0) {
      throw createError({
        statusCode: 500,
        statusText: response?.pesake.details.pesakeDetail,
      })
    }
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: response,
  }
})
