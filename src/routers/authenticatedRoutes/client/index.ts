import * as Controller from '../../../controllers/client'
import { AdaptRouters } from '../../../adpter/express/interface'
import { adaptRoute } from '../../../adpter/express/adapter'

const routes: AdaptRouters[] = [
    {
        method: 'get',
        identifier: 'Get_Clients',
        validationSchema: null,
        path: '/',
        action: new Controller.GetClients()
    },
    {
        method: 'post',
        identifier: 'Post_Client',
        validationSchema: null,
        path: '/',
        action: new Controller.AddClient()
    },
    {
        method: 'post',
        identifier: 'Post_Client_Address',
        validationSchema: null,
        path: '/address',
        action: new Controller.AddClientAddress()
    },
    {
        method: 'post',
        identifier: 'Post_Client_CreditCard',
        validationSchema: null,
        path: '/creditCard',
        action: new Controller.AddClientCreditCard()
    },
    {
        method: 'put',
        identifier: 'Update_Client',
        validationSchema: null,
        path: '/',
        action: new Controller.AttClient()
    },
    {
        method: 'get',
        identifier: 'Get_Client_By_Email',
        validationSchema: null,
        path: '/:email',
        action: new Controller.GetClientByEmail()
    },
    {
        method: 'get',
        identifier: 'Get_Client_By_Cpf',
        validationSchema: null,
        path: '/cpf/:cpf',
        action: new Controller.GetClientByCpf()
    },
    {
        method: 'delete',
        identifier: 'Delete_Client',
        validationSchema: null,
        path: '/:email',
        action: new Controller.DeleteClient()
    }
]

export default adaptRoute(routes)