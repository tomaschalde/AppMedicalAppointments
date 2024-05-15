import axios from "axios";

import { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";

import Appointment from "../../components/Appointment/Appointment";

import { setUserAppointments } from "../../redux/reducer";

import styles from "./MyAppointments.module.css";



const MyAppointments = () => {

    
    const userActive = useSelector( (state) => state.user) 
    const appointments = useSelector((state) => state.userAppointments);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        !userActive?.name && navigate("/login") 
    }, [])


    useEffect(() => {
        const fetchData = async () => {
            
            try {
                
                const response = await axios.get(`http://localhost:3000/users/${userActive.id}`); 
                dispatch(setUserAppointments(response.data.appointments))
        
            } catch (error) {
                console.log("Error al obtener los datos" , error)
            }
        }

        userActive?.name && fetchData();  

    }, [])

    return (
        <>
            {
                userActive?.name && (
                    <div className= {styles.containerMyTurns}>
                    <h1 className={styles.title}>Mis turnos</h1>
        
                    {
                        !appointments?.length > 0 ? <h3>No hay turnos</h3> :
                            (
                                <div className={styles.containerTurns}>
                                {
                                    appointments?.map((appointment) => {
                                        return <Appointment key = {appointment.id} appointmentData = {appointment} />
                                    })
                                }
                                </div>
                            )
                    }
                </div>
                )
            }
        </>


        
    )
}

export default MyAppointments;