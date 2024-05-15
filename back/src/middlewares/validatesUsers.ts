import { Request, Response, NextFunction } from "express";

export const validateRegister = (req : Request , res: Response , next: NextFunction) => {

    const {name, email, birthdate, nDni, username, password} = req.body;

    if(!name.trim() || !email.trim() || !nDni.trim() || !username.trim() || !password.trim()) 
        return res.status(400).json({message: "Faltan datos por completar"});

    if(typeof name !== 'string' || typeof email !== 'string'||
       typeof nDni !== 'string' || typeof username !== 'string' || typeof password !== 'string')

       return res.status(400).json({ error: 'Los tipos de datos no son válidos' });

    next();
}

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const {username, password} = req.body;

    if(!username.trim() || !password.trim()) return res.status(400).json({message: "Faltan datos por completar"});

    next();
}