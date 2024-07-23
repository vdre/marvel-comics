import { Sequelize } from 'sequelize';

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

export const connection = new Sequelize(DB_NAME!, DB_USER!, DB_PASSWORD!, {
    host: DB_HOST,
    port: parseInt(DB_PORT!),
    dialect: 'postgres',
    logging: false,
    sync: {force: false},
});

export const DBPostgres = async ()=> {
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
