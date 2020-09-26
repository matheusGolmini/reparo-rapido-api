import { Column, Entity, ManyToOne } from 'typeorm'
import Client from './Client'
import Affiliate from './Affiliate'
import DefaultAttributes from './DefaultAttributes'

@Entity('service')
export default class Service extends DefaultAttributes {
    @Column()
    estimate_price: number

    @Column()
    estimated_time: string

    @Column()
    active_service: boolean

    @Column()
    final_time: string

    @Column()
    final_value: number

    @Column()
    service_description: string

    @Column()
    customer_evaluation: number

    @Column()
    affiliate_evaluation: number

    @ManyToOne(type => Client, address => Service, { eager: true })
    client: Client

    @ManyToOne(type => Affiliate, address => Service, { eager: true })
    affiliate: Affiliate
}