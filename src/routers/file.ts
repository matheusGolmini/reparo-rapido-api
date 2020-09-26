import * as ControllerFile from '../controllers/file'
import { AdaptRouters } from '../adpter/express/interface'
import { adaptRoute } from '../adpter/express/adapter'

const routes: AdaptRouters[] = [
    {
        method: 'post',
        identifier: 'File_Copy',
        validationSchema: null,
        path: '/file/copy',
        action: new ControllerFile.CopyFile()
    },
    {
        method: 'post',
        identifier: 'File_Move',
        validationSchema: null,
        path: '/file/move',
        action: new ControllerFile.MoveFile()
    }
]

export default adaptRoute(routes)