import { Controller } from './interface'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { ok, serverError } from '../helpers/http-helper'
import fsextra from 'fs-extra'

export class MoveFile implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        try {
            const { pathIntial, pathEnd } = req.body
            await fsextra.move(pathIntial, pathEnd)
            return ok({
                message: 'deu boa'
            })
        } catch (error) {
            return serverError(error)
        }
    }
}

export class CopyFile implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        try {
            const { pathIntial, pathEnd } = req.body
            await fsextra.copy(pathIntial, pathEnd)
            return ok({
                message: 'deu boa'
            })
        } catch (error) {
            return serverError(error)
        }
    }
}
