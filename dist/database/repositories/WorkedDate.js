"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkedDateRepository = void 0;
const models_1 = require("../models");
class WorkedDateRepository {
    async create(workedDTO) {
        const worked = await new models_1.WorkedDateModels(workedDTO.pieceValue, workedDTO.quantity, workedDTO.date, workedDTO.serviceId, workedDTO.clientInputId);
        worked.save();
        return worked;
    }
    async find() {
        const worked = await models_1.WorkedDateModels.find({ relations: ["service"] });
        return worked;
    }
    async findOne(id) {
        const worked = await models_1.WorkedDateModels.findOne(id, { relations: ["service"] });
        return worked;
    }
    async delete(id) {
        await models_1.WorkedDateModels.delete(id);
    }
}
exports.WorkedDateRepository = WorkedDateRepository;
