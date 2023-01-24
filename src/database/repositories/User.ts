import { UserDTO } from "../../dto";
import { UserModels } from "../models";

export class UserRepository {
    async find() {
        const users = await UserModels.find();

        return users;
    }

    async findOne(id: number) {
        const user = await UserModels.findOne(id)

        return user;
    }

    async create(userDTO: UserDTO) {
        const user = await new UserModels(userDTO.user, userDTO.password);
        user.save();

        return user;
    }

    async login(user: string) {
        const User = await UserModels.findOne(user);

        return User;
    }

    async delete(id: number) {
        await UserModels.delete(id);
    }
}