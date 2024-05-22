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

 
    const date = input.date.split("-")
    const dateActual = new Date().toLocaleDateString().split("/").reverse()
    

    if(Number(date[0]) < Number(dateActual[0]) )  
        errors = {...errors, date: "Seleccione un año válido"};


    if(Number(date[0]) === Number(dateActual[0]) && Number(date[1]) < Number(dateActual[1]))
        errors = {...errors, date: "Seleccione un mes válido"};


    if(Number(date[1]) === Number(dateActual[1]) && Number(date[2]) <= Number(dateActual[2])) 
        errors = {...errors, date: "Seleccione un día válido"};


    const dayWeek = new Date(input.date).getDay();
    
    if(dayWeek === 6 || dayWeek === 5)
        errors = {...errors, date: "Seleccione un día válido"};
    

    const hour = input.time.split(":")
    

    if(Number(hour[0]) < 8 || Number(hour[0]) > 20)
        errors = {...errors, time: "Seleccione un horario válido"};


    if((Number(hour[0]) <= 7 || Number(hour[0]) >= 20) && (Number(hour[1]) >= 1 || Number(hour[1]) <= 59 ))
        errors = {...errors, time: "Seleccione un horario válido"};



    if(input.description === "") errors = {...errors, description: "Seleccione una especialidad"};

    return errors
}