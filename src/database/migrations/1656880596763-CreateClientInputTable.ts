import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateClientInputTable1656880596763 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
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
                new TableForeignKey({
                    referencedColumnNames: ["id"],
                    referencedTableName: "zipy.cut_date",
                    columnNames: ["cut_date_id"]
                }),
                new TableForeignKey({
                    referencedColumnNames: ["id"],
                    referencedTableName: "zipy.client",
                    columnNames: ["client_id"]
                }),
                new TableForeignKey({
                    referencedColumnNames: ["id"],
                    referencedTableName: "zipy.users",
                    columnNames: ["user_id"]
                })
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("zipy.client_input")
    }

}
