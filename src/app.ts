import express from 'express'
import bodyParser from 'body-parser'
import routers from './routers'
import morgan from 'morgan'
import 'reflect-metadata'
import './db/config'
import blockIp from './middleware/ip-config'
import jwt from './middleware/jwt'

const app = express()

const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.json())

app.use((req, res, next) => blockIp(req, res, next))
app.use(jwt)
app.use(routers)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})