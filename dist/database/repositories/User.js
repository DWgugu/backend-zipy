"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const models_1 = require("../models");
class UserRepository {
    async find() {
        const users = await models_1.UserModels.find();
        return users;
    }
    async findOne(id) {
        const user = await models_1.UserModels.findOne(id);
        return user;
    }
    async create(userDTO) {
        const user = await new models_1.UserModels(userDTO.user, userDTO.password);
        user.save();
        return user;
    }
    async login(user) {
        const User = await models_1.UserModels.findOne(user);
        return User;
    }
    async delete(id) {
        await models_1.UserModels.delete(id);
    }
}
exports.UserRepository = UserRepository;
