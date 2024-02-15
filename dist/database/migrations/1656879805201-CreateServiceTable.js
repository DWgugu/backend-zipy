"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServiceTable1656879805201 = void 0;
const typeorm_1 = require("typeorm");
class CreateServiceTable1656879805201 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "service",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: "type",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "piece_value",
                    type: "decimal",
                    isNullable: false
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("service");
    }
}
exports.CreateServiceTable1656879805201 = CreateServiceTable1656879805201;
