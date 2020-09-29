import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'procution') {
  dotenv.config()
}

function getFromEnv(name: string): string {
  if (!process.env[name]) throw Error(`Required env ${name}`)
  return process.env[name] as string
}

export default function config() {
    return {
      db_postgres: {
        host: getFromEnv('DB_HOST'),
        port: getFromEnv('DB_PORT'),
        username: getFromEnv('DB_USERNAME'),
        database: getFromEnv('DB_DATABASE'),
        password: getFromEnv('DB_PASS'),
        entities: getFromEnv('ENTITIES'),
        entitiesDir: getFromEnv('ENTITIES_DIR'),
        migrations: getFromEnv('MIGRATIONS'),
        migrationsDir: getFromEnv('MIGRATIONS_DIR')
      },
      jwt_secret: getFromEnv('JWT_SECRET')
    }
}
