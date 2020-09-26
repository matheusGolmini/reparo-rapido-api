import { HttpRequest } from '../../protocols/http'
import { Request, Response, Router } from 'express'
import { AdaptRouters } from './interface'

export const adaptRoute = (routes: AdaptRouters[]): Router => {
    const router: Router = Router()
    for (const r of routes) {
      router[r.method](r.path, async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
          body: req.body,
          params: req.params,
          query: req.query,
          headers: req.headers
        }
        const response = await r.action.handles(httpRequest)
        if (response.statusCode >= 200 && response.statusCode <= 299) {
            return res.status(response.statusCode).json(response.body)
          } else {
            return res.status(response.statusCode).json({
              error: response.body.message
            })
          }
        })
    }
  return router
}