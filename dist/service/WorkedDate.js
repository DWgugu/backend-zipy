"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkedDateService = void 0;
const repositories_1 = require("../database/repositories");
class WorkedDateService {
    async create(workedDTO) {
        const repository = new repositories_1.WorkedDateRepository();
        const worked = await repository.create(workedDTO);
        return worked;
    }
    async find() {
        const repository = new repositories_1.WorkedDateRepository();
        const worked = await repository.find();
        return worked;
    }
    async findOne(id) {
        const repository = new repositories_1.WorkedDateRepository();
        const worked = await repository.findOne(id);
        return worked;
    }
    ;
    async delete(id) {
        const repository = new repositories_1.WorkedDateRepository();
        await repository.delete(id);
    }
}
exports.WorkedDateService = WorkedDateService;
