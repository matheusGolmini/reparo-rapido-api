import { Entity, OneToMany } from 'typeorm'
import Address from './Address'
import People from './People'
import CreditCard from './CreditCard'
import Service from './Service'

@Entity('client')
export default class Client extends People {
    @OneToMany(type => Address, client => Client)
    address: Address[]

    @OneToMany(type => CreditCard, client => Client)
    credit_card: CreditCard[]

    @OneToMany(type => Service, client => Client)
    services: Service[]
}