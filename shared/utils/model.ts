export type Role = {
  roleDesc: string
  roleName: string
  roleSlug: string
}

export type ZodValidationError = {
  name: string
  message: string
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
  registerDeCommerce: string | null
  addresse1: string | null
  address2: string | null
  codePostale: string | null
  town: string | null
  region: string | null
  country: string | null
  nationality: string | null
  resisdent: number
}

export type ExchangeRate = {
  initialCurrencyCode: string
  finalCurrencyCode: string
  exchangeValue: string
  initialCurrencyLabel: string
  initialCurrencySymbol: string
  initialCurrencyDecimal: number
  finalCurrencyLabel: string
  finalCurrencySymbol: string
  finalCurrencyDecimal: number
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
  bankCurrency: string
}

export interface AuthResponse {
  user: User
  exchangeRate: ExchangeRate[]
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

export type ResendOtpResponse = {
  pesake: Pesake
  data: {
    otp: string
  }
}

export type AuthData = {
  id: string
  username: string
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
  isValidator: boolean
  regCommerce: string
  address: string
  address2: string
  country: string
  poBox: string
  city: string
  state: string
  nationality: string
  isResident: boolean
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
    accountType: string
    bankName: string
    bankBalance: number
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

export type BeneficiaryData = {
  uuid: string
  code: string
  type: string
  fullName: string
  country: string
  email: string
  phoneCode: string
  phoneNumber: string
  address: string
  status: string
  bankName: string
  swiftBic: string
  iban: string
  createdAt: string
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

export type BeneficiaryPjList = {
  fileSlug: string
  fileType: string
  fileName: string
  filePath: string
  uploadedAt: string
}

export interface BeneficiaryResponse {
  benefSlug: string
  benefType: string
  fullName: string
  country: string
  email: string
  phoneCode: string
  phoneNumber: string
  address: string | null
  benefStatus: string
  createdAt: string
  updatedAt: string
  status: string
  bankDetails: {
    bankName: string
    swiftBic: string
    iban: string
  }
  benefAddress1: string | null
  benefAddress2: string | null
  benefNationality: string | null
  benefPostalCode: string | null
  benefTown: string | null
  benefRegion: string | null
  pjList: BeneficiaryPjList[]
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
  canValidateRequest: number
  canCompleteRequest: number
  demandeCurrency: string
  demandeDesc: string
  scheduleDate: string | null
  demandeSupport: string
  demandeTypeName: string
  demandeFilesUpload: TransferAttachmentResponse[]
}

export type TransferTypeAttachmentResponse = {
  fileTypeSlug: string
  fileTypeCat: string
  fileTypeName: string
  isRequired: number
  forApuration: number | null
  forExecution: number | null
}

export type TransferAttachmentResponse = {
  fileTypeLibc: string
  originalName: string
  dmdeBenfSlug: string
  fileTypeCat: string
  fileTypeSlug: string
  isRequired: number
  alreadyUploaded: number
  isValid: number | null
  canEditFile: number
  shortLink: string | null
  fileComment: string | null
  apurmentComment: string | null
}

export type TransferTypeCategory = {
  unikCode: string
  longLabel: string
}

export type TransferType = {
  requestCategory: string
  check_conciliation_required_above_amount: number
  conciliation_required_above_amount: number | null
  demandeType: string
  demandeTypeName: string
  attachmentList: TransferTypeAttachmentResponse[]
}

export type TransferTypeResponse = {
  requestCategory: TransferTypeCategory[]
  requestType: TransferType[]
}

export type TransferTypeFile = {
  uuid: string
  name: string
  code: string
  category: string
  isRequired: boolean
  forApuration: boolean
  forExecution: boolean
}

export type TransferOtpResponse = {
  status: string
  otpCode: string
  otpLiveTime: number
}

export type ValidateOtpResponse = {
  message: string
}

export type accountType = {
  agency: string
  iban: string
  id: string
  type: string
  value: string
}

export type beneficiaryType = {
  bankName: string
  code: string
  country: string
  fullName: string
  iban: string
  status: string
}

export type NotifyContent = {
  title: string
  message: string
}

export type DomiciliationFile = {
  natureOfImport: string
  fileTypeSlug: string
  fileTypeCat: string
  fileTypeLibc: string
  isRequired: number
  alreadyUploaded: number
  canEditFile: number
  shortLink: string | null
  isValid: number | null
  fileComment: string | null
  apurmentComment: string | null
}

export type DomiciliationFileResponse = {
  pesake: Pesake
  data: DomiciliationFile[]
}

export type DemandResponse = {
  demandeSlug: string
  message: string
}

export type Domiciliation = {
  unikCode: string
  referenceNumber: string
  natureOfImport: string
  natureOfImportLabel: string
  clientFullName: string
  clientRegistreCommerce: string
  clientFullAdress: string
  clientAmount: string
  clientCurrency: string
  domiciliationBalance: string
  domiciliationOverdraftLimit: number
  profession: string
  immatriculation: string
  supplierSlug: string
  supplierFullName: string
  supplierAmount: string
  supplierCurrency: string
  supplierFullAdress: string
  supplierCountry: string
  goodsCommercialLabel: string
  goodsServiceLabel: string
  goodsChapitre: string
  goodsDouaneName: string
  createAt: string
  workFlowUniqueCode: string
  domiciliationStatus: string
  declarationImportation: string
}

export interface DomiciliationResponse {
  pesake: Pesake
  data: Domiciliation[]
}

export type AccountModel = {
  uuid: string
  iBan: string
  bank: string
  accRef: string
  accType: string
  agency: string
  balance: string
  clientType: string
  currency: string
  client: string
}

export type EngagementLetter = {
  fileSlug: string
  fileName: string
  filePath: string
  downloadLink: string
}

export type DomiciliationDetailFile = {
  fileTypeLibc: string
  fileTypeLiba: string
  createdAt: string
  shortLink: string | null
  alreadyUploaded: number
  canEditFile: number
}

export type DomiciliationDetailReqHistory = {
  nodeLabel: string
  createAt: string
  roleLabel: string
}

export type DomiciliationDetailInfos = {
  supplierFullName: string
  supplierFullAdress: string
  supplierCountry: string
  supplierCurrency: string
  goodsCommercialLabel: string
  quantity: string
  bureauEmbarquement: string
  fobValue: number | null
  echeanceDePaiement: string
  referenceNumber: string
  cafValue: number | null
  goodsDouaneName: string
  goodsChapitre: string
  goodsServiceLabel: string
  supplierAmount: string
  customInfos: string
  natureOfImport: string
}

export type DomiciliationDetails = {
  domiciliationInfo: DomiciliationDetailInfos
  requestHistry: DomiciliationDetailReqHistory[]
  detailUpload: DomiciliationDetailFile[]
  allDemand: any[]
}

export type DomiciliationDetailsResponse = {
  pesake: Pesake
  data: DomiciliationDetails
}

export type CurrencyResponse = {
  currencyCode: string
  currencyLable: string
  currencySymbol: string
  nombreDecimals: number
}

export type RateResponse = {
  rateSlug: string
  initialCurrencyCode: string
  finalCurrencyCode: string
  exchangeValue: string
  initialCurrencyLabel: string
  initialCurrencySymbol: string
  initialCurrencyDecimal: number
  finalCurrencyLabel: string
  finalCurrencySymbol: string
  finalCurrencyDecimal: number
  validateEndDate: string
}

export type BuildFormDisposition = {
  extraSmall: number
  small: number
  medium: number
  large: number
  extraLarge: number
}

export type BuildFormField = {
  fieldCode: string
  fieldKey: string | null
  fieldLibc_lang01: string
  fieldLibc_lang02: string
  fieldLibc_lang03: string
  defaultValue: string
  fieldCate: string
  isLiveSearch: number
  listValue: any[]
  fieldType: string
  readOnly: number
  required: number
  isUnik: number
  limitMax: number
  helpMessage: string | null
  fieldDisposition: BuildFormDisposition
}

export type BuildFormSection = {
  sectCode: string
  sectLiba_lang01: string
  sectLiba_lang02: string
  sectLiba_lang03: string
  sectPosition: number
  sectClass: string
  fields: BuildFormField[]
}

export type BuildFormResponse = {
  apShortLabel_lang01: string
  apShortLabel_lang02: string
  apShortLabel_lang03: string
  formSectionList: BuildFormSection[]
}
