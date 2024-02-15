"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkedDateTable1656881063999 = void 0;
const typeorm_1 = require("typeorm");
class CreateWorkedDateTable1656881063999 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "worked_date",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: "piece_value",
                    type: "decimal",
                    isNullable: false
                },
                {
                    name: "quantity",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "date",
                    type: "date",
                    isNullable: false
                },
                {
                    name: "service_id",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "client_input_id",
                    type: 'int',
                    isNullable: false
                }
            ],
            foreignKeys: [
                new typeorm_1.TableForeignKey({
                    referencedColumnNames: ["id"],
                    referencedTableName: "service",
                    columnNames: ["service_id"]
                }),
                new typeorm_1.TableForeignKey({
                    referencedColumnNames: ["id"],
                    referencedTableName: "client_input",
                    columnNames: ["client_input_id"]
                })
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("worked_input");
    }
}
exports.CreateWorkedDateTable1656881063999 = CreateWorkedDateTable1656881063999;
