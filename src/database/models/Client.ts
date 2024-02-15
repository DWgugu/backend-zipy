import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { ClientInputModels } from './index';

@Entity({ name: 'client' })
export class ClientModels extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    client?: string;

    @OneToMany(type => ClientInputModels, clientInput => clientInput.client)
    clientInput?: ClientInputModels;

    constructor(client: string) {
        super();
        this.client = client;
    }
}