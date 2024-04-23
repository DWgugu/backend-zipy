import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateClientInputTable1656880596763 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "client_input",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: "cut_date_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "client_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "user_id",
            type: "uuid",
            isNullable: false,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            referencedColumnNames: ["id"],
            referencedTableName: "cut_date",
            columnNames: ["cut_date_id"],
          }),
          new TableForeignKey({
            referencedColumnNames: ["id"],
            referencedTableName: "client",
            columnNames: ["client_id"],
          }),
          new TableForeignKey({
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            columnNames: ["user_id"],
          }),
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("client_input");
  }
}
