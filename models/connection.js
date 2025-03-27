import 'dotenv/config';
import { Sequelize } from 'sequelize';

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql', // 可換成 'postgres' | 'sqlite' | 'mssql'
    logging: false
});