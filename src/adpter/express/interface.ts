import { Controller } from '../../controllers/interface'

export interface AdaptRouters {
    method: 'get' | 'post' | 'put' | 'patch' | 'delete'
    identifier: string
    path: string
    validationSchema: any
    validatePathParams?: boolean
    validateQueryParams?: boolean
    action: Controller
}