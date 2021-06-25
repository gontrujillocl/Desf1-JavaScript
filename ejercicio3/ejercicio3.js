// Se crea un Let con su respectivo valores
let celsius = prompt("Ingrese temperatura en grados celsius");

// Se realizan las operaciones matematicas y el resultado se guarda en una nueva
result1 = parseInt(celsius) + 273.15 + " K";
result2 = parseInt(celsius) * 9/5 + 32 + " °F";

// Se Imprime el resultado 
document.write(`Ingresaste ${celsius} °C, los cuales equivalen a ${result1}, y a ${result2}.`);