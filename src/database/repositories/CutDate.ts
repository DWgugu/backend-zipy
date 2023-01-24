import { CutDateDTO } from "../../dto";
import { CutDateModels } from "../models";

export class CutDateRepository {
    async create(cutdateDTO: CutDateDTO) {
        const cutDate = await new CutDateModels(cutdateDTO.dateStart, cutdateDTO.dateEnd);
        cutDate.save();

        return cutDate;
    }

    async find() {
        const cutdate = await CutDateModels.find();

        return cutdate;
    }

    async findOne(id: number) {
        const cutdate = await CutDateModels.findOne(id)

        return cutdate;
    }

    async delete(id: number) {
        await CutDateModels.delete(id);
    }
}