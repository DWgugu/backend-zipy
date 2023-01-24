import { ServiceDTO } from "../../dto";
import { ServiceModels } from "../models";

export class ServiceRepository {
    async create(serviceDTO: ServiceDTO) {
        const service = await new ServiceModels(serviceDTO.type, serviceDTO.pieceValue);
        service.save();

        return service;
    }

    async find() {
        const service = await ServiceModels.find();

        return service;
    }

    async findOne(id: number) {
        const service = await ServiceModels.findOne(id)

        return service;
    }

    async delete(id: number) {
        await ServiceModels.delete(id);
    }
}