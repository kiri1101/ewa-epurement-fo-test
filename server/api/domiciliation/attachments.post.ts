import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { H3Event } from 'h3'

type Response = {
  pesake: Pesake
  data: DomiciliationFile[]
}

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const reqBody = await readBody(event)
  const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
  const t = await loadLocale(lang)
  let output = null

  const loginSchema = z.object({
    code: z
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

  const response: Response | null = payload.success
    ? ((await api(config.private.api.domiciliation.attachments, {
        method: 'POST',
        body: {
          requestCategory: payload.data.code,
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
      output = response?.data.map((attachment: DomiciliationFile) => {
        return {
          uuid: crypto.randomUUID(),
          nature: attachment.natureOfImport,
          name: attachment.fileTypeLibc,
          code: attachment.fileTypeSlug,
          category: attachment.fileTypeCat,
          isRequired: Boolean(attachment.isRequired),
        }
      })
    }
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output,
  }
})
