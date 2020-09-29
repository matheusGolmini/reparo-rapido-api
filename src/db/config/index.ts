import Config from '../../config'
import { createConnection } from 'typeorm'

const dbEnvs = Config().db_postgres

createConnection({
    type: 'postgres',
    host: dbEnvs.host,
    port: Number(dbEnvs.port),
    username: dbEnvs.username,
    database: dbEnvs.database,
    password: dbEnvs.password,
    ssl: {
        rejectUnauthorized: false
    },
    entities: [
        dbEnvs.entities
    ],
    migrations: [
        dbEnvs.migrations
    ],
    cli: {
        migrationsDir: dbEnvs.migrationsDir,
        entitiesDir: dbEnvs.entitiesDir
    }
})