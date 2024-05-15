import axios from "axios"

import {useDispatch} from "react-redux"
import { cancelAppointments } from "../../redux/reducer"

import styles from "./Appointment.module.css"


// eslint-disable-next-line react/prop-types
const Appointment = ({ appointmentData }) => {

    
    // eslint-disable-next-line react/prop-types
    const {date, time, description ,status,id} = appointmentData;

    const dispatch = useDispatch()

    const cancelAppointment = async () => {
            
        try {
            
            const confirmation = window.confirm ('¿Estás seguro que deseas cancelar el turno?')

            if(confirmation){
                const response = await axios.put(`http://localhost:3000/appointments/cancel/${id}`); 
                dispatch(cancelAppointments(id))
            }
            else{
                alert("El turno continúa reservado")
            }

        } catch (error) {
            console.log("Error al obtener los datos" , error)
        }
    }

    const handleCancel = (event) => {
        event.preventDefault();
        cancelAppointment();
    }

    return (
        <div className={styles.containerTurn}>
            
            <label className= {styles.label}>Día</label>
            <span className= {styles.span}>{date}</span>

            <label className= {styles.label}>Hora</label>
            <span className= {styles.span}>{time}</span>
            
            <label className= {styles.label}>Especialidad</label>
            <span className= {styles.span}>{description}</span>

            <label className= {styles.label}>Estado</label>
            <span className= {styles.spanStatus}>{status}</span>

            <button disabled = {status === "cancelled"} onClick = {handleCancel} className={styles.btn}>Cancelar</button>

        </div>
    )
}

export default Appointment;