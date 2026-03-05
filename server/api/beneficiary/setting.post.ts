import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { H3Event } from 'h3'

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

  const response: BeneficiarySettingResponse | null = payload.success
    ? ((await api(config.private.api.beneficiary.setting, {
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
      })) as BeneficiarySettingResponse | null)
    : null

  if (response) {
    if (String(response?.pesake.code).length > 0) {
      throw createError({
        statusCode: 500,
        statusText: response?.pesake.details.pesakeDetail,
      })
    } else {
      output = {
        countries: response?.data.authorizedCountries.map(
          (country: BeneficiaryAuthorizedCountry) => {
            return {
              uuid: crypto.randomUUID(),
              name: country.name,
              value: country.code,
              currency: country.currency,
            }
          }
        ),
        files: {
          company: response?.data.beneficialConfig.MORALE.map(
            (file: BeneficiarySettingFile) => {
              return {
                insertId: file.docId,
                category: file.docCat,
                tooltip: file.label,
                title: file.shortLabel,
                required: Boolean(file.isRequired),
                type: 'company',
              }
            }
          ),
          individual: response?.data.beneficialConfig.PHYSIQUE.map(
            (file: BeneficiarySettingFile) => {
              return {
                insertId: file.docId,
                category: file.docCat,
                tooltip: file.label,
                title: file.shortLabel,
                required: Boolean(file.isRequired),
                type: 'individual',
              }
            }
          ),
        },
      }
    }
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output,
  }
})
