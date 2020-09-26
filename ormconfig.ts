import configEnv from './src/config'

const configDB = configEnv().db_postgres

module.exports = {
  type: 'postgres',
  host: configDB.host,
  port: Number(configDB.port),
  username: configDB.username,
  password: configDB.password,
  database: configDB.database,
  entities: [
    'src/db/models/**/*.ts'
  ],
  migrations: [
    'src/db/migrations/**/*.ts'
  ],
  cli: {
    migrationsDir: 'src/db/migrations/',
    entitiesDir: 'src/db/models'
  }
}