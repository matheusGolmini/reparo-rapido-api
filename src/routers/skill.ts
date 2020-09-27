import * as ControllerSkill from '../controllers/skill'
import { AdaptRouters } from '../adpter/express/interface'
import { adaptRoute } from '../adpter/express/adapter'

const routes: AdaptRouters[] = [

    {
        method: 'get',
        identifier: 'Get_Skills',
        validationSchema: null,
        path: '/',
        action: new ControllerSkill.GetSkill()
    },
    {
        method: 'get',
        identifier: 'Get_Afilliate_By_Skill',
        validationSchema: null,
        path: '/affiliate/:name',
        action: new ControllerSkill.GetAllAfilliateSkill()
    },
    {
        method: 'get',
        identifier: 'Get_Afilliate_By_Skill_Experience',
        validationSchema: null,
        path: '/experience/:experience/:name',
        action: new ControllerSkill.GetSkillAfilliateMore()
    },
    {
        method: 'post',
        identifier: 'Post_Skill',
        validationSchema: null,
        path: '/register',
        action: new ControllerSkill.AddSkill()
    },
    {
        method: 'put',
        identifier: 'Update_Skills',
        validationSchema: null,
        path: '/alterar',
        action: new ControllerSkill.AttSkill()
    },
    {
        method: 'delete',
        identifier: 'Delete_Skills',
        validationSchema: null,
        path: '/delete/:id',
        action: new ControllerSkill.DeleteSkill()
    }

]

export default adaptRoute(routes)