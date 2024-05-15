import axios from "axios";

import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {validateAppointment} from "../../helpers/Validate";
import { labelsAppointment } from "../../helpers/labels";

import styles from "./CreateAppointment.module.css"

const CreateAppointment = () => {

    const userActive = useSelector((state) => state.user);
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const initialState = {
        date: "",
        time: "",
        description:"",
    }

    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const handleInputChange = (event) => {
        const {name,value} = event.target;

        setForm ({
            ...form,
            [name]: value
        })
    }

    useEffect( () => { 
        setErrors(validateAppointment(form));
    }, [form])

    useEffect(() => {
        !userActive?.name && navigate("/login") //Con esto si el usuario no está logueado, vaya directamente a /
    }, [])
    
    const handleOnSubmit = (event) => {
        event.preventDefault();

        const create = async () => {
            try {


                const response = await axios.post(`http://localhost:3000/appointments/schedule`, {
                    date:form.date, 
                    time: form.time, 
                    description: form.description, 
                    userId: userActive.id
                })

                
                alert("El turno se reservó con éxito ")
                navigate("/appointments");
                setForm(initialState);

            } catch (error) {
                console.log("Error al crear turno" , error.message)
                alert("No se pudo reservar el turno")
            }

        }

        create()
    }
    
    return (

        <>
        {userActive?.name && (
        <div className={styles.formContainer}>
            <form onSubmit={handleOnSubmit}>
            {
                labelsAppointment.map( ({name,label,type}) => {
                    return (
                        <div key = {name}>
                            <label>{label}</label>
                            <input type={type} onChange = {handleInputChange} name = {name} value={form[name]}/>
                            {errors[name] && <span key= {name} className={styles.errorMessage}> {errors [name]} </span>}
                        </div>
                    )
                })

            }

            <div>
                <label>Especialidad</label>
                <select name = "description"  onChange = {handleInputChange}>
                    <option value="" >...</option>
                    <option value="Traumatología" >Traumatología</option>
                    <option value="Odontología" >Odontología</option>
                    <option value="Médico Clínico">Médico Clínico</option>
                </select>
                {errors["description"] && <span className={styles.errorMessage}> {errors ["description"]} </span>}
            </div> 
            
            <button disabled = {errors.description || errors.date || errors.time} type = "submit">Reservar turno</button>

            </form>
        </div>
        )
        }
        </>

    )
}

export default CreateAppointment;