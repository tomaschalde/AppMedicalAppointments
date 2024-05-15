import {Router} from "express"; 
export const userRouter = Router();

import { getAllUsers, getUser, createUser, loginUser } from "../controllers/usersController";
import { validateRegister , validateLogin } from "../middlewares/validatesUsers";



userRouter.get('/',getAllUsers);
userRouter.get('/:id',getUser);
userRouter.post('/register', validateRegister,createUser);
userRouter.post('/login', validateLogin,loginUser);
