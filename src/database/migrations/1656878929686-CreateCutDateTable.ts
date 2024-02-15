import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCutDateTable1656878929686 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cut_date",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: "date_start",
            type: "date",
            isNullable: false,
          },
          {
            name: "date_end",
            type: "date",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cut_date");
  }
}
