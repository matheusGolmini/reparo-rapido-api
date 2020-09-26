import { Controller } from './interface'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { ok, created, badRequest } from '../helpers/http-helper'
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'

export class GetClients implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const repo = getRepository('client')
        const r = await repo.find()
        if (r.length) {
            return ok(r)
        }
        return ok({
            message: 'no client found'
        })
    }
}

export class AddClient implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const client = req.body
        client.password = bcrypt.hashSync(client.password, 10)
        const cli = getRepository('client')
        const result = await cli.save(client)
        return created(result)
     }
 }
 export class AddClientAddress implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const address = req.body
        const repo = getRepository('address')
        const result = await repo.save(address)
        return created(result)
    }
}

export class AddClientCreditCard implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const creditCard = req.body
        const repo = getRepository('credit_card')
        const result = await repo.save(creditCard)
        return created(result)
    }
}

export class GetClientByEmail implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const { email } = req.params
        const repo = getRepository('client')
        const result = await repo.findOne({
            email
        })
        if (result) {
            return ok(result)
        }
        return badRequest({
            message: 'affiliate not found'
        })
    }
}

export class GetClientByCpf implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const { cpf } = req.params
        const repo = getRepository('client')
        const result = await repo.findOne({
            cpf
        })
        if (result) {
            return ok(result)
        }
        return badRequest({
            message: 'affiliate not found'
        })
    }
}

export class AttClient implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const clientReq = req.body
        const { email } = req.query

        const repo = getRepository('client')
        const result: any = await repo.findOne({
            email
        })
        if (!result) {
            return badRequest({
                message: 'client not found'
            })
        }
        clientReq.id = result.id
        const sav = await repo.save(clientReq)
        if (sav) {
            return ok(sav)
        }
        return badRequest({
            message: 'affiliate not found'
        })
    }
}

export class AttAffiliate implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const affiliateReq = req.body
        const { email } = req.query

        const repo = getRepository('affiliate')
        const result: any = await repo.findOne({
            email
        })
        if (!result) {
            return badRequest({
                message: 'affiliate not found'
            })
        }
        affiliateReq.id = result.id
        const sav = await repo.save(affiliateReq)
        if (sav) {
            return ok(sav)
        }
        return badRequest({
            message: 'affiliate not found'
        })
    }
}

export class DeleteClient implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const { email } = req.params
        const repo = getRepository('client')
        const removeClient = await repo.findOne({
            email
        })
        if (removeClient) {
            repo.remove(removeClient)
            return ok({
                message: `${String(email)} foi removido!`
            })
        }

        return badRequest({
            message: 'client not found'
        })
    }
}