"use strict";
// GET /users => Obtener todos los usuarios
// GET /users/:id => Obtener un usuario por id
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
//POST /users/register => Crear un nuevo usuario
const express_1 = require("express");
exports.userRouter = (0, express_1.Router)();
const usersController_1 = require("../controllers/usersController");
exports.userRouter.get('/', usersController_1.getAllUsers);
exports.userRouter.get('/:id', usersController_1.getUser);
exports.userRouter.post('/register', usersController_1.createUser);
exports.userRouter.post('/login', usersController_1.loginUser);
