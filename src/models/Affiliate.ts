import { People } from './People'

export interface Affiliate extends People {
    skills: SkillsAffiliate[]
}

interface SkillsAffiliate {
    name: string
    time: string
}