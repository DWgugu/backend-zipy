"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRepository = void 0;
const models_1 = require("../models");
class ServiceRepository {
    async create(serviceDTO) {
        const service = await new models_1.ServiceModels(serviceDTO.type, serviceDTO.pieceValue);
        service.save();
        return service;
    }
    async find() {
        const service = await models_1.ServiceModels.find();
        return service;
    }
    async findOne(id) {
        const service = await models_1.ServiceModels.findOne(id);
        return service;
    }
    async delete(id) {
        await models_1.ServiceModels.delete(id);
    }
}
exports.ServiceRepository = ServiceRepository;
