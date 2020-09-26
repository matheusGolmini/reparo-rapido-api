import { Controller } from './interface'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { ok, badRequest, parseAuthorizationHeaders, generateJwt } from '../helpers'
import bcrypt from 'bcryptjs'
import { getByEmail } from '../service/db'

export class Auth implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
      const authorization = req.headers.authorization
      const { table } = req.body

      if (!!authorization && !!table) {
        const { user, pwd } = parseAuthorizationHeaders(authorization)
        const people: any = await getByEmail(user, table)
        if (people) {
            if (bcrypt.compareSync(pwd, people.password)) {
                people.jwt = generateJwt(people.id)
                return ok(people)
            }
        }
      }
      return badRequest({ message: 'deu ruim' })
    }
}
