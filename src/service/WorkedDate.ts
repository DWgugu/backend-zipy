import { WorkedDateRepository } from "../database/repositories";
import { WorkedDateDTO } from "../dto"

export class WorkedDateService {
    async create(workedDTO: WorkedDateDTO) {
        const repository = new WorkedDateRepository();
        const worked = await repository.create(workedDTO);

        return worked;
    }

    async find() {
        const repository = new WorkedDateRepository();
        const worked = await repository.find();

        return worked;
    }

    async findOne(id: number) {
        const repository = new WorkedDateRepository();
        const worked = await repository.findOne(id);

        return worked;
    };

    async delete(id: number) {
        const repository = new WorkedDateRepository();
        await repository.delete(id);
    }
}