import { CutDateRepository } from "../database/repositories";
import { CutDateDTO } from "../dto"

export class CutDateService {
    async create(cutdateDTO: CutDateDTO) {
        const repository = new CutDateRepository();
        const cutDate = await repository.create(cutdateDTO);

        return cutDate;
    }

    async find() {
        const repository = new CutDateRepository();
        const cutdate = await repository.find();

        return cutdate;
    }

    async findOne(id: number) {
        const repository = new CutDateRepository();
        const cutdate = await repository.findOne(id);

        return cutdate;
    };

    async delete(id: number) {
        const repository = new CutDateRepository();
        await repository.delete(id);
    }
}