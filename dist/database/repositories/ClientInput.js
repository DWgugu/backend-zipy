"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientInputRepository = void 0;
const models_1 = require("../models");
class ClientInputRepository {
    async find() {
        const client = await models_1.ClientInputModels.find({ relations: ["client"] });
        return client;
    }
    async findOne(id) {
        const client = await models_1.ClientInputModels.findOne(id, { relations: ["client"] });
        return client;
    }
    async create(clientDTO) {
        const client = await new models_1.ClientInputModels(clientDTO.cutDateId, clientDTO.clientId, clientDTO.userId);
        client.save();
        return client;
    }
    async delete(id) {
        await models_1.ClientInputModels.delete(id);
    }
}
exports.ClientInputRepository = ClientInputRepository;
