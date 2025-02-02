import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: ['DEVELOPMENT', 'LOCAL'].includes(process.env.NODE_ENV) ? true : ['error'],
  entities: [`${__dirname}/../**/*.entity.{ts,js}`],
  synchronize: false,
  migrations: [`${__dirname}/../database/migrations/*.{ts,js}`],
});
