import { ClientDTO } from "../../dto";
import { ClientModels } from "../models";

export class ClientRepository {
    async find() {
        const client = await ClientModels.find();

        return client;
    }

    async findOne(id: number) {
        const client = await ClientModels.findOne(id)

        return client;
    }

    async create(clientDTO: ClientDTO) {
        const client = await new ClientModels(clientDTO.client);
        client.save();

        return client;
    }

    async delete(id: number) {
        await ClientModels.delete(id);
    }
}