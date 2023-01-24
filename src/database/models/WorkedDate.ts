import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ClientInputModels, ServiceModels } from './index';

@Entity({ name: 'zipy.worked_date' })
export class WorkedDateModels extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column({ name: "piece_value" })
    pieceValue?: number;

    @Column()
    quantity?: number;

    @Column()
    date?: Date;

    @Column({ name: "service_id" })
    serviceId?: number;

    @Column({ name: "client_input_id" })
    clientInputId?: number;

    @ManyToOne(type => ServiceModels, service => service.workedDate)
    @JoinColumn({ name: "service_id", referencedColumnName: "id" })
    service?: ServiceModels;

    @ManyToOne(type => ClientInputModels, clientInput => clientInput.workedDate)
    @JoinColumn({ name: "client_input_id", referencedColumnName: "id" })
    clientInput?: ClientInputModels;

    constructor(pieceValue: number, quantity: number, date: Date, serviceId: number, clientInputId: number) {
        super();
        this.pieceValue = pieceValue;
        this.quantity = quantity;
        this.date = date;
        this.serviceId = serviceId;
        this.clientInputId = clientInputId;
    }
}