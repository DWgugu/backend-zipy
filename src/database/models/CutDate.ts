import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { ClientInputModels } from "./index";

@Entity({ name: 'zipy.cut_date' })
export class CutDateModels extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column({ name: "date_start" })
    dateStart?: Date;

    @Column({ name: "date_end" })
    dateEnd?: Date;

    @OneToMany(type => ClientInputModels, clientInput => clientInput.cutDate)
    clientInput?: ClientInputModels;

    constructor(dateStart: Date, dateEnd: Date) {
        super();
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
    }
}