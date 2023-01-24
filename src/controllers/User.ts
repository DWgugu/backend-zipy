import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { UserModels } from "../database/models";
import { UserService } from "../service";
const bcrypt = require("bcrypt");

export default class UserController {
    async index(request: Request, response: Response) {
        const service = new UserService();

        try {
            const users = await service.find();

            return response.status(200).json(users);
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const service = new UserService();

        try {
            const user = await service.findOne(parseInt(id));
            if(!user) {
                return response.status(400).json({ message: 'user not found' });
            }

            return response.status(200).json(user)
        } catch (error) {
            return response.status(500).json(error)
        }
    }

    async store(request: Request, response: Response) {
        const { user } = request.body;

        try {
            const hashedPassword = await bcrypt.hash(request.body.password, 10);
            const service = new UserService();

            const User = await service.create({
                user: user,
                password: hashedPassword
            });

            return response.status(201).json(User);
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    async login(request: Request, response: Response) {
        const { user, password } = request.body;

        try {
            const userExist = await getRepository(UserModels).findOne({ user: user })

            if(!userExist) {
                return response.status(404).json({ message: "user invalid" })
            }

            if(!await bcrypt.compare(password, userExist.password)) {
                return response.status(404).json({ message: "user or password invalid" })
            }

            return response.status(200).json({
                userAuthenticate: {
                    id: userExist.id,
                    user: userExist.user
                }
            });

        } catch (error) {
            return response.status(500).json(error)
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const service = new UserService();

        try {
            const user = await service.findOne(parseInt(id))

            if(!user) {
                return response.status(404).json({ message: "user not found" })
            } else {
                await service.delete(parseInt(id));
                return response.sendStatus(204);
            }
        } catch (error) {
            return response.status(500).json(error)
        }
    }
}