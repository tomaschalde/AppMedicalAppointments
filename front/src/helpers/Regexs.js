

// eslint-disable-next-line no-useless-escape
export const regexName = /^[^\s][a-zA-ZÀ-ÿ\u00f1\u00d1\s']+(['][a-zA-ZÀ-ÿ\u00f1\u00d1\s]+)*$/


export const regexBirthdate = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/

export const regexDni = /^\d{8}$/ //Dni solo numeros (sin puntos)

export const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const regexUsername = /^[a-zA-Z0-9_]+$/

// eslint-disable-next-line no-useless-escape
export const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])(?!.*[\\\/])[A-Za-zñÑ\d@$!%*?&.]{8,}$/
