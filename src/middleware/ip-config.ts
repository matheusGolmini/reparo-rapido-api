import { Request, Response, NextFunction } from 'express'
import ips from '../ips'

const blockIp = (req: Request, res: Response, next: NextFunction) => {
    // res.header('Access-Control-Allow-Origin', '192.168.15.5')
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    if (String(ip).substr(0, 7) === '::ffff:') {
        ip = String(ip).substr(7)
    }
    if (ips.includes(String(ip))) {
        return res.send('IP bloqueado')
    }
    return next()
}

export default blockIp