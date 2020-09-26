import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm'
import Client from './Client'
import Affiliate from './Affiliate'
import DefaultAttributes from './DefaultAttributes'

@Entity('credit_card')
export default class CreditCard extends DefaultAttributes {
    @Column()
    numberCard: string

    @Column()
    expirationDate: string

    @Column()
    name: string

    @Column()
    cvcCode: number

    @ManyToOne(type => Client, address => CreditCard, { eager: true })
    @JoinColumn({ name: 'id_client' })
    client: Client

    @ManyToOne(type => Affiliate, address => CreditCard, { eager: true })
    @JoinColumn({ name: 'id_affiliate' })
    affiliate: Affiliate
}