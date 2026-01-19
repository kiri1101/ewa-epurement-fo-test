import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const reqBody = await readBody(event)
  const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
  const t = await loadLocale(lang)

  const loginSchema = z.object({
    searchIndex: z
      .string({
        error: () => ({ message: t.required }),
      })
      .refine(
        val => val.trim().length > Number(config.private.validation.zod.min),
        {
          error: () => ({
            message: String(t.min).replaceAll(
              ':value',
              String(config.private.validation.zod.min)
            ),
          }),
        }
      ),
  })

  const payload = await readValidatedBody(event, body =>
    loginSchema.safeParse(body)
  )

  let output = payload.success
    ? await searchTransfers(payload.data.searchIndex)
    : null

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output,
  }
})
