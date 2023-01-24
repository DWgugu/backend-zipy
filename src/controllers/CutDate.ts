import { Request, Response } from "express";
import { CutDateService } from "../service";

export default class CutDateController {
    async store(request: Request, response: Response) {
        const { dateStart, dateEnd } = request.body; 

        try {
            const service = new CutDateService();

            const cutDate = await service.create({
                dateStart: dateStart,
                dateEnd: dateEnd
            });

            return response.status(201).json(cutDate);
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async index(request: Request, response: Response) {
        const service = new CutDateService();

        try {
            const cutdate = await service.find();

            return response.status(200).json(cutdate);
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const service = new CutDateService();

        try {
            const cutdate = await service.findOne(parseInt(id));
            if(!cutdate) {
                return response.status(400).json({ message: 'cut date not found' });
            }

            return response.status(200).json(cutdate)
        } catch (error) {
            return response.status(500).json(error)
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const service = new CutDateService();

        try {
            const cutdate = await service.findOne(parseInt(id))

            if(!cutdate) {
                return response.status(404).json({ message: "cut date not found" })
            } else {
                await service.delete(parseInt(id));
                return response.sendStatus(204);
            }
        } catch (error) {
            return response.status(500).json(error)
        }
    }
}