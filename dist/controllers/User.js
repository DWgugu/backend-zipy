"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const models_1 = require("../database/models");
const service_1 = require("../service");
const bcrypt = require("bcrypt");
class UserController {
    async index(request, response) {
        const service = new service_1.UserService();
        try {
            const users = await service.find();
            return response.status(200).json(users);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async show(request, response) {
        const { id } = request.params;
        const service = new service_1.UserService();
        try {
            const user = await service.findOne(parseInt(id));
            if (!user) {
                return response.status(400).json({ message: 'user not found' });
            }
            return response.status(200).json(user);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async store(request, response) {
        const { user } = request.body;
        try {
            const hashedPassword = await bcrypt.hash(request.body.password, 10);
            const service = new service_1.UserService();
            const User = await service.create({
                user: user,
                password: hashedPassword
            });
            return response.status(201).json(User);
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async login(request, response) {
        const { user, password } = request.body;
        try {
            const userExist = await (0, typeorm_1.getRepository)(models_1.UserModels).findOne({ user: user });
            if (!userExist) {
                return response.status(404).json({ message: "user invalid" });
            }
            if (!await bcrypt.compare(password, userExist.password)) {
                return response.status(404).json({ message: "user or password invalid" });
            }
            return response.status(200).json({
                userAuthenticate: {
                    id: userExist.id,
                    user: userExist.user
                }
            });
        }
        catch (error) {
            return response.status(500).json(error);
        }
    }
    async delete(request, response) {
        const { id } = request.params;
        const service = new service_1.UserService();
        try {
            const user = await service.findOne(parseInt(id));
            if (!user) {
                return response.status(404).json({ message: "user not found" });
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
exports.default = UserController;
