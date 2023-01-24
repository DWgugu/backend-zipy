"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../service");
class WorkedDateController {
    async store(request, response) {
        const { pieceValue, quantity, date, serviceId, clientInputId } = request.body;
        try {
            const service = new service_1.WorkedDateService();
            const worked = await service.create({
                pieceValue: pieceValue,
                quantity: quantity,
                date: date,
                serviceId: serviceId,
                clientInputId: clientInputId
            });
            return response.status(201).json(worked);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async index(request, response) {
        const service = new service_1.WorkedDateService();
        try {
            const worked = await service.find();
            return response.status(200).json(worked);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async show(request, response) {
        const { id } = request.params;
        const service = new service_1.WorkedDateService();
        try {
            const worked = await service.findOne(parseInt(id));
            if (!worked) {
                return response.status(400).json({ message: 'worked date not found' });
            }
            return response.status(200).json(worked);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async delete(request, response) {
        const { id } = request.params;
        const service = new service_1.WorkedDateService();
        try {
            const worked = await service.findOne(parseInt(id));
            if (!worked) {
                return response.status(404).json({ message: "worked date not found" });
            }
            else {
                await service.delete(parseInt(id));
                return response.sendStatus(204);
            }
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
}
exports.default = WorkedDateController;
