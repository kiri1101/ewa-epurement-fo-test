import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { ApiResponse } from '~~/shared/utils/model'
import type { H3Event } from 'h3'

export default defineEventHandler(
  async (
    event: H3Event,
  ): Promise<{
    validError: ZodErrorMap[] | null
    apiResponse: {
      user: AuthData
      accounts: AccountModel[]
    } | null
  }> => {
    const config = useRuntimeConfig(event)
    const reqBody = await readBody(event)
    const lang = (reqBody.lang === 'fr' ? 'fr' : 'en') as 'en' | 'fr'
    const t = await loadLocale(lang)
    let output = null

    const loginSchema = z.object({
      username: z
        .string({
          error: () => ({ message: t.required }),
        })
        .min(Number(config.private.validation.zod.min), {
          message: String(t.min).replaceAll(
            ':value',
            String(config.private.validation.zod.min),
          ),
        }),
      secret: z
        .string({
          error: () => ({ message: t.required }),
        })
        .min(Number(config.private.validation.zod.min), {
          message: String(t.min).replaceAll(
            ':value',
            String(config.private.validation.zod.min),
          ),
        }),
      lang: z.literal(['en', 'fr'], {
        error: () => ({ message: t.invalidLang }),
      }),
    })

    const api = fetch(event)

    const payload = await readValidatedBody(event, body =>
      loginSchema.safeParse(body),
    )

    const response: ApiResponse | null = payload.success
      ? ((await api(config.private.api.auth.login, {
          method: 'POST',
          body: {
            pseudo: payload.data.username.trim(),
            password: payload.data.secret.trim(),
            lang: payload.data.lang.toUpperCase(),
            origin: config.private.origin.toUpperCase(),
          },
        }).catch(() => {
          throw createError({
            statusCode: 500,
            statusText: t.server_api_failed,
          })
        })) as ApiResponse | null)
      : null

    if (response) {
      if (String(response?.pesake.code).length > 0) {
        throw createError({
          statusCode: 500,
          statusText: response?.pesake.details.pesakeDetail,
        })
      } else {
        output = {
          user: {
            id: crypto.randomUUID(),
            username: response?.data.user.userPseudo,
            firstName: response?.data.user.firstName,
            lastName: response?.data.user.lastName,
            firstAttempt: Boolean(response?.data.is_first_login),
            emailAddress: response?.data.user.email,
            phoneNumber: `(${response?.data.user.phoneCode}) ${response?.data.user.phoneNumber}`,
            kycStatus: Boolean(response?.data.user.kycStatus),
            token: {
              bearer: response?.data.token,
              refresh: response?.data.refreshToken,
            },
            isValidator: response?.data.user.roles.includes('Validation')
              ? true
              : false,
            regCommerce: response?.data.user.registerDeCommerce ?? '',
            address: response?.data.user.addresse1 ?? '',
            address2: response?.data.user.address2 ?? '',
            country: response?.data.user.country ?? '',
            poBox: response?.data.user.codePostale ?? '',
            city: response?.data.user.town ?? '',
            state: response?.data.user.region ?? '',
            nationality: response?.data.user.nationality ?? '',
            isResident: Boolean(response?.data.user.resisdent),
          },
          accounts: (response?.data.bankAccounts ?? []).map((acc: BankAcc) => ({
            uuid: crypto.randomUUID(),
            iBan: acc.bankIBAN,
            bank: acc.bankName,
            accRef: acc.acctSlug,
            accType: acc.acctType,
            agency: acc.agenName,
            balance: String(acc.amt),
            clientType: acc.clientType,
            currency: acc.bankCurrency,
            client: acc.clientName,
          })),
        }
      }
    }

    return {
      validError: payload.error ? errorMap(payload.error.issues) : null,
      apiResponse: output,
    }
  },
)
