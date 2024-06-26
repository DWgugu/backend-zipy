"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientTable1656879191582 = void 0;
const typeorm_1 = require("typeorm");
class CreateClientTable1656879191582 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "client",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false,
                },
                {
                    name: "client",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("client");
    }
}
exports.CreateClientTable1656879191582 = CreateClientTable1656879191582;
