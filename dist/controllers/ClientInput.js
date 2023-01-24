"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../service");
class ClientInputController {
    async store(request, response) {
        const { cutDateId, clientId, userId } = request.body;
        try {
            const service = new service_1.ClientInputService();
            const Client = await service.create({
                cutDateId: cutDateId,
                clientId: clientId,
                userId: userId
            });
            return response.status(201).json(Client);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async index(request, response) {
        const service = new service_1.ClientInputService();
        try {
            const client = await service.find();
            return response.status(200).json(client);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async show(request, response) {
        const { id } = request.params;
        const service = new service_1.ClientInputService();
        try {
            const client = await service.findOne(parseInt(id));
            if (!client) {
                return response.status(400).json({ message: 'client input not found' });
            }
            return response.status(200).json(client);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async delete(request, response) {
        const { id } = request.params;
        const service = new service_1.ClientInputService();
        try {
            const client = await service.findOne(parseInt(id));
            if (!client) {
                return response.status(404).json({ message: "client input not found" });
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
exports.default = ClientInputController;
