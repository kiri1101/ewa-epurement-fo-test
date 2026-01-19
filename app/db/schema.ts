import {
  relations,
  sql,
  type InferInsertModel,
  type InferSelectModel,
} from 'drizzle-orm'
import { int, numeric, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: int().primaryKey({ autoIncrement: true }),
  uuid: text().notNull().unique(),
  username: text().notNull(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text().notNull().unique(),
  hasCompleteKyc: int('has_complete_kyc', { mode: 'boolean' }).notNull(),
  phoneCode: text('phone_code').notNull(),
  phoneNumber: text('phone_number').notNull().unique(),
  status: int().notNull(),
  roles: text({ mode: 'json' }).$type<string[]>().notNull(),
  isFirstLogin: int('is_first_login', { mode: 'boolean' }).notNull(),
  otp: text(),
  bearerToken: text('bearer_token').notNull(),
  refreshToken: text('refresh_token').notNull(),
  tokenLife: numeric('token_life').notNull(), // expired_at
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: text('updated_at'),
})

export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
  accounts: many(bankAcc),
  roles: many(roles),
  collaborators: many(collaborators),
  beneficiaries: many(beneficiaries),
  transfers: many(transfers),
}))

export const sessions = sqliteTable('sessions', {
  id: int().primaryKey({ autoIncrement: true }),
  uuid: text().notNull().unique(),
  userId: int('user_id')
    .references(() => users.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
    .notNull(),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at'),
  expireAt: text('expire_at').notNull(),
})

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}))

export const bankAcc = sqliteTable('bank_accounts', {
  id: int().primaryKey({ autoIncrement: true }),
  uuid: text().notNull().unique(),
  userId: int('user_id')
    .references(() => users.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
    .notNull(),
  accRef: text('acc_ref').notNull(),
  iBan: numeric('i_ban').notNull(),
  bank: text().notNull(),
  accType: text('acc_type').notNull(),
  agency: text().notNull(),
  balance: numeric().notNull(),
  clientType: text('client_type').notNull(),
})

export const bankAccRelations = relations(bankAcc, ({ one, many }) => ({
  user: one(users, { fields: [bankAcc.userId], references: [users.id] }),
  collaborators: many(collaborators),
}))

export const roles = sqliteTable('roles', {
  id: int().primaryKey({ autoIncrement: true }),
  uuid: text().notNull().unique(),
  userId: int('user_id')
    .references(() => users.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
    .notNull(),
  code: text().notNull(),
  name: text().notNull(),
})

export const rolesRelations = relations(roles, ({ one }) => ({
  user: one(users, { fields: [roles.userId], references: [users.id] }),
}))

export const collaborators = sqliteTable('collaborators', {
  id: int().primaryKey({ autoIncrement: true }),
  uuid: text().notNull().unique(),
  userId: int('user_id')
    .references(() => users.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
    .notNull(),
  accId: int('acc_id')
    .references(() => bankAcc.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
    .notNull(),
  username: text().notNull(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text().notNull(),
  phoneCode: text('phone_code').notNull(),
  phoneNumber: text('phone_number').notNull(),
  roles: text({ mode: 'json' }).$type<string[]>().notNull(),
  isActive: int('is_active', { mode: 'boolean' }).notNull(),
  createdAt: text('created_at').notNull(),
})

export const collaboratorsRelations = relations(collaborators, ({ one }) => ({
  user: one(users, { fields: [collaborators.userId], references: [users.id] }),
  account: one(bankAcc, {
    fields: [collaborators.accId],
    references: [bankAcc.id],
  }),
}))

export const countries = sqliteTable('countries', {
  id: int().primaryKey({ autoIncrement: true }),
  uuid: text().notNull().unique(),
  code: text().notNull().unique(),
  name: text().notNull(),
  currency: text().notNull(),
  createdAt: text('created_at').notNull(),
})

export const beneficiaryFiles = sqliteTable('beneficiary_files', {
  id: int().primaryKey({ autoIncrement: true }),
  uuid: text().notNull().unique(),
  fileId: text('file_id').notNull(),
  fileCat: text('file_category').notNull(),
  desc: text('description').notNull(),
  fileLabel: text('file_label').notNull(),
  isRequired: int('is_required', { mode: 'boolean' }).notNull(),
  type: text({ enum: ['individual', 'company'] }).notNull(),
  ref: text(),
  url: text(),
  createdAt: text('created_at').notNull(),
})

export const beneficiaries = sqliteTable('beneficiaries', {
  id: int().primaryKey({ autoIncrement: true }),
  uuid: text().notNull().unique(),
  userId: int('user_id')
    .references(() => users.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
    .notNull(),
  code: text().notNull(),
  type: text().notNull(),
  fullName: text('full_name').notNull(),
  country: text().notNull(),
  status: text().notNull(),
  bankName: text('bank_name').notNull(),
  swiftBic: text('swift_bic').notNull(),
  iban: text().notNull(),
  createdAt: text('created_at').notNull(),
})

export const beneficiariesRelations = relations(beneficiaries, ({ one }) => ({
  user: one(users, { fields: [beneficiaries.userId], references: [users.id] }),
}))

export const transfers = sqliteTable('transfers', {
  id: int().primaryKey({ autoIncrement: true }),
  uuid: text().notNull().unique(),
  userId: int('user_id')
    .references(() => users.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
    .notNull(),
  code: text().notNull(),
  beneficiaryName: text('beneficiary_name').notNull(),
  clientName: text('client_name').notNull(),
  status: text().notNull(),
  userCode: text('user_code').notNull(),
  accountCode: text('account_code').notNull(),
  accountNumber: text('account_number').notNull(),
  accountType: text('account_type').notNull(),
  amount: text().notNull(),
  balance: text().notNull(),
  bankAgency: text('bank_agency').notNull(),
  isEngaged: int('is_engaged', { mode: 'boolean' }).notNull(),
  otpCode: text('otp_code'),
  otpLiveTime: text('otp_live_time'),
  createdAt: text('created_at').notNull(),
})

export const transfersRelations = relations(transfers, ({ one }) => ({
  user: one(users, { fields: [transfers.userId], references: [users.id] }),
}))

export const transferTypes = sqliteTable('transfer_types', {
  id: int().primaryKey({ autoIncrement: true }),
  uuid: text().notNull().unique(),
  code: text().notNull(),
  name: text().notNull(),
})

export const transferTypesRelations = relations(transferTypes, ({ many }) => ({
  attachments: many(transferAttachments),
}))

export const transferAttachments = sqliteTable('transfer_attachments', {
  id: int().primaryKey({ autoIncrement: true }),
  uuid: text().notNull().unique(),
  typeId: int('type_id')
    .references(() => transferTypes.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
    .notNull(),
  name: text().notNull(),
  code: text().notNull(),
  category: text().notNull(),
  isRequired: int('is_required', { mode: 'boolean' }).notNull(),
})

export const transferAttachmentsRelations = relations(
  transferAttachments,
  ({ one }) => ({
    type: one(transferTypes, {
      fields: [transferAttachments.typeId],
      references: [transferTypes.id],
    }),
  })
)

export const currencies = sqliteTable('currencies', {
  id: int().primaryKey({ autoIncrement: true }),
  uuid: text().notNull().unique(),
  code: text().notNull(),
  labelEn: text('label_en').notNull(),
  labelFr: text('label_fr').notNull(),
  symbol: text().notNull(),
})

export type User = InferSelectModel<typeof users>

export type InsertUser = InferInsertModel<typeof users>

export type BankAcc = InferSelectModel<typeof bankAcc>

export type InsertBankAcc = InferInsertModel<typeof bankAcc>

export type Role = InferSelectModel<typeof roles>

export type InsertRole = InferInsertModel<typeof roles>

export type UserSession = InferSelectModel<typeof sessions>

export type InsertUserSession = InferInsertModel<typeof sessions>

export type CollaboratorSession = InferSelectModel<typeof collaborators>

export type InsertCollaboratorSession = InferInsertModel<typeof collaborators>

export type Country = InferSelectModel<typeof countries>

export type InsertCountry = InferInsertModel<typeof countries>

export type BeneficiaryFile = InferSelectModel<typeof beneficiaryFiles>

export type InsertBeneficiaryFile = InferInsertModel<typeof beneficiaryFiles>

export type Beneficiary = InferSelectModel<typeof beneficiaries>

export type InsertBeneficiary = InferInsertModel<typeof beneficiaries>

export type Transfer = InferSelectModel<typeof transfers>

export type InsertTransfer = InferInsertModel<typeof transfers>

export type TransferType = InferSelectModel<typeof transferTypes>

export type InsertTransferType = InferInsertModel<typeof transferTypes>

export type TransferAttachment = InferSelectModel<typeof transferAttachments>

export type InsertTransferAttachment = InferInsertModel<
  typeof transferAttachments
>

export type currency = InferSelectModel<typeof currencies>

export type Insertcurrency = InferInsertModel<typeof currencies>
