"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
/*export default class Database{
    private static instance: Connection;

    private constructor() {}

    static async getInstance() {
        if(!Database.instance) {
            const database = new Database();
            Database.instance = await database.openConnection();
        }
    }

    private async openConnection() {
        try {
            return await createConnection();
        } catch (error) {
            throw new Error(`Erro ao conectar no banco: ${error}`);
        }
    }
}*/
(0, typeorm_1.createConnection)();
exports.default = (0, typeorm_1.createConnection)();
