import { HttpRequest, HttpResponse } from '../protocols/http'
import { ok, created, badRequest } from '../helpers/http-helper'
import { Controller } from './interface'
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'

export class GetAffiliates implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const repo = getRepository('affiliate')
        const r = await repo.find()
        if (r.length) {
            return ok(r)
        }
        return ok({
            message: 'no affiliates found'
        })
    }
}

export class AddAffiliate implements Controller {
   async handles(req: HttpRequest): Promise<HttpResponse> {
        const affiliate = req.body
        if (affiliate.password !== affiliate.passwordConfirm) return badRequest({ message: 'as senhas estão diferentes' })
        affiliate.password = bcrypt.hashSync(affiliate.password, 10)
        const affi = getRepository('affiliate')
        const result = await affi.save(affiliate)
        return created(result)
    }
}

export class AddAffiliateAddress implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const address = req.body
        const repo = getRepository('address')
        const result = await repo.save(address)
        return created(result)
    }
}

export class AddAffiliateCreditCard implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const creditCard = req.body
        const repo = getRepository('credit_card')
        const result = await repo.save(creditCard)
        return created(result)
    }
}

export class AddAffiliateSkill implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        try {
            const body = req.body

            const repoAffiliate = getRepository('affiliate')
            const resultAffiliate: any = await repoAffiliate.findOne(
                body.affiliateId
            )

            if (!resultAffiliate) {
                return badRequest({
                    message: 'affiliate not found'
                })
            }

            const repoSkill = getRepository('skill')
            const resultSkill: any = await repoSkill.findOne(
                body.skillId
            )

            if (!resultSkill) {
                return badRequest({
                    message: 'Skill not found'
                })
            }

             const repoSkillAffiliate = getRepository('affiliate_skills')

             const sav = await repoSkillAffiliate.save(body)
             if (sav) {
                 return ok(sav)
             }

             return badRequest({
                message: 'Erro'
            })
    } catch (error) {
                    console.log(error)
                    return badRequest({
                        message: 'Erro'
                    })
                }
            }
    }

    export class GetAffiliateSkill implements Controller {
        async handles(req: HttpRequest): Promise<HttpResponse> {
            const { email } = req.params
            const repo = getRepository('affiliate')

            const resultEmail = await repo.findOne({
                email
            })

            if (!resultEmail) {
                return badRequest({
                    message: 'Email not found'
                })
            }

            const result = await repo.query(` select skill.name,affiliate_skills.time_skill from skill 
            inner join affiliate_skills on affiliate_skills."skillId" = skill.Id
            inner join affiliate on affiliate.id = affiliate_skills."affiliateId" 
            where affiliate.email like '${email}' `)

            if (result) {
                return ok(result)
            }
            return badRequest({
                message: 'affiliate not found'
            })
        }
    }

export class GetAffiliateByEmail implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const { email } = req.params
        const repo = getRepository('affiliate')
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

export class GetAffiliateByCpf implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const { cpf } = req.params
        const repo = getRepository('affiliate')
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

export class DeleteAffiliate implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const { email } = req.params
        const repo = getRepository('affiliate')
        const removeAffiliate = await repo.findOne({
            email
        })
        if (removeAffiliate) {
            repo.remove(removeAffiliate)
            return ok({
                message: `usuário com o ${String(email)} foi removido!`
            })
        }

        return badRequest({
            message: 'affiliate not found'
        })
    }
}

export class DeleteAffiliateSkill implements Controller {
    async handles(req: HttpRequest): Promise<HttpResponse> {
        const { email } = req.params
        const { name } = req.params

            const repoAffiliate = getRepository('affiliate')
            const resultAffiliate: any = await repoAffiliate.findOne({
                email
            })

            if (!resultAffiliate) {
                return badRequest({
                    message: 'affiliate not found'
                })
            }

            const repoSkill = getRepository('skill')
            const resultSkill: any = await repoSkill.findOne({
                name
            })

            if (!resultSkill) {
                return badRequest({
                    message: 'Skill not found'
                })
            }

            const repo = getRepository('affiliate_skills')
            const sid = resultSkill.id
            const fid = resultAffiliate.id

            const resultQuery: any = await repo.query(`DELETE FROM affiliate_skills 
            WHERE "affiliateId" = '${fid}' and "skillId" = '${sid}'`)

            for (const entry of resultQuery) {
                if (entry === 1) {
                    return ok({
                        message: `A skill ${name} foi deletada do usuário ${email}!`
                    })
                }
            }

        return badRequest({
            message: 'Nothing found!'
        })
    }
}
