import * as ControllerAuth from '../controllers/auth'
import * as ControllerSkills from '../controllers/skill'
import * as ControllerClient from '../controllers/client'
import * as ControllerAffiliate from '../controllers/affiliate'
import { AdaptRouters } from '../adpter/express/interface'
import { adaptRoute } from '../adpter/express/adapter'

const routes: AdaptRouters[] = [
    {
        method: 'post',
        identifier: 'Client_Auth',
        validationSchema: null,
        path: '/auth',
        action: new ControllerAuth.Auth()
    },
    {
        method: 'post',
        identifier: 'Post_Client',
        validationSchema: null,
        path: '/register/client',
        action: new ControllerClient.AddClient()
    },
    {
        method: 'post',
        identifier: 'Post_Affiliates',
        validationSchema: null,
        path: '/register/affiliate',
        action: new ControllerAffiliate.AddAffiliate()
    },
    {
        method: 'post',
        identifier: 'Post_Skill',
        validationSchema: null,
        path: '/register/skills',
        action: new ControllerSkills.AddSkill()
    }
]

export default adaptRoute(routes)