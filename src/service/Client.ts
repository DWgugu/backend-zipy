import { ClientRepository } from "../database/repositories";
import { ClientDTO } from "../dto"

export class ClientService {
    async find() {
        const repository = new ClientRepository();
        const client = await repository.find();

        return client;
    }

    async findOne(id: number) {
        const repository = new ClientRepository();
        const client = await repository.findOne(id);

        return client;
    };

    async create(clientDTO: ClientDTO) {
        const repository = new ClientRepository();
        const client = await repository.create(clientDTO);

        return client;
    }

    async delete(id: number) {
        const repository = new ClientRepository();
        await repository.delete(id);
    }
}