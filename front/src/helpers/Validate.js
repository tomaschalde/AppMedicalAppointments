import {regexDni, regexEmail,regexUsername, regexPassword} from "./Regexs";

export const validate = (input) => {

    let errors = {};

    if(!input.name) errors = {...errors, name: "El nombre es obligatorio"};

    if(!input.birthdate) errors = {...errors, birthdate: "La fecha de nacimiento es obligatoria"};

    if(!regexDni.test(input.nDni)) errors = {...errors, nDni: "El dni ingresado no es válido"};

    if(!regexEmail.test(input.email)) errors = {...errors, email: "Ingresa un email válido"};

    if(!regexUsername.test(input.username)) errors = {...errors, username: "El nombre de usuario no es válido"};

    if(!regexPassword.test(input.password)) errors = {...errors, password: "La contraseña debe contener al menos 8 carácteres, una letra mayúscula, una letra minúscula, un número y un carácter especial"};


    return errors;
}

export const validateAppointment = (input) => {
    let errors = {}

    //Validacion fecha
    const date = input.date.split("-")
    const dateActual = new Date().toLocaleDateString().split("/").reverse()
    
    //Si el año recibido es menor al año actual
    if(Number(date[0]) < Number(dateActual[0]) )  
        errors = {...errors, date: "Seleccione un año válido"};

    //Si el mes recibido es menor al mes actual
    if(Number(date[0]) === Number(dateActual[0]) && Number(date[1]) < Number(dateActual[1]))
        errors = {...errors, date: "Seleccione un mes válido"};

    //Si el mes recibido es igual al mes actual y el dia recibido es menor o igual al dia actual
    if(Number(date[1]) === Number(dateActual[1]) && Number(date[2]) <= Number(dateActual[2])) 
        errors = {...errors, date: "Seleccione un día válido"};


    const dayWeek = new Date(input.date).getDay();
    
    if(dayWeek === 6 || dayWeek === 5)
        errors = {...errors, date: "Seleccione un día válido"};
    
    //Validacion hora
    const hour = input.time.split(":")
    
    //Si la hora recibida es menor a 8 o mayor a 20
    if(Number(hour[0]) < 8 || Number(hour[0]) > 20)
        errors = {...errors, time: "Seleccione un horario válido"};

    //Si la hora recibida es menor o igual a 7, o mayor o igual a 20. Y si el minuto es mayor o igual a 1 o menor o igual a 59
    if((Number(hour[0]) <= 7 || Number(hour[0]) >= 20) && (Number(hour[1]) >= 1 || Number(hour[1]) <= 59 ))
        errors = {...errors, time: "Seleccione un horario válido"};


    //Validacion especialidad
    if(input.description === "") errors = {...errors, description: "Seleccione una especialidad"};

    return errors
}