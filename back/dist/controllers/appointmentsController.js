"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelTurn = exports.createTurn = exports.getTurn = exports.getAllTurns = void 0;
const getAllTurns = (req, res) => {
    res.status(200).json('Obtener el listado de todos los turnos de todos los usuarios.');
};
exports.getAllTurns = getAllTurns;
const getTurn = (req, res) => {
    res.status(200).json("Obtener el detalle de un turno específico.");
};
exports.getTurn = getTurn;
const createTurn = (req, res) => {
    res.status(200).json("Agendar un nuevo turno.");
};
exports.createTurn = createTurn;
const cancelTurn = (req, res) => {
    res.status(200).json("Cambiar el estatus de un turno a “cancelled”.");
};
exports.cancelTurn = cancelTurn;
