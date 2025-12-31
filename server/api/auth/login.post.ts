import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { ApiResponse } from '~~/shared/utils/model'
import type { H3Event } from 'h3'

export default defineEventHandler(
  async (
    event: H3Event
  ): Promise<{
    validError: ZodErrorMap[] | null
    apiResponse: AuthData | null
  }> => {
    const config = useRuntimeConfig(event)
    const reqBody = await readBody(event)
    const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
    const t = await loadLocale(lang)
    let output = null

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

    const response: ApiResponse | null = payload.success
      ? ((await api(config.private.api.auth.login, {
          method: 'POST',
          body: {
            pseudo: payload.data.username.trim(),
            password: payload.data.secret.trim(),
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
      } else {
        output = await saveUser(response?.data)
      }
    }

    return {
      validError: payload.error ? errorMap(payload.error.issues) : null,
      apiResponse: output,
    }
  }
)
