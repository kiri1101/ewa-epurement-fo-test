import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { H3Event } from 'h3'

type Response = {
  pesake: Pesake
  data: EngagementLetter
}

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const reqBody = await readBody(event)
  const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
  const t = await loadLocale(lang)
  let output = null

  const loginSchema = z.object({
    demandId: z.string({
      error: () => ({ message: t.invalidId }),
    }),
    lang: z.literal(['en', 'fr'], {
      error: () => ({ message: t.invalidLang }),
    }),
  })

  const api = fetch(event)

  const payload = await readValidatedBody(event, body =>
    loginSchema.safeParse(body),
  )

  const response: Response | null = payload.success
    ? ((await api(config.private.api.transfer.engagement, {
        method: 'POST',
        body: {
          dmdeBenfSlug: payload.data.demandId,
          dmdeBenfType: 'DEMANDE',
          lang: payload.data.lang.toUpperCase(),
          origin: config.private.origin.toUpperCase(),
        },
      }).catch(error => {
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
    } else {
      output = {
        name: response?.data.fileName,
        link: response?.data.downloadLink,
      }
    }
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output,
  }
})
