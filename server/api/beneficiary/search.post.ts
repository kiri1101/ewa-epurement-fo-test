import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { H3Event } from 'h3'
import moment from 'moment'

type Response = {
  pesake: Pesake
  data: BeneficiaryResponse
}

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const reqBody = await readBody(event)
  const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
  const t = await loadLocale(lang)
  let output = null

  const loginSchema = z.object({
    searchIndex: z
      .string({
        error: () => ({ message: t.required }),
      })
      .refine(
        val => val.trim().length >= Number(config.private.validation.zod.min),
        {
          error: () => ({
            message: String(t.min).replaceAll(
              ':value',
              String(config.private.validation.zod.min)
            ),
          }),
        }
      ),
    lang: z.literal(['en', 'fr'], {
      error: () => ({ message: t.invalidLang }),
    }),
  })

  const api = fetch(event)

  const payload = await readValidatedBody(event, body =>
    loginSchema.safeParse(body)
  )

  const response: Response | null = payload.success
    ? ((await api(config.private.api.beneficiary.search, {
        method: 'POST',
        body: {
          benefSlug: payload.data.searchIndex,
          lang: payload.data.lang.toUpperCase(),
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
    } else {
      let custonType
      switch (response?.data.benefType.toLowerCase()) {
        case 'physique':
          custonType = 'individual'
          break
        case 'moral':
          custonType = 'company'
          break

        default:
          custonType = 'none'
      }
      output = {
        uuid: crypto.randomUUID(),
        code: response?.data.benefSlug,
        type: custonType,
        fullName: response?.data.fullName,
        country: response?.data.country,
        email: response?.data.email ?? '',
        phoneCode: response?.data.phoneCode ?? '',
        phoneNumber: response?.data.phoneNumber ?? '',
        address: response?.data.address ?? '',
        status: response?.data.status,
        bankName: response?.data.bankDetails.bankName,
        swiftBic: response?.data.bankDetails.swiftBic,
        iban: response?.data.bankDetails.iban,
        line1: response?.data.benefAddress1 ?? '',
        line2: response?.data.benefAddress2 ?? '',
        nationality: response?.data.benefNationality ?? '',
        postalCode: response?.data.benefPostalCode ?? '',
        city: response?.data.benefTown ?? '',
        state: response?.data.benefRegion ?? '',
        createdAt: moment(response?.data.createdAt).format('YYYY-MM-DD'),
        files: (response?.data.pjList ?? []).map((file: BeneficiaryPjList) => {
          return {
            code: file.fileSlug,
            title: file.fileType,
            filename: file.fileName,
            url: file.filePath,
            createdAt: file.uploadedAt,
          }
        }),
      }
    }
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output,
  }
})
