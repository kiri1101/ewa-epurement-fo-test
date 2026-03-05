import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const reqBody = await readBody(event)
  const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
  const t = await loadLocale(lang)
  let output = null

  const validator = z.object({
    key: z.looseObject({
      url: z.string({
        error: () => ({ message: t.invalid_key }),
      }),
    }),
    branch: z.literal(['multiply', 'divide'], {
      error: () => ({ message: t.invalidType }),
    }),
    lang: z.literal(['en', 'fr'], {
      error: () => ({ message: t.invalidLang }),
    }),
  })

  const payload = await readValidatedBody(event, body =>
    validator.safeParse(body),
  )

  if (payload.success) {
    const res: Record<string, string | null> = {}

    for (const [key, value] of Object.entries(payload.data.key)) {
      if (typeof value === 'string') {
        res[key] =
          payload.data.branch === 'multiply'
            ? encodeString(value)
            : decodeString(value)
      }
    }

    output = res
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output,
  }
})
