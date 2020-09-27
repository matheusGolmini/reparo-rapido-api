import { Router } from 'express'

import releasedRoutes from './releasedRoutes'
import routersClient from './authenticatedRoutes/client'
import routersSkill from './skill'
import routersAffiliate from './authenticatedRoutes/affiliate'
import routersFiles from './file'

const router = Router()

router.use('/', releasedRoutes)
router.use('/', routersFiles)
router.use('/clients', routersClient)
router.use('/skill', routersSkill)
router.use('/affiliates', routersAffiliate)

export default router
