import axios from "axios"

import { useState, useEffect } from "react";
import { Link ,useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"

import {setUser} from "../../redux/reducer"

import  {validate}  from "../../helpers/Validate";
import { labelsLogin } from "../../helpers/labels";

import styles from "./Login.module.css";


const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialState = {
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

        const loginUser = async () => {

            try {
                const response = await axios.post("http://localhost:3000/users/login",form);
                
                if(! response.data.login) throw Error;

                alert("Se inicio sesion con exito ")
                dispatch(setUser(response.data.user))
                navigate("/");
                setForm(initialState);
                
            } catch (error) {
                console.log("Error al iniciar sesión" , error.message)
                alert("Error al iniciar sesión. Nombre de usuario o contraseña incorrectas")
            }
        }  

        loginUser();   
    
    }

    return (
        <div className = {styles.formContainer}>
            <form onSubmit = {handleOnSubmit}>

            <div className={styles.titleForm}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
                </svg>
                <h2>INICIAR SESIÓN</h2>

            </div>

            {
                labelsLogin.map( ({name,label,type}) => {
                    return (
                        <div key = {name}>
                            <label>{label}</label>
                            <input type={type} onChange = {handleInputChange} name = {name} value={form[name]}/>
                            {errors[name] && <span key= {name} className={styles.errorMessage}> {errors [name]} </span>}
                        </div>
                    )
                })

            }  

            <button disabled= {errors.password || errors.username} type="submit">INICIAR SESIÓN</button>
            
            <p>¿Aún no estás registrado? <Link to = "/register" >Registrarse</Link></p>
            
        </form>
        </div>

    )

}

export default Login;