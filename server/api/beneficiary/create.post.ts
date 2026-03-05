import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { H3Event } from 'h3'

type Response = {
  pesake: Pesake
  data: {
    status: string
    message: string
    userCreatedId: string
    benefSlug: string
    benefEtat: string
    benefName: string
    benefType: string
    iban: string
    clientCode: string
    clientKYCStatus: string
    docsRequis: number
    dossierComplet: number
    createdAt: string
  }
}

export default defineEventHandler(
  async (
    event: H3Event,
  ): Promise<{
    validError: ZodErrorMap[] | null
    apiResponse: {
      fullName: string
      message: string
      iban: string
      status: string
    } | null
  }> => {
    const config = useRuntimeConfig(event)
    const reqBody = await readBody(event)
    const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
    const t = await loadLocale(lang)
    let output = null

    const loginSchema = z.object({
      fullName: z
        .string({
          error: () => ({ message: t.required }),
        })
        .min(Number(config.private.validation.zod.min), {
          message: String(t.min).replaceAll(
            ':value',
            String(config.private.validation.zod.min),
          ),
        }),
      email:
        reqBody.email.trim().length > 0
          ? z.email({
              error: () => ({ message: t.email }),
            })
          : z.string({
              error: () => ({ message: t.required }),
            }),
      phoneNumber: z.string({
        error: () => ({ message: t.required }),
      }),
      phoneNumber_code: z.string({
        error: () => ({ message: t.required }),
      }),
      country: z
        .string({
          error: () => ({ message: t.required }),
        })
        .min(Number(config.private.validation.zod.min), {
          message: String(t.min).replaceAll(
            ':value',
            String(config.private.validation.zod.min),
          ),
        }),
      benefType: z.literal(['PHYSIQUE', 'MORALE'], {
        error: () => ({ message: t.invalidType }),
      }),
      bankName: z
        .string({
          error: () => ({ message: t.required }),
        })
        .min(Number(config.private.validation.zod.min), {
          message: String(t.min).replaceAll(
            ':value',
            String(config.private.validation.zod.min),
          ),
        }),
      iban: z
        .string({
          error: () => ({ message: t.required }),
        })
        .min(Number(config.private.validation.zod.iban.min), {
          message: String(t.min).replaceAll(
            ':value',
            String(config.private.validation.zod.iban.min),
          ),
        }),
      swiftBic: z.string({
        error: () => ({ message: t.required }),
      }),
      files: z
        .record(
          z
            .string({
              error: () => ({ message: t.files_required }),
            })
            .min(Number(config.private.validation.zod.min), {
              message: String(t.min).replaceAll(
                ':value',
                String(config.private.validation.zod.min),
              ),
            }),
          z
            .string({
              error: () => ({ message: t.files_required }),
            })
            .min(Number(config.private.validation.zod.min), {
              message: String(t.min).replaceAll(
                ':value',
                String(config.private.validation.zod.min),
              ),
            }),
          {
            error: () => ({ message: t.files_required }),
          },
        )
        .refine(value => Object.values(value).length > 0, {
          message: t.files_required,
        }),
      lang: z.literal(['en', 'fr'], {
        error: () => ({ message: t.invalidLang }),
      }),
      codeIdentify: z.string({
        error: () => ({ message: t.required }),
      }),
      address1: z.string({
        error: () => ({ message: t.required }),
      }),
      address2: z.string({
        error: () => ({ message: t.required }),
      }),
      town: z.string({
        error: () => ({ message: t.required }),
      }),
      region: z.string({
        error: () => ({ message: t.required }),
      }),
      postalCode: z.string({
        error: () => ({ message: t.required }),
      }),
      nationality: z.string({
        error: () => ({ message: t.required }),
      }),
    })

    const api = fetch(event)

    const payload = await readValidatedBody(event, body =>
      loginSchema.safeParse(body),
    )

    const response: Response | null = payload.success
      ? ((await api(config.private.api.beneficiary.create, {
          method: 'POST',
          body: {
            benefType: payload.data.benefType.toLowerCase(),
            fullName: payload.data.fullName,
            country: payload.data.country,
            bankName: payload.data.bankName,
            swiftBic: payload.data.swiftBic.trim(),
            iban: payload.data.iban.trim().replaceAll(' ', ''),
            address1: payload.data.address1,
            address2: payload.data.address2,
            codeIdentify: payload.data.codeIdentify,
            postalCode: payload.data.postalCode,
            town: payload.data.town,
            region: payload.data.region,
            nationality: payload.data.nationality,
            uploadedFiles: Object.values(payload.data.files),
            email: payload.data.email,
            phoneNumber: payload.data.phoneNumber,
            phoneCode: payload.data.phoneNumber_code,
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
        output = {
          fullName: response?.data.benefName,
          message: response?.data.message,
          iban: response?.data.iban,
          status: response?.data.benefEtat,
        }
      }
    }

    return {
      validError: payload.error ? errorMap(payload.error.issues) : null,
      apiResponse: output,
    }
  },
)
