import { createConnection } from 'typeorm'
createConnection({
    type: 'postgres',
    host: process.env.DB_HOST || '2001:1284:f013:724e:8054:f760:a0f6:c7de',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'reparorapido_app',
    database: process.env.DB_DATABASE || 'reparorapido',
    password: process.env.DB_PASS || '9J8H3ls#@xa=f3',
    entities: [
        process.env.ENTITIES || 'src/db/models/**/*.ts'
    ],
    migrations: [
        process.env.MIGRATIONS || 'src/db/migrations/**/*.ts'
    ],
    cli: {
        migrationsDir: process.env.MIGRATIONS_DIR || 'src/db/migrations/',
        entitiesDir: process.env.ENTITIES_DIR || 'src/db/models'
    }
})