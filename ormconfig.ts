// import configEnv from './src/config'

// const configDB = configEnv().db_postgres

// module.exports = {
//   type: 'postgres',
//   host: configDB.host || process.env.DB_HOST,
//   port: Number(configDB.port) || process.env.DB_PORT,
//   username: configDB.username || process.env.DB_USERNAME,
//   password: configDB.password || process.env.DB_PASS,
//   database: configDB.database || process.env.DB_DATABASE,
//   entities: [
//     'src/db/models/**/*.ts'
//   ],
//   migrations: [
//     'src/db/migrations/**/*.ts'
//   ],
//   cli: {
//     migrationsDir: 'src/db/migrations/',
//     entitiesDir: 'src/db/models'
//   }
// }