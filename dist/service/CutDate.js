"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CutDateService = void 0;
const repositories_1 = require("../database/repositories");
class CutDateService {
    async create(cutdateDTO) {
        const repository = new repositories_1.CutDateRepository();
        const cutDate = await repository.create(cutdateDTO);
        return cutDate;
    }
    async find() {
        const repository = new repositories_1.CutDateRepository();
        const cutdate = await repository.find();
        return cutdate;
    }
    async findOne(id) {
        const repository = new repositories_1.CutDateRepository();
        const cutdate = await repository.findOne(id);
        return cutdate;
    }
    ;
    async delete(id) {
        const repository = new repositories_1.CutDateRepository();
        await repository.delete(id);
    }
}
exports.CutDateService = CutDateService;
