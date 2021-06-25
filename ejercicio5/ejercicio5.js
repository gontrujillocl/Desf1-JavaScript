// Se crean 5 Let con sus respectivos valores
let num1 = prompt("Ingresa el primer número");
let num2 = prompt("Ingresa el segundo número");
let num3 = prompt("Ingresa el tercer número");
let num4 = prompt("Ingresa el cuarto número");
let num5 = prompt("Ingresa el quinto número");

//Se suman los cinco números y luego se promedia
result = parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5);
average = result / 5;

//Se imprime resultado de suma y se divide promedio
document.write("La suma de los numeros ingreados es: " + result + "<br>");
document.write("El promedio de estos cinco número es:  " + average + "");