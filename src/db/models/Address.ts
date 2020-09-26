import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm'
import Client from './Client'
import Affiliate from './Affiliate'
import DefaultAttributes from './DefaultAttributes'

@Entity('address')
export default class Address extends DefaultAttributes {
    @Column()
    street: string

    @Column()
    city: string

    @Column()
    number: number

    @Column()
    zipCode: string

    @Column()
    state: string

    @Column()
    country: string

    @ManyToOne(type => Client, address => Address)
    @JoinColumn({ name: 'id_client' })
    client: Client

    @ManyToOne(type => Affiliate, address => Address)
    @JoinColumn({ name: 'id_affiliate' })
    affiliate: Affiliate
}