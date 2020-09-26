import { People } from './People'

export interface Client extends People {
    creditCard: CreditCard
}

interface CreditCard {
    number: number
    name: string
    cvcCode: number
    expiration: string
}