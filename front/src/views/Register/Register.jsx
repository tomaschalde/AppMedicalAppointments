import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"

import postData from "../../helpers/postData";
import  {validate}  from "../../helpers/Validate";
import {labelsRegister} from "../../helpers/labels";

import styles from "./Register.module.css";




const Register = () => {

    const navigate = useNavigate();

    const initialState = {
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
    }

    const [form, setForm] = useState(initialState)

    const [errors, setErrors] = useState(initialState)

    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setForm({
            ...form,
             [name]: value
        }) 

    }

    useEffect( () => { 
        setErrors(validate(form));
    }, [form])


    const handleOnSubmit = (event) => {
        event.preventDefault();

        postData(form);   
        navigate("/login")
        setForm(initialState);
        
    }

    return (
        <div className = {styles.formContainer}>

            
            <form onSubmit = {handleOnSubmit}>

                <h2>REGISTRARSE</h2>

                {
                    labelsRegister.map( ({name,label,type}) => {
                        return (
                            <div key = {name}>
                                <label>{label}</label>
                                <input type={type} onChange = {handleInputChange} name = {name} value={form[name]}/>
                                {errors[name] && <span key= {name} className={styles.errorMessage}> {errors [name]} </span>}
                            </div>
                        )
                    })

                }  

                <button disabled = {errors.name || errors.username || errors.password || errors.nDni || errors.birthdate || errors.email} type="submit">REGISTRAR</button>
                
                
                
            </form>

            
        </div>

    )

}

export default Register;