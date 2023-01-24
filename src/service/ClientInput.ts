import { ClientInputRepository } from "../database/repositories";
import { ClientInputDTO } from "../dto"

export class ClientInputService {
    async find() {
        const repository = new ClientInputRepository();
        const client = await repository.find();

        return client;
    }

    async findOne(id: number) {
        const repository = new ClientInputRepository();
        const client = await repository.findOne(id);

        return client;
    };

    async create(clientDTO: ClientInputDTO) {
        const repository = new ClientInputRepository();
        const client = await repository.create(clientDTO);

        return client;
    }

    async delete(id: number) {
        const repository = new ClientInputRepository();
        await repository.delete(id);
    }
}