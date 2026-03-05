import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { H3Event } from 'h3'
import moment from 'moment'

type Response = {
  pesake: Pesake
  data: BeneficiaryResponse[]
}

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const reqBody = await readBody(event)
  const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
  const t = await loadLocale(lang)
  let output = null

  const loginSchema = z.object({
    lang: z.literal(['en', 'fr'], {
      error: () => ({ message: t.invalidLang }),
    }),
  })

  const api = fetch(event)

  const payload = await readValidatedBody(event, body =>
    loginSchema.safeParse(body)
  )

  const response: Response | null = payload.success
    ? ((await api(config.private.api.beneficiary.list, {
        method: 'POST',
        body: {
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
      output = response?.data.map((data: BeneficiaryResponse) => {
        return {
          uuid: crypto.randomUUID(),
          code: data.benefSlug,
          type: data.benefType,
          fullName: data.fullName,
          country: data.country,
          email: data.email,
          phoneCode: data.phoneCode,
          phoneNumber: data.phoneNumber,
          address: data.address ?? '',
          status: data.status,
          bankName: data.bankDetails.bankName,
          swiftBic: data.bankDetails.swiftBic,
          iban: data.bankDetails.iban,
          createdAt: moment(data.createdAt).format('YYYY-MM-DD'),
        }
      })
    }
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output,
  }
})
