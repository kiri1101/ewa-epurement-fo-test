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
  otp: int(),
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

export const bankAccRelations = relations(bankAcc, ({ one }) => ({
  user: one(users, { fields: [bankAcc.userId], references: [users.id] }),
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

export type User = InferSelectModel<typeof users>

export type InsertUser = InferInsertModel<typeof users>

export type BankAcc = InferSelectModel<typeof bankAcc>

export type InsertBankAcc = InferInsertModel<typeof bankAcc>

export type Role = InferSelectModel<typeof roles>

export type InsertRole = InferInsertModel<typeof roles>

export type UserSession = InferSelectModel<typeof sessions>

export type InsertUserSession = InferInsertModel<typeof sessions>
