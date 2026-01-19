import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { H3Event } from 'h3'
import { countries, Country, beneficiaryFiles } from '~/db/schema'
import { eq } from 'drizzle-orm'
import moment from 'moment'

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const reqBody = await readBody(event)
  const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
  const t = await loadLocale(lang)
  let output = null
  const now = moment().format('YYYY-MM-DD')

  const loginSchema = z.object({
    lang: z.literal(['en', 'fr'], {
      error: () => ({ message: t.invalidLang }),
    }),
  })

  const api = fetch(event)

  const payload = await readValidatedBody(event, body =>
    loginSchema.safeParse(body)
  )

  const countriesPresentState: Country[] = await db
    .select()
    .from(countries)
    .where(eq(countries.createdAt, now))

  if (countriesPresentState.length === 0) {
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
        const countryResponse = await saveCountries(
          event,
          response?.data.authorizedCountries,
          now
        )

        const fileResponse = await saveFiles(
          event,
          response?.data.beneficialConfig,
          now
        )

        output = {
          countries: countryResponse,
          files: fileResponse,
        }
      }
    }
  } else {
    const countriesResponse = countriesPresentState.map(country => {
      return {
        insertId: country.uuid,
        name: country.name,
        value: country.code,
      }
    })

    const filesResponse = await db
      .select({
        insertId: beneficiaryFiles.uuid,
        tooltip: beneficiaryFiles.desc,
        title: beneficiaryFiles.fileLabel,
        required: beneficiaryFiles.isRequired,
        type: beneficiaryFiles.type,
        category: beneficiaryFiles.fileCat,
        fileType: beneficiaryFiles.fileId,
      })
      .from(beneficiaryFiles)
      .where(eq(beneficiaryFiles.createdAt, now))

    output = {
      countries: countriesResponse,
      files: filesResponse,
    }
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output,
  }
})
