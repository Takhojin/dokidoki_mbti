import "reflect-metadata";
import { DataSource } from "typeorm";
import { sample1 } from "../modules/sample1/entity";
import { config } from "dotenv";

config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: [sample1],
  migrations: [],
  subscribers: [],
});
