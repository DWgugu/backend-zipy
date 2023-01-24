import { Request, Response } from "express";
import { ServiceService } from "../service";

export default class ServiceController {
    async store(request: Request, response: Response) {
        const { type, pieceValue } = request.body; 

        try {
            const service = new ServiceService();

            const Service = await service.create({
                type: type,
                pieceValue: pieceValue
            });

            return response.status(201).json(Service);
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async index(request: Request, response: Response) {
        const service = new ServiceService();

        try {
            const Service = await service.find();

            return response.status(200).json(Service);
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const service = new ServiceService();

        try {
            const Service = await service.findOne(parseInt(id));
            if(!Service) {
                return response.status(400).json({ message: 'service not found' });
            }

            return response.status(200).json(Service)
        } catch (error) {
            return response.status(500).json(error)
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const service = new ServiceService();

        try {
            const Service = await service.findOne(parseInt(id))

            if(!Service) {
                return response.status(404).json({ message: "service not found" })
            } else {
                await service.delete(parseInt(id));
                return response.sendStatus(204);
            }
        } catch (error) {
            return response.status(500).json(error)
        }
    }
}