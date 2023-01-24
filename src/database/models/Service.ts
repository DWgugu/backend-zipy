import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { WorkedDateModels } from './index';

@Entity({ name: 'zipy.service' })
export class ServiceModels extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    type?: string;

    @Column({ name: "piece_value" })
    pieceValue?: number;

    @OneToMany(type => WorkedDateModels, workedDate => workedDate.service)
    workedDate?: WorkedDateModels;

    constructor(type: string, pieceVaule: number) {
        super();
        this.type = type;
        this.pieceValue = pieceVaule
    }
}