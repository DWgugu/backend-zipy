import { Request, Response } from "express";
import { ClientInputService } from "../service";

export default class ClientInputController {
    async store(request: Request, response: Response) {
        const { cutDateId, clientId, userId } = request.body; 

        try {
            const service = new ClientInputService();

            const Client = await service.create({
                cutDateId: cutDateId,
                clientId: clientId,
                userId: userId
            });

            return response.status(201).json(Client);
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async index(request: Request, response: Response) {
        const service = new ClientInputService();

        try {
            const client = await service.find();

            return response.status(200).json(client);
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const service = new ClientInputService();

        try {
            const client = await service.findOne(parseInt(id));
            if(!client) {
                return response.status(400).json({ message: 'client input not found' });
            }

            return response.status(200).json(client)
        } catch (error) {
            return response.status(500).json(error)
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const service = new ClientInputService();

        try {
            const client = await service.findOne(parseInt(id))

            if(!client) {
                return response.status(404).json({ message: "client input not found" })
            } else {
                await service.delete(parseInt(id));
                return response.sendStatus(204);
            }
        } catch (error) {
            return response.status(500).json(error)
        }
    }
}