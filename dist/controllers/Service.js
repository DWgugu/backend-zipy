"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../service");
class ServiceController {
    async store(request, response) {
        const { type, pieceValue } = request.body;
        try {
            const service = new service_1.ServiceService();
            const Service = await service.create({
                type: type,
                pieceValue: pieceValue
            });
            return response.status(201).json(Service);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async index(request, response) {
        const service = new service_1.ServiceService();
        try {
            const Service = await service.find();
            return response.status(200).json(Service);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async show(request, response) {
        const { id } = request.params;
        const service = new service_1.ServiceService();
        try {
            const Service = await service.findOne(parseInt(id));
            if (!Service) {
                return response.status(400).json({ message: 'service not found' });
            }
            return response.status(200).json(Service);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async delete(request, response) {
        const { id } = request.params;
        const service = new service_1.ServiceService();
        try {
            const Service = await service.findOne(parseInt(id));
            if (!Service) {
                return response.status(404).json({ message: "service not found" });
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
exports.default = ServiceController;
