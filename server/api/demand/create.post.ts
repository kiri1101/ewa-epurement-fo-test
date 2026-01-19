import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { H3Event } from 'h3'
import moment from 'moment'

type Response = {
  pesake: Pesake
  data: TransferResponse[]
}

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event)
  const reqBody = await readBody(event)
  const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
  const t = await loadLocale(lang)
  let output: Response | null = null

  const loginSchema = z.object({
    type: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min)
        ),
      }),
    account: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min)
        ),
      }),
    amount: z
      .number({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min)
        ),
      }),
    currency: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min)
        ),
      }),
    targetDate: z.iso.datetime({
      error: () => ({ message: t.date }),
    }),
    description: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min)
        ),
      }),
    supportFee: z.literal(['beneficiary', 'client', 'both'], {
      error: () => ({ message: t.invalidType }),
    }),
    beneficiaryCode: z
      .string({
        error: () => ({ message: t.required }),
      })
      .min(Number(config.private.validation.zod.min), {
        message: String(t.min).replaceAll(
          ':value',
          String(config.private.validation.zod.min)
        ),
      }),
    engagement: z.boolean({
      error: () => ({ message: t.required }),
    }),
    files: z
      .record(
        z.string({
          error: () => ({ message: 'Provide a valid file' }),
        }),
        z.string({
          error: () => ({ message: 'Provide a valid file' }),
        })
      )
      .refine(
        value =>
          (!reqBody.engagement && Object.values(value).length > 0) ||
          reqBody.engagement,
        {
          message: 'Provide a valid file or select engagement',
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

  const supportFee = (supportFee: string) => {
    let fee
    switch (supportFee) {
      case 'beneficiary':
        fee = 'BENEF'
        break
      case 'client':
        fee = 'CLIENT'
        break
      case 'both':
        fee = 'BOTH'
        break
      default:
        fee = ''
    }

    return fee
  }

  const response: Response | null = payload.success
    ? ((await api(config.private.api.transfer.create, {
        method: 'POST',
        body: {
          demandeSlug: '',
          demandeType: payload.data.type,
          demandeBanckAccountSlug: payload.data.account,
          demandeEtat: 'SUBMITTED',
          demandeBenef: payload.data.beneficiaryCode,
          demandeAmount: payload.data.amount,
          demandeDevise: payload.data.currency,
          demandeWantedDate: moment(payload.data.targetDate).format(
            'YYYY-MM-DD'
          ),
          demandeDesc: payload.data.description,
          demandeSupportFee: supportFee(payload.data.supportFee),
          shouldVerifyDocument: Number(payload.data.engagement),
          uploadedFiles: Object.values(payload.data.files),
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
      output = response
    }
  } else {
    output = null
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output,
  }
})
