"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCutDateTable1656878929686 = void 0;
const typeorm_1 = require("typeorm");
class CreateCutDateTable1656878929686 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "zipy.cut_date",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: "date_start",
                    type: "date",
                    isNullable: false
                },
                {
                    name: "date_end",
                    type: "date",
                    isNullable: false
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("zipy.cut_date");
    }
}
exports.CreateCutDateTable1656878929686 = CreateCutDateTable1656878929686;
