"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceService = void 0;
const repositories_1 = require("../database/repositories");
class ServiceService {
    async create(serviceDTO) {
        const repository = new repositories_1.ServiceRepository();
        const service = await repository.create(serviceDTO);
        return service;
    }
    async find() {
        const repository = new repositories_1.ServiceRepository();
        const service = await repository.find();
        return service;
    }
    async findOne(id) {
        const repository = new repositories_1.ServiceRepository();
        const service = await repository.findOne(id);
        return service;
    }
    ;
    async delete(id) {
        const repository = new repositories_1.ServiceRepository();
        await repository.delete(id);
    }
}
exports.ServiceService = ServiceService;
