"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1656877052005 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserTable1656877052005 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false,
                },
                {
                    name: "users",
                    type: "varchar",
                    length: "100",
                    isNullable: false,
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.CreateUserTable1656877052005 = CreateUserTable1656877052005;
