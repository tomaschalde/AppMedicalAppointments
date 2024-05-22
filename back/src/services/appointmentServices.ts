import IAppointmentDto from "../dtos/IAppointmentDto";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
import appointmentRepository from "../repositories/AppointmentRepository"
import userRepository from "../repositories/UserRepository";

export const getAppointmentsService = async () : Promise <Appointment[]> => {
    const allAppointments : Appointment[] = await appointmentRepository.find({
        relations: {
            user: true,
        }
    }); 
    
    if(!allAppointments) throw Error ("Error de la base de datos")
    else{
        return allAppointments;
    }
    
}

export const getAppointmentByIdService = async (id : number) : Promise<Appointment> => {
    
    const appointment = await appointmentRepository.findOne({
        where: {id},
        relations:['user'],
    })
    
    if(!appointment) throw Error ("Turno inexistente");

    return appointment;
}

export const createAppointmentService = async (appointmentData : IAppointmentDto): Promise <Appointment> => {


    const user : User | null = await userRepository.findOneBy({
        id: appointmentData.userId
    })

    if(!user) throw Error('No existe el usuario')
        
    //Creamos
    const newAppointment : Appointment = await appointmentRepository.create(appointmentData);
    newAppointment.user = user;

    //Guardamos
    await appointmentRepository.save(newAppointment);
    
    return newAppointment;  
} 

export const cancelAppointmentService = async (id : number) => {

    const appointment = await appointmentRepository.findOneBy({id})
    
    if(!appointment) throw Error ("No se encontró ningún turno");

    appointment.status ="cancelled";
    await appointmentRepository.save(appointment);
} 

