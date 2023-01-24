import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { ClientInputModels } from './index';

@Entity({ name: 'zipy.users' })
export class UserModels extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column({ name: "users" })
    user?: string;

    @Column()
    password?: string;

    @OneToMany(type => ClientInputModels, clientInput => clientInput.user)
    clientInput?: ClientInputModels;

    constructor(user: string, password: string) {
        super();
        this.user = user;
        this.password = password;
    }
}