"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRepository = void 0;
const models_1 = require("../models");
class ClientRepository {
    async find() {
        const client = await models_1.ClientModels.find();
        return client;
    }
    async findOne(id) {
        const client = await models_1.ClientModels.findOne(id);
        return client;
    }
    async create(clientDTO) {
        const client = await new models_1.ClientModels(clientDTO.client);
        client.save();
        return client;
    }
    async delete(id) {
        await models_1.ClientModels.delete(id);
    }
}
exports.ClientRepository = ClientRepository;
