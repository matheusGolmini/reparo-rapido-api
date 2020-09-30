import { createConnection } from 'typeorm'
import config from '../../config/index'

const configDB = config().db_postgres

createConnection({
    type: 'postgres',
    host: configDB.host,
    port: Number(configDB.port),
    username: configDB.username,
    password: configDB.password,
    database: configDB.database,
    ssl: {
        rejectUnauthorized: false
    },
    entities: [
        configDB.entities
    ],
    migrations: [
        configDB.migrations
    ],
    cli: {
        migrationsDir: configDB.migrationsDir,
        entitiesDir: configDB.entitiesDir
    }
})