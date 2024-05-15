import { Request, Response } from "express";
import { getUsersService, getUserByIdService, createUserService} from "../services/usersServices";
import IUserDto from "../dtos/IUserDto";
import { User } from "../entities/User";
import { validateCredentialService } from "../services/credentialServices";
import userRepository from "../repositories/UserRepository";

export const getAllUsers = async (req : Request , res : Response) => {
    try {

        const users : User[] = await getUsersService();
        res.status(200).json(users);

    } catch (error : any) {
        res.status(404).send({message: error.message});
    }
}

export const getUser = async (req : Request , res : Response) => {
    try {

        const {id} = req.params;
        const user : User | null = await getUserByIdService (Number(id));
        res.status(200).json(user);

    } catch (error : any ){
        res.status(404).send({message: error.message});
    }
}

export const createUser = async (req : Request, res : Response) => {
    try {
        const {name, email, username, password, birthdate, nDni} : IUserDto = req.body;
        
        const newUser : User = await createUserService({name,email,username,password,birthdate,nDni});

        res.status(201).json(newUser);

    } catch (error : any) {
        res.status(400).send({message: error.message});
    }
} 

export const loginUser = async (req : Request , res : Response) => {

    try {
        const {username,password} = req.body;
        const credential = await validateCredentialService({username,password})

        const user = await userRepository.findOne({
            where: {credential}
        });


        res.status(200).json({
            login: true,
            user
        });

    } catch (error : any) {
        res.status(400).send({login: false, message: error.message});
    }
    
} 