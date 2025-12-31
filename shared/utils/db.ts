import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'

export const client = createClient({ url: process.env.DB_PATH! })

export const db = drizzle(client)
