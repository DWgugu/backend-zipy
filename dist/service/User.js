"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const repositories_1 = require("../database/repositories");
class UserService {
    async find() {
        const repository = new repositories_1.UserRepository();
        const users = await repository.find();
        return users;
    }
    async findOne(id) {
        const repository = new repositories_1.UserRepository();
        const user = await repository.findOne(id);
        return user;
    }
    ;
    async create(userDTO) {
        const repository = new repositories_1.UserRepository();
        const user = await repository.create(userDTO);
        return user;
    }
    async login(user) {
        const repository = new repositories_1.UserRepository();
        const User = await repository.login(user.user);
        return User;
    }
    async delete(id) {
        const repository = new repositories_1.UserRepository();
        await repository.delete(id);
    }
}
exports.UserService = UserService;
