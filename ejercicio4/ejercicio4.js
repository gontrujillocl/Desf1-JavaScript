//Pedir dato numerico al usuario
let numUser = parseInt(prompt('Ingresa un número y ve el resulatdo en años, semanas y días'));

// Calculo de los items involucardos
let years = Math.floor(numUser / 365);
let daysYear = numUser % 365;
let weeks = Math.floor(daysYear / 7);
let days = daysYear % 7;

//Mostrar resultados
let total = `Ingreso el número ${numUser}, que equivale a ${years} año(s), ${weeks} semanas y ${days} días.`;
document.write(`${total}`);