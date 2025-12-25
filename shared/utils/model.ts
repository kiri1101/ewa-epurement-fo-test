type Role = {
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
  is_first_login: number
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
  bankAccounts: BankAcc[]
  roles: Role[]
  is_first_login: number
  otp?: number | null
}

export interface ApiResponse {
  pesake: {
    code: string
    level: string
    detail: string
    detail_error: string
  }
  data: AuthResponse
}
