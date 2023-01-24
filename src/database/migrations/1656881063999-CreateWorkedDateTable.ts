import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateWorkedDateTable1656881063999 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: "zipy.worked_date",
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
                new TableForeignKey({
                    referencedColumnNames: ["id"],
                    referencedTableName: "zipy.service",
                    columnNames: ["service_id"]
                }),
                new TableForeignKey({
                    referencedColumnNames: ["id"],
                    referencedTableName: "zipy.client_input",
                    columnNames: ["client_input_id"]
                })
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("zipy.worked_input")
    }

}
