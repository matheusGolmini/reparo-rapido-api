import configEnv from './src/config'

const configDB = configEnv().db_postgres

module.exports = {
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
}