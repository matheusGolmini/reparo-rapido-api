import * as ControllerUser from '../../../controllers/affiliate'
import { AdaptRouters } from '../../../adpter/express/interface'
import { adaptRoute } from '../../../adpter/express/adapter'

const routes: AdaptRouters[] = [
    {
        method: 'get',
        identifier: 'Get_Affiliates',
        validationSchema: null,
        path: '/',
        action: new ControllerUser.GetAffiliates()
    },
    {
        method: 'post',
        identifier: 'Post_Affiliates',
        validationSchema: null,
        path: '/address',
        action: new ControllerUser.AddAffiliateAddress()
    },
    {
        method: 'post',
        identifier: 'Post_Affiliates',
        validationSchema: null,
        path: '/creditCard',
        action: new ControllerUser.AddAffiliateCreditCard()
    },
    {
        method: 'post',
        identifier: 'Post_Affiliates',
        validationSchema: null,
        path: '/skill',
        action: new ControllerUser.AddAffiliateSkill()
    },
    // {
    //     method: 'post',
    //     identifier: 'Post_Affiliates',
    //     validationSchema: null,
    //     path: '/affiliates/skills',
    //     action: new ControllerUser.AddAffiliateSkills()
    // },
    {
        method: 'put',
        identifier: 'Update_Affiliates',
        validationSchema: null,
        path: '/',
        action: new ControllerUser.AttAffiliate()
    },
    {
        method: 'get',
        identifier: 'Get_Affiliates_By_Email',
        validationSchema: null,
        path: '/:email',
        action: new ControllerUser.GetAffiliateByEmail()
    },
    {
        method: 'get',
        identifier: 'Get_Affiliates_Skill',
        validationSchema: null,
        path: '/skill/:email',
        action: new ControllerUser.GetAffiliateSkill()
    },
    {
        method: 'get',
        identifier: 'Get_Affiliates_By_CPF',
        validationSchema: null,
        path: '/cpf/:cpf',
        action: new ControllerUser.GetAffiliateByCpf()
    },
    {
        method: 'delete',
        identifier: 'Delete_Affiliate',
        validationSchema: null,
        path: '/:email',
        action: new ControllerUser.DeleteAffiliate()
    }
]

export default adaptRoute(routes)