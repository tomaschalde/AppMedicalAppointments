import { Request, Response } from "express";
import { getAppointmentsService, getAppointmentByIdService, createAppointmentService, cancelAppointmentService } from "../services/appointmentServices";
import IAppointmentDto from "../dtos/IAppointmentDto";
import { Appointment } from "../entities/Appointment";

export const getAllAppointments = async (req : Request , res : Response) => {
    try {

        const users : Appointment[] = await getAppointmentsService();
        res.status(200).json(users);

    } catch (error : any) {
        res.status(404).send({message: error.message});
    }
}

export const getAppointment = async (req : Request, res : Response) => {
    try {

        const id = req.params.id;
        const appointment : Appointment = await getAppointmentByIdService (Number(id));
        res.status(200).json(appointment);

    } catch (error : any ){
        res.status(404).send({message: error.message});
    }
}

export const reserveAppointment = async (req : Request , res : Response) => {
    try {
        const {date, time, description ,userId} : IAppointmentDto = req.body;
        
        const newAppointment : Appointment = await createAppointmentService({date, time, description ,userId});

        res.status(201).json(newAppointment);

    } catch (error : any) {
        res.status(400).send({message: error.message});
    }
} 

export const cancelAppointment = async (req : Request, res : Response) => {
    try {

        const {id} = req.params;
        await cancelAppointmentService (Number(id));
        res.status(200).json("Turno cancelado");

    } catch (error : any ){
        res.status(404).send({message: error.message});
    }
} 