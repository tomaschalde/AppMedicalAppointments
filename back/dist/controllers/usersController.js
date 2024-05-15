"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = exports.getUser = exports.getAllUsers = void 0;
const getAllUsers = (req, res) => {
    res.status(200).json('Obtener el listado de todos los usuarios.');
};
exports.getAllUsers = getAllUsers;
const getUser = (req, res) => {
    res.status(200).json("Obtener el detalle de un usuario específico.");
};
exports.getUser = getUser;
const createUser = (req, res) => {
    res.status(200).json("Registro de un nuevo usuario.");
};
exports.createUser = createUser;
const loginUser = (req, res) => {
    res.status(200).json("Login del usuario a la aplicación.");
};
exports.loginUser = loginUser;
