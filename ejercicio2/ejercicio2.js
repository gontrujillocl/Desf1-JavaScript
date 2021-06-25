// Se crean dos Let con sus respectivos valores
let num1 = prompt("Ingrese el primer número");
let num2 = prompt("Ingrese el segundo número");

// Se realizan las operaciones matematicas y el resultado se guarda en una nueva
sum = parseInt(num1)+parseInt(num2);
subtraction = parseInt(num1)-parseInt(num2);
multiplication = parseInt(num1)*parseInt(num2);
division = parseInt(num1)/parseInt(num2);
modulo = parseInt(num1)%parseInt(num2);

// Se Imprime el resultado 
document.write(`La suma de ${num1} + ${num2} = ${sum} <br>`);
document.write(`La resta de ${num1} - ${num2} = ${subtraction} <br>`);
document.write(`La multiplicación de ${num1} x ${num2} = ${multiplication} <br>`);
document.write(`La división de ${num1} / ${num2} = ${division} <br>`);
document.write(`El modúlo de ${num1} % ${num2} = ${modulo} <br>`);