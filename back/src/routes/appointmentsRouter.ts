import {Router} from "express"; 
export const appointmentsRouter = Router();

import {getAllAppointments, getAppointment, cancelAppointment, reserveAppointment } from "../controllers/appointmentsController";


appointmentsRouter.get('/', getAllAppointments);
appointmentsRouter.get('/:id', getAppointment);
appointmentsRouter.post('/schedule',reserveAppointment);
appointmentsRouter.put('/cancel/:id', cancelAppointment);

