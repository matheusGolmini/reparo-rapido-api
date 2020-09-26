import { Address } from './Address'

export interface People{
    name: string
    email: string
    lastName: string
    phone: string
    password: string
    passwordConfirm: string
    cpf: string
    address: Address[]
}