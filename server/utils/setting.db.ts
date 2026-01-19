import {
  countries,
  beneficiaryFiles,
  InsertCountry,
  InsertBeneficiaryFile,
} from '~/db/schema'
import { lt } from 'drizzle-orm'
import type { H3Event } from 'h3'
import moment from 'moment'

const saveCountries = async (
  event: H3Event,
  countryList: BeneficiaryAuthorizedCountry[],
  now: string
) => {
  return await db.transaction(async tx => {
    await tx.delete(countries).where(lt(countries.createdAt, now))

    const insertValues: InsertCountry[] = countryList.map(country => {
      const latestNow = moment().format('YYYY-MM-DD')
      const uuid = crypto.randomUUID()
      return {
        uuid: uuid,
        code: country.code,
        name: country.name,
        currency: country.currency,
        createdAt: latestNow,
      }
    })

    return tx.insert(countries).values(insertValues).returning({
      insertId: countries.uuid,
      name: countries.name,
      value: countries.code,
    })
  })
}

const saveFiles = async (
  event: H3Event,
  fileList: BeneficiaryFileList,
  now: string
) => {
  return await db.transaction(async tx => {
    const latestNow = moment().format('YYYY-MM-DD')

    await tx.delete(beneficiaryFiles).where(lt(beneficiaryFiles.createdAt, now))

    const companyFiles: InsertBeneficiaryFile[] = fileList.MORALE.map(file => {
      const uuid = crypto.randomUUID()
      return {
        uuid: uuid,
        fileId: file.docId,
        fileCat: file.docCat,
        desc: file.label,
        fileLabel: file.shortLabel,
        isRequired: Boolean(file.isRequired),
        type: 'company',
        createdAt: latestNow,
      }
    })

    const individualFiles: InsertBeneficiaryFile[] = fileList.PHYSIQUE.map(
      file => {
        const uuid = crypto.randomUUID()
        return {
          uuid: uuid,
          fileId: file.docId,
          fileCat: file.docCat,
          desc: file.label,
          fileLabel: file.shortLabel,
          isRequired: Boolean(file.isRequired),
          type: 'individual',
          createdAt: latestNow,
        }
      }
    )

    const insertValues: InsertBeneficiaryFile[] =
      companyFiles.concat(individualFiles)

    return tx.insert(beneficiaryFiles).values(insertValues).returning({
      insertId: beneficiaryFiles.uuid,
      category: beneficiaryFiles.fileCat,
      fileType: beneficiaryFiles.fileId,
      tooltip: beneficiaryFiles.desc,
      title: beneficiaryFiles.fileLabel,
      required: beneficiaryFiles.isRequired,
      type: beneficiaryFiles.type,
    })
  })
}

export { saveCountries, saveFiles }
