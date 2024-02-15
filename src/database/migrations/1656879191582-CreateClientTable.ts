import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClientTable1656879191582 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "client",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
          },
          {
            name: "client",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("client");
  }
}
