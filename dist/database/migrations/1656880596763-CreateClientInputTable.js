"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientInputTable1656880596763 = void 0;
const typeorm_1 = require("typeorm");
class CreateClientInputTable1656880596763 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "zipy.client_input",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: "cut_date_id",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "client_id",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "user_id",
                    type: "int",
                    isNullable: false
                }
            ],
            foreignKeys: [
                new typeorm_1.TableForeignKey({
                    referencedColumnNames: ["id"],
                    referencedTableName: "zipy.cut_date",
                    columnNames: ["cut_date_id"]
                }),
                new typeorm_1.TableForeignKey({
                    referencedColumnNames: ["id"],
                    referencedTableName: "zipy.client",
                    columnNames: ["client_id"]
                }),
                new typeorm_1.TableForeignKey({
                    referencedColumnNames: ["id"],
                    referencedTableName: "zipy.users",
                    columnNames: ["user_id"]
                })
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("zipy.client_input");
    }
}
exports.CreateClientInputTable1656880596763 = CreateClientInputTable1656880596763;
