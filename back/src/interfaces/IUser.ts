import ICredential from "./ICredential"

interface IUser {
    id: number,
    name: string,
    email: string,
    birthdate: string;
    nDni: number,
    credentialIsId?: number;
}

export default IUser;