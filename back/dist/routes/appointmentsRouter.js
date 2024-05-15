"use strict";
// GET /appointments => Obtener todos los turnos
//GET /appointments/:id => Obtener un turno por ID
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentsRouter = void 0;
//POST /appointments/schedule => Crear un nuevo turno
//PUT /appointments/cancel => Cancelar un turno
const express_1 = require("express");
exports.appointmentsRouter = (0, express_1.Router)();
const appointmentsController_1 = require("../controllers/appointmentsController");
exports.appointmentsRouter.get('/', appointmentsController_1.getAllTurns);
exports.appointmentsRouter.get('/:id', appointmentsController_1.getTurn);
exports.appointmentsRouter.post('/schedule', appointmentsController_1.createTurn);
exports.appointmentsRouter.put('/cancel', appointmentsController_1.cancelTurn);
