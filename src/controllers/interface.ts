import { HttpRequest, HttpResponse } from '../protocols/http'

export interface Controller {
    handles (req: HttpRequest): Promise<HttpResponse>
}