require("dotenv").config();

module.exports = {
  type: process.env.DATABASE_TYPE,
  url: process.env.DATABASE_URL,
  logging: false,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  migrations: ["dist/database/migrations/**/*.ts"],
  entities: ["dist/database/models/**/*.ts"],
  cli: {
    entitiesDir: "src/database/models",
    migrationsDir: "src/database/migrations",
  },
};
