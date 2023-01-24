import { WorkedDateDTO } from "../../dto";
import { WorkedDateModels } from "../models";

export class WorkedDateRepository {
    async create(workedDTO: WorkedDateDTO) {
        const worked = await new WorkedDateModels(workedDTO.pieceValue, workedDTO.quantity, workedDTO.date, workedDTO.serviceId, workedDTO.clientInputId);
        worked.save();

        return worked;
    }

    async find() {
        const worked = await WorkedDateModels.find({relations:["service"]});

        return worked;
    }

    async findOne(id: number) {
        const worked = await WorkedDateModels.findOne(id, {relations:["service"]})

        return worked;
    }

    async delete(id: number) {
        await WorkedDateModels.delete(id);
    }
}