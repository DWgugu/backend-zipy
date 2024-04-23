import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateServiceTable1656879805201 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "service",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
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
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("service");
  }
}
