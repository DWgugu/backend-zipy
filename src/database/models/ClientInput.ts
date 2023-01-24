import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { ClientModels, CutDateModels, UserModels, WorkedDateModels } from './index';

@Entity({ name: 'zipy.client_input' })
export class ClientInputModels extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column({ name: "cut_date_id" })
    cutDateId?: number;

    @Column({ name: "client_id" })
    clientId?: number;

    @Column({ name: "user_id" })
    userId?: number;

    @ManyToOne(type => ClientModels, client => client.clientInput)
    @JoinColumn({ name: "client_id", referencedColumnName: "id" })
    client?: ClientModels;

    @ManyToOne(type => CutDateModels, cutDate => cutDate.clientInput)
    @JoinColumn({ name: "cut_date_id", referencedColumnName: "id" })
    cutDate?: CutDateModels;

    @ManyToOne(type => UserModels, user => user.clientInput)
    @JoinColumn({ name: "user_id", referencedColumnName: "id" })
    user?: UserModels;

    @OneToMany(type => WorkedDateModels, workedDate => workedDate.clientInput)
    workedDate?: WorkedDateModels;

    constructor(cutDateId: number, clientId: number, userId: number) {
        super();
        this.cutDateId = cutDateId;
        this.clientId = clientId;
        this.userId = userId;
    }
}