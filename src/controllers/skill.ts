import { HttpRequest, HttpResponse } from '../protocols/http'
import { created } from '../helpers/http-helper'
import { Controller } from './interface'
import { getRepository } from 'typeorm'

export class AddSkill implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
         const skill = req.body
         const affi = getRepository('skill')
         console.log(affi)
         const result = await affi.save(skill)
         return created(result)
     }
 }
