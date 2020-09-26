import { Column } from 'typeorm'
import DefaultAttributes from './DefaultAttributes'

export default abstract class People extends DefaultAttributes {
    @Column()
    email: string

    @Column({ name: 'last_name' })
    lastName: string

    @Column({ name: 'first_name' })
    firstName: string

    @Column({ name: 'full_name' })
    fullName: string

    @Column()
    phone: string

    @Column()
    password: string

    @Column({ name: 'password_confirm' })
    passwordConfirm: string

    @Column()
    cpf: string
}