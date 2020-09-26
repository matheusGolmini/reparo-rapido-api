import { Column, Entity, ManyToMany } from 'typeorm'
import Affiliate from './Affiliate'
import DefaultAttributes from './DefaultAttributes'

@Entity('skill')
export default class Skill extends DefaultAttributes {
    @Column()
    name: string

    @ManyToMany(type => Affiliate)
    afilliate: Affiliate[]
}