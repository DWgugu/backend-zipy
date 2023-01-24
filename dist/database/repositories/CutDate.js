"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CutDateRepository = void 0;
const models_1 = require("../models");
class CutDateRepository {
    async create(cutdateDTO) {
        const cutDate = await new models_1.CutDateModels(cutdateDTO.dateStart, cutdateDTO.dateEnd);
        cutDate.save();
        return cutDate;
    }
    async find() {
        const cutdate = await models_1.CutDateModels.find();
        return cutdate;
    }
    async findOne(id) {
        const cutdate = await models_1.CutDateModels.findOne(id);
        return cutdate;
    }
    async delete(id) {
        await models_1.CutDateModels.delete(id);
    }
}
exports.CutDateRepository = CutDateRepository;
