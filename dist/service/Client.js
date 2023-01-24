"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const repositories_1 = require("../database/repositories");
class ClientService {
    async find() {
        const repository = new repositories_1.ClientRepository();
        const client = await repository.find();
        return client;
    }
    async findOne(id) {
        const repository = new repositories_1.ClientRepository();
        const client = await repository.findOne(id);
        return client;
    }
    ;
    async create(clientDTO) {
        const repository = new repositories_1.ClientRepository();
        const client = await repository.create(clientDTO);
        return client;
    }
    async delete(id) {
        const repository = new repositories_1.ClientRepository();
        await repository.delete(id);
    }
}
exports.ClientService = ClientService;
