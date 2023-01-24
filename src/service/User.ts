import { UserRepository } from "../database/repositories";
import { UserDTO } from "../dto"

export class UserService {
    async find() {
        const repository = new UserRepository();
        const users = await repository.find();

        return users;
    }

    async findOne(id: number) {
        const repository = new UserRepository();
        const user = await repository.findOne(id);

        return user;
    };

    async create(userDTO: UserDTO) {
        const repository = new UserRepository();
        const user = await repository.create(userDTO);

        return user;
    }

    async login(user: UserDTO) {
        const repository = new UserRepository();
        const User = await repository.login(user.user);

        return User;
    }

    async delete(id: number) {
        const repository = new UserRepository();
        await repository.delete(id);
    }
}