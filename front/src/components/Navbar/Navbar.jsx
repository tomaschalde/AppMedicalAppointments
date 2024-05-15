import { Link, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import { removeUser } from "../../redux/reducer";

import styles from "./Navbar.module.css";

const Navbar = () => {

    const userActive = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSesion = () => {
        dispatch (removeUser())
        navigate("/")
    }

    return (
        
        <nav className= {styles.navbar}>

            <div className={styles.containerLogo}>
                <Link to ="/"><img src="https://i.pinimg.com/564x/6a/74/34/6a7434776047dd4a6404d3a93a7775c7.jpg" alt="Consultorio.img" /></Link>
            </div>

            <div className={styles.containerOptions}>
                <ul>
                    
                    <li> <Link to = "/">Inicio</Link> </li>
                    <li > <Link to = "/contact">Contacto</Link> </li>

                    {
                        userActive?.name && <li > <Link to = "/appointments">Mis turnos</Link> </li>
                    }
                    
                    {
                        userActive?.name ? (
                            <>
                            <li> <Link to = "/schedule">Reservar Turno</Link></li>
                                <button onClick = {handleSesion} className={styles.buttonSesion}> 
                                
                                    Cerrar sesión 
                                
                                </button>
                            </>
                        )
                        :
                            <button className={styles.buttonSesion}> <Link to = "/login">Iniciar sesión</Link> </button>
                    }

                    
                </ul>
            </div>

        </nav>
    )

}

export default Navbar;