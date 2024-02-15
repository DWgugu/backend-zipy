import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateWorkedDateTable1656881063999 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "worked_date",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: "piece_value",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "quantity",
            type: "int",
            isNullable: false,
          },
          {
            name: "date",
            type: "date",
            isNullable: false,
          },
          {
            name: "service_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "client_input_id",
            type: "int",
            isNullable: false,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            referencedColumnNames: ["id"],
            referencedTableName: "service",
            columnNames: ["service_id"],
          }),
          new TableForeignKey({
            referencedColumnNames: ["id"],
            referencedTableName: "client_input",
            columnNames: ["client_input_id"],
          }),
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("worked_input");
  }
}
