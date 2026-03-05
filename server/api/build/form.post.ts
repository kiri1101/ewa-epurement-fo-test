import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { H3Event } from 'h3'

type Response = {
  pesake: Pesake
  data: BuildFormResponse
}

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const reqBody = await readBody(event)
  const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
  const t = await loadLocale(lang)
  let output = null
  let target = ''

  const loginSchema = z.object({
    target: z.literal(['beneficiary'], {
      error: () => ({ message: t.invalidType }),
    }),
    mode: z.literal(['create', 'update'], {
      error: () => ({ message: t.invalidType }),
    }),
    identifier: z
      .string({
        error: () => ({ message: t.required }),
      })
      .optional(),
    lang: z.literal(['en', 'fr'], {
      error: () => ({ message: t.invalidLang }),
    }),
  })

  const api = fetch(event)

  const payload = await readValidatedBody(event, body =>
    loginSchema.safeParse(body),
  )

  if (payload.success) {
    switch (payload.data.target) {
      case 'beneficiary':
        target = 'beneficiaireEdit'
        break

      default:
        break
    }
  }

  const response: Response | null = payload.success
    ? ((await api(config.private.api.build.form, {
        method: 'POST',
        body: {
          apCode: target,
          apOption: payload.data.mode.toUpperCase(),
          unikId: payload.data.identifier,
          origin: config.private.origin.toUpperCase(),
        },
      }).catch(() => {
        throw createError({
          statusCode: 500,
          statusText: t.server_api_failed,
        })
      })) as Response | null)
    : null

  if (response) {
    if (String(response?.pesake.code).length > 0) {
      throw createError({
        statusCode: 500,
        statusText: response?.pesake.details.pesakeDetail,
      })
    }

    output = response?.data
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output,
  }
})
