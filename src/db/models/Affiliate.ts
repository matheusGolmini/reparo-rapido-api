import { Entity, OneToMany, ManyToMany, JoinTable } from 'typeorm'
import Address from './Address'
import People from './People'
import CreditCard from './CreditCard'
import Skill from './Skill'
import Service from './Service'

@Entity('affiliate')
export default class Affiliate extends People {
    @OneToMany(type => Address, affiliate => Affiliate)
    address: Address[]

    @OneToMany(type => CreditCard, affiliate => Affiliate, { cascade: true, lazy: true })
    credit_card: CreditCard[]

    @ManyToMany(type => Skill, { cascade: true, eager: true })
    @JoinTable({ name: 'affiliate_skills' })
    skills: Skill[]

    @OneToMany(type => Service, affiliate => Affiliate)
    services: Service[]
}