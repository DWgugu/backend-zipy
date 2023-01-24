import { Request, Response } from "express";
import { ClientService } from "../service";

export default class ClientController {
    async store(request: Request, response: Response) {
        const { client } = request.body; 

        try {
            const service = new ClientService();

            const Client = await service.create({
                client: client
            });

            return response.status(201).json(Client);
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async index(request: Request, response: Response) {
        const service = new ClientService();

        try {
            const client = await service.find();

            return response.status(200).json(client);
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const service = new ClientService();

        try {
            const client = await service.findOne(parseInt(id));
            if(!client) {
                return response.status(400).json({ message: 'client not found' });
            }

            return response.status(200).json(client)
        } catch (error) {
            return response.status(500).json(error)
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const service = new ClientService();

        try {
            const client = await service.findOne(parseInt(id))

            if(!client) {
                return response.status(404).json({ message: "client not found" })
            } else {
                await service.delete(parseInt(id));
                return response.sendStatus(204);
            }
        } catch (error) {
            return response.status(500).json(error)
        }
    }
}