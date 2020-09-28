import jwt from 'jsonwebtoken'
// import config from '../config'

const tokenPrivateKey = process.env.JWT_SECRET || 'GHuiuy158kj'

export const verifyJwt = (token: string) => {
    return jwt.verify(token, String(tokenPrivateKey))
}

export const getTokenFromHeaders = (authorization: string) => {
    const token = authorization
    console.log(token)
    return token ? token.slice(7, token.length) : null
}

export const parseAuthorizationHeaders = (authorization: string) => {
    const authInfo = Buffer.from(authorization.split(' ')[1], 'base64')
      .toString()
      .split(':')

    const user = authInfo[0].toLowerCase().trim()
    const pwd = authInfo[1]

    return { user, pwd }
}

export const generateJwt = (id: string) => {
    const payload = {
        id,
        session_start: new Date()
    }
    return jwt.sign(payload, String(tokenPrivateKey), { expiresIn: '10h' })
}