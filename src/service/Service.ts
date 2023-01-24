import { ServiceRepository } from "../database/repositories";
import { ServiceDTO } from "../dto"

export class ServiceService {
    async create(serviceDTO: ServiceDTO) {
        const repository = new ServiceRepository();
        const service = await repository.create(serviceDTO);

        return service;
    }

    async find() {
        const repository = new ServiceRepository();
        const service = await repository.find();

        return service;
    }

    async findOne(id: number) {
        const repository = new ServiceRepository();
        const service = await repository.findOne(id);

        return service;
    };

    async delete(id: number) {
        const repository = new ServiceRepository();
        await repository.delete(id);
    }
}