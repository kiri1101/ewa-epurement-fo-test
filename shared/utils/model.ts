export type Role = {
  roleDesc: string
  roleName: string
  roleSlug: string
}

export type ZodValidationError = {
  name: string
  message: string
}

export type PwdResetForm = {
  otp: string
  secret: string
  secret_confirm: string
}

export interface User {
  email: string
  firstName: string
  kycStatus: string
  lastName: string
  phoneCode: string
  phoneNumber: string
  roles: string[]
  status: number
  userPseudo: string
}

export type AuthToken = {
  token: string
  refreshToken: string
  expired_at: number
}

export type accMap = {
  key: string
  accounts: BankAcc[]
}

export interface BankAcc {
  acctSlug: string
  acctType: string
  agenName: string
  amt: number
  bankIBAN: string
  bankName: string
  clientName: string
  clientType: string
  uerSlug: string
}

export interface AuthResponse {
  user: User
  token: string
  refreshToken: string
  expired_at: number
  bankAccounts: BankAcc[] | null
  roles: Role[]
  is_first_login: number
  otp: number | null
}

export type Pesake = {
  code: string
  level: string
  details: {
    pesakeDetail: string
    devDetail: string
  }
  detail_error: string
}

export type ApiResponse = {
  pesake: Pesake
  data: AuthResponse
}

export type AuthData = {
  id: string
  firstName: string
  lastName: string
  firstAttempt: boolean
  emailAddress: string
  phoneNumber: string
  kycStatus: boolean
  token: {
    bearer: string
    refresh: string
  }
  sessionId: string
  isValidator: boolean
}

export type ZodErrorMap = {
  message: string
  name: string
}

export type UserAccount = {
  id: string
  name: string
  value: string
}

export type TelInputValidate = {
  country: string
  countryCallingCode: string
  formatted: string
  nationalNumber: string
  valid: boolean
}

export type ClientUserAccount = {
  [key: string]: {
    id: string
    role: string
    bank: string
  }
}

export type CollaboratorList = {
  firstName: string
  lastName: string
  phoneCode: string
  phoneNumber: string
  userPseudo: string
  email: string
  isActive: number
  createdDate: string
  bankinfo: {
    accountNumber: string
    roles: string[]
  }
}

export type UserCollaboratorResponse = {
  pesake: Pesake
  data: {
    users: CollaboratorList[]
  }
}

export type UserCollaboratorForm = {
  pseudo: string
  firstName: string
  lastName: string
  mailingAddress: string
  phone: string
  countryCode: string
  lang: string
  accounts: {
    [key: string]: {
      id: string
      role: string
      bank: string
    }
  }
}

export type BeneficiarySettingFile = {
  docId: string
  docCat: string
  label: string
  shortLabel: string
  isRequired: number
}

export type BeneficiaryAuthorizedCountry = {
  code: string
  name: string
  currency: string
}

export type BeneficiaryFileList = {
  MORALE: BeneficiarySettingFile[]
  PHYSIQUE: BeneficiarySettingFile[]
}

export type BeneficiarySettingResponse = {
  pesake: Pesake
  data: {
    beneficialConfig: BeneficiaryFileList
    authorizedCountries: BeneficiaryAuthorizedCountry[]
  }
}

export interface BeneficiaryFile {
  insertId: string
  tooltip: string
  title: string
  required: boolean
  type: string
  category: string
  fileType: string
}

export interface CountryItem {
  insertId: string
  name: string
  value: string
}

export interface BeneficiaryResponse {
  benefSlug: string
  benefType: string
  fullName: string
  country: string
  email: string
  phoneCode: string
  phoneNumber: string
  address: string
  benefStatus: string
  createdAt: string
  updatedAt: string
  status: string
  bankDetails: {
    bankName: string
    swiftBic: string
    iban: string
  }
}

export type CustomInsertBeneficiary = {
  fullName: string
  country: string
  bankName: string
  iban: string
  status: string
  code: string
}

export type TransferResponse = {
  fileCode: string
  beneficiaryName: string
  fileStatus: string
  accountCode: string
  accountNumber: string
  accountType: string
  accountAmount: string
  agencyName: string
  clientName: string
  userSlug: string
  amount: string
  submittedDate: string
  shouldVerifyDocument: number
}

export type TransferAttachmentResponse = {
  fileTypeSlug: string
  fileTypeCat: string
  fileTypeName: string
  isRequired: number
}

export type TransferTypeResponse = {
  demandeType: string
  demandeTypeName: string
  attachmentList: TransferAttachmentResponse[]
}

export type TransferTypeFile = {
  uuid: string
  name: string
  code: string
  category: string
  isRequired: boolean
}

export type TransferOtpResponse = {
  status: string
  otpCode: string
  otpLiveTime: number
}

export type ValidateOtpResponse = {
  message: string
}
