import { HttpRequest, HttpResponse } from '../protocols/http'
import { created, ok, badRequest } from '../helpers/http-helper'
import { Controller } from './interface'
import { getRepository } from 'typeorm'

export class AddSkill implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
         const skill = req.body
         const affi = getRepository('skill')
         const result = await affi.save(skill)
         return created(result)
     }
 }

 export class GetSkill implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const repo = getRepository('skill')
        console.log(repo)
        const r = await repo.find()
        if (r.length) {
            return ok(r)
        }
        return ok({
            message: 'no skill found'
        })
    }
}

export class AttSkill implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const skillReq = req.body
        const { id } = req.query

        const repo = getRepository('skill')
        const result: any = await repo.findOne({
            id
        })
        if (!result) {
            return badRequest({
                message: 'Skill not found'
            })
        }
        skillReq.id = result.id
        const sav = await repo.save(skillReq)
        if (sav) {
            return ok(sav)
        }
        return badRequest({
            message: 'Skill not found'
        })
    }
}

export class DeleteSkill implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const { id } = req.params

        const repo = getRepository('skill')
        const removeSkill: any = await repo.findOne({
            id
        })

        if (!removeSkill) {
            return badRequest({
                message: 'Skill not found'
            })
        }

        if (removeSkill) {
            repo.remove(removeSkill)
            return ok({
                message: `Skill com o ID ${String(id)} foi deletada !`
            })
        }

        return badRequest({
            message: 'affiliate not found'
        })
    }
}

export class GetAllAfilliateSkill implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const repo = getRepository('skill')
        const { name } = req.params

        const skill: any = await repo.findOne({
            name
        })

        if (!skill) {
            return badRequest({
                message: 'Skill not found'
            })
        }

        const resultQuery = await repo.query(`select a2.full_name, a2.cpf, a2.email, as2.time_skill 
        from affiliate_skills as2 
        inner join skill s2 on s2.id = as2."skillId" 
        inner join affiliate a2 on a2.id = as2."affiliateId" 
        where s2.id = as2."skillId" and a2.id = as2."affiliateId" and s2."name" = '${skill.name}'`)

        if (resultQuery) {
            return ok(resultQuery)
        }
        return ok({
            message: 'no skill found'
        })
    }
}

function justNumbers(string: string) {
    var numsStr = string.replace(/[^0-9]/g, '')
    return parseInt(numsStr)
}

export class GetSkillAfilliateMore implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const { experience } = req.params
        const repoSkill = getRepository('affiliate_skills')

        const resultQuery = await repoSkill.query(`SELECT a2.full_name ,a2.email,s2."name" as "skill_name", time_skill FROM affiliate_skills  as2
        inner join skill s2 on s2.id = as2."skillId" 
        inner join affiliate a2 on a2.id = as2."affiliateId"`)

        const arrayAffiliate: any[] = []

        for (const entry of resultQuery) {
            const n = justNumbers(entry.time_skill)

            if (n >= Number(experience)) {
                arrayAffiliate.push(entry)
            }
          }

        if (arrayAffiliate.length) {
            return ok(arrayAffiliate)
        }
        return ok({
            message: 'no one with this level of experience'
        })
    }
}