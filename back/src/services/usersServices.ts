import IUserDto from "../dtos/IUserDto";
import { createCredentialService} from "./credentialServices";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import userRepository from "../repositories/UserRepository";


export const getUsersService = async () : Promise <User[]> => {
    const allUsers : User[] = await userRepository.find() 
    
    if(!allUsers) throw Error ("Error de la base de datos")
    else{
        return allUsers;
    }
    
}

export const getUserByIdService = async (id : number) : Promise<User | null> => {
    
    const user = await userRepository.findOne({
        where: {id},
        relations: ['appointments'],
    });

    
    if(!user) throw Error ("Usuario inexistente");

    return user;
}

export const createUserService = async (userData : IUserDto) : Promise <User> => {

    //Creamos
    const newUser : User  = await userRepository.create(userData);
    //Guardamos
    await userRepository.save(newUser)
    
    const newCredentials : Credential = await createCredentialService({
        username: userData.username, 
        password: userData.password
    });

    newUser.credential = newCredentials;  
    await userRepository.save(newUser);                                                        

    return newUser;
}

