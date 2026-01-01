import * as schema from '~/db/schema'
import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'

const config = useRuntimeConfig()

const client = createClient({ url: config.private.dbPath })

export const db = drizzle({ client: client, schema })
