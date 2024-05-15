
import ICredentialDto from "../dtos/ICredentialDto";
import { Credential } from "../entities/Credential";
import credentialRepository from "../repositories/CredentialRepository";

export const createCredentialService = async (credentialData: ICredentialDto): Promise <Credential> => {
    
    //Creamos 
    const newCredential = await credentialRepository.create(credentialData);

    //Guardamos en db
    await credentialRepository.save(newCredential);
    
    return newCredential;
}

export const validateCredentialService = async (credentialData: ICredentialDto): Promise<Credential> => {

    const { username, password} = credentialData;
    const foundCredentials = await credentialRepository.findOneBy({
        username: username,
        password: password
    });
    

    //Hacemos una doble validacion porque foundCredentials puede ser Undefined (find retorna el primer  que matchee con el username y la password, sino encuentra retorna undefined)
    if(foundCredentials && foundCredentials.username === username && foundCredentials.password === password) 
        return foundCredentials;
    else{
        throw Error ("Credenciales incorrectas");
    }
}