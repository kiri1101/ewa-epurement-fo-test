import { fetch } from '~~/server/utils/fetch'
import { z, errorMap } from '~~/server/utils/zod'
import { loadLocale } from '~~/server/utils/locale'
import type { H3Event } from 'h3'

type Response = {
  pesake: Pesake
  data: TransferResponse[]
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
    ? ((await api(config.private.api.transfer.list, {
        method: 'POST',
        body: {
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
      output = response?.data.map((transfer: TransferResponse) => {
        return {
          uuid: crypto.randomUUID(),
          code: transfer.fileCode,
          beneficiaryName: transfer.beneficiaryName,
          clientName: transfer.clientName,
          status: transfer.fileStatus,
          accountCode: transfer.accountCode,
          userCode: transfer.userSlug,
          accountNumber: transfer.accountNumber,
          accountType: transfer.accountType,
          amount: transfer.amount,
          balance: transfer.accountAmount,
          bankAgency: transfer.agencyName,
          isEngaged: transfer.shouldVerifyDocument === 0 ? true : false,
          canValidate: Boolean(transfer.canValidateRequest),
          canUpdate: Boolean(transfer.canCompleteRequest),
          currency: transfer.demandeCurrency,
          description: transfer.demandeDesc,
          targetDate: transfer.scheduleDate,
          supportCost: transfer.demandeSupport,
          type: transfer.demandeTypeName,
          createdAt: transfer.submittedDate,
          attachments: transfer.demandeFilesUpload.map(
            (attachment: TransferAttachmentResponse) => {
              let status: 'validated' | 'rejected' | 'pending'
              if (attachment.isValid === 1) {
                status = 'validated'
              } else if (attachment.isValid === 0) {
                status = 'rejected'
              } else {
                status = 'pending'
              }

              return {
                uuid: crypto.randomUUID(),
                title: attachment.fileTypeLibc,
                originalName: attachment.originalName,
                fileType: attachment.fileTypeSlug,
                demandCode: attachment.dmdeBenfSlug,
                fileCategory: attachment.fileTypeCat,
                isRequired: Boolean(attachment.isRequired),
                isUploaded: Boolean(attachment.alreadyUploaded),
                status: status,
                canUpdate: Boolean(attachment.canEditFile),
                link: attachment.shortLink,
                boComment: attachment.fileComment,
                clearanceComment: attachment.apurmentComment,
              }
            }
          ),
        }
      })
    }
  }

  return {
    validError: payload.error ? errorMap(payload.error.issues) : null,
    apiResponse: output,
  }
})
