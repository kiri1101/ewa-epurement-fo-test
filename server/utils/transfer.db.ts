import {
  transfers,
  users,
  transferTypes,
  transferAttachments,
} from '~/db/schema'
import type { InsertTransfer, InsertTransferAttachment } from '~/db/schema'
import { and, eq, like, or } from 'drizzle-orm'
import type { H3Event } from 'h3'

export const saveTransfer = async (
  event: H3Event,
  response: TransferResponse[]
): Promise<CustomInsertBeneficiary[]> => {
  const auth = authCookie(event)
  const authUser = auth.getUserSnapShot()
  let output = null

  if (authUser) {
    const user = await db
      .select({ userId: users.id })
      .from(users)
      .where(eq(users.uuid, authUser.id))

    output = await db.transaction(async tx => {
      await tx.delete(transfers).where(eq(transfers.userId, user[0].userId))

      return await createTransfer(tx, response, user)
    })
  }

  return output
}

const createTransfer = async (
  tx: any,
  response: TransferResponse[],
  user: {
    userId: number
  }[]
) => {
  const transferMap: InsertTransfer[] = response.map(
    (data: TransferResponse) => {
      const uuid = crypto.randomUUID()

      return {
        uuid: uuid,
        userId: user[0]?.userId,
        code: data.fileCode,
        beneficiaryName: data.beneficiaryName,
        clientName: data.clientName,
        status: data.fileStatus,
        accountCode: data.accountCode,
        userCode: data.userSlug,
        accountNumber: data.accountNumber,
        accountType: data.accountType,
        amount: data.amount,
        balance: data.accountAmount,
        bankAgency: data.agencyName,
        isEngaged: Boolean(data.shouldVerifyDocument),
        createdAt: data.submittedDate,
      }
    }
  )

  return await tx.insert(transfers).values(transferMap).returning({
    code: transfers.code,
    beneficiaryName: transfers.beneficiaryName,
    amount: transfers.amount,
    status: transfers.status,
    isEngaged: transfers.isEngaged,
    createdAt: transfers.createdAt,
  })
}

export const searchTransfers = async (index: string) => {
  return await db
    .select({
      code: transfers.code,
      beneficiaryName: transfers.beneficiaryName,
      amount: transfers.amount,
      status: transfers.status,
      isEngaged: transfers.isEngaged,
      createdAt: transfers.createdAt,
    })
    .from(transfers)
    .where(
      or(
        like(transfers.code, `%${index}%`),
        like(transfers.beneficiaryName, `%${index}%`),
        like(transfers.status, `%${index}%`)
      )
    )
}

export const saveTransferTypes = async (response: TransferTypeResponse[]) => {
  const types = await db.select().from(transferTypes)

  if (response.length > types.length) {
    await db.delete(transferTypes)

    await db.transaction(async tx => {
      for (const type of response) {
        const storedType = await tx
          .insert(transferTypes)
          .values({
            uuid: crypto.randomUUID(),
            code: type.demandeType,
            name: type.demandeTypeName,
          })
          .returning({ insertId: transferTypes.id })

        const attachmentMap: InsertTransferAttachment[] =
          type.attachmentList.map((attachment: TransferAttachmentResponse) => {
            return {
              uuid: crypto.randomUUID(),
              typeId: storedType[0].insertId,
              name: attachment.fileTypeName,
              code: attachment.fileTypeSlug,
              category: attachment.fileTypeCat,
              isRequired: Boolean(attachment.isRequired),
            }
          })

        await tx.insert(transferAttachments).values(attachmentMap)
      }
    })
  }

  return await db.query.transferTypes.findMany({
    columns: {
      code: true,
      name: true,
    },
    with: {
      attachments: {
        columns: {
          uuid: true,
          name: true,
          code: true,
          category: true,
          isRequired: true,
        },
      },
    },
  })
}

export const updateTransferOtp = async (
  code: string,
  otpCode: string,
  otpLiveTime: string
) => {
  await db
    .update(transfers)
    .set({
      otpCode: otpCode,
      otpLiveTime: otpLiveTime,
    })
    .where(eq(transfers.code, code))
}

export const isOtpValidate = async (code: string, otpCode: string) => {
  const transfer = await db.query.transfers.findFirst({
    where: and(eq(transfers.code, code), eq(transfers.otpCode, otpCode)),
  })

  return transfer ? true : false
}
