import { drizzle } from 'drizzle-orm/libsql'
import { createClient, type Client } from '@libsql/client'

const config = useRuntimeConfig()

const client = createClient({ url: config.private.dbPath })

export const db = drizzle(client)
