import 'dotenv/config';

export const PORT =  Number(process.env.PORT)|| 3000;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT =  Number(process.env.DB_PORT);
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_TYPE = process.env.DB_TYPE;