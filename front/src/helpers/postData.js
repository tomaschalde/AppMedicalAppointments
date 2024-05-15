import axios from "axios";

const postData = async (formData) => {
    try {

        const response = await axios.post("http://localhost:3000/users/register",formData);

        console.log(response)
        alert(`Usuario registrado con exito`)

    } catch (error) {
        console.log("Error al registrarse" , error)
        alert("Error, el usuario no se pudo registrar")
    }
}

export default postData;