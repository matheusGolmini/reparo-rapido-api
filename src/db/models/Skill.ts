import { Column, Entity, JoinTable, ManyToMany } from 'typeorm'
import Affiliate from './Affiliate'
import DefaultAttributes from './DefaultAttributes'

@Entity('skill')
export default class Skill extends DefaultAttributes {
    @Column()
    name: string

    @ManyToMany(type => Affiliate, { cascade: true })
    @JoinTable({ name: 'affiliate_skills' })
    afilliate: Affiliate[]
}