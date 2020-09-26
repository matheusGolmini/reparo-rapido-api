import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('affiliate_skills')
export default class Affiliate_skills {
    @PrimaryGeneratedColumn('uuid')
    affiliateId: string

    @PrimaryGeneratedColumn('uuid')
    skillId: string

    @Column()
    time_skill: string
}