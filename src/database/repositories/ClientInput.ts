import { ClientInputDTO } from "../../dto";
import { ClientInputModels } from "../models";

export class ClientInputRepository {
    async find() {
        const client = await ClientInputModels.find({relations:["client"]});

        return client;
    }

    async findOne(id: number) {
        const client = await ClientInputModels.findOne(id, {relations:["client"]})

        return client;
    }

    async create(clientDTO: ClientInputDTO) {
        const client = await new ClientInputModels(clientDTO.cutDateId, clientDTO.clientId, clientDTO.userId);
        client.save();

        return client;
    }

    async delete(id: number) {
        await ClientInputModels.delete(id);
    }
}