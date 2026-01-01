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

export interface ApiResponse {
  pesake: {
    code: string
    level: string
    details: {
      pesakeDetail: string
      devDetail: string
    }
    detail_error: string
  }
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
