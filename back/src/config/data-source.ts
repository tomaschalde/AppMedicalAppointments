import {DataSource} from "typeorm";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_TYPE, DB_USERNAME } from "./envs";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD, 
    database: DB_TYPE, 
    //dropSchema : true,
    synchronize: true,
    logging: false,
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
})
