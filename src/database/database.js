import Sequelize from 'sequelize';
require('dotenv').config()

export const sequelize = new Sequelize(
    process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT,
        dialectOptions: {
            ssl: {
            require: true,
            rejectUnauthorized: false
            }
        },
        loggin: false
    }
)