console.log ("Hola mundo");

let name = "Rony";

console.log ("Hola " + name);

console.log ("el perimetro de un cuadrado de lado 5 es " + (5 * 4));
console.log ( "el area de un cuadrado de la do 5 es " + (5 * 5));

let lado = 18;

console.log ("el perimetro de un cuadrado de lado " + lado + " es " + (lado * 4));
console.log ("el area de un cuadra de lado " + lado + " es " + (lado * lado));

if (1 == 1) {
    console.log ("Hola mundo");
}

let edad = 16;

name = "Mayra";

console.log (name, edad);

let global = "Estoy en todo el codigo";

function mostrar () {
    let local ="solo existo aqui";
    console.log (local);
}

console.log(global);
// console.log(local); 

if (edad >= 18) {
    console.log ("Es mayor de edad");
} else {
    console.log ("Es menor de edad");
}

let nota = 92;

if (nota >= 90) {
    console.log ("Excelente");
} else if ( nota >= 70) {
    console.log ("Aprobado");
} else {
    console.log ("Reprobado");
}

let dia = "Martes";

switch (dia) {
    case "Lunes":
        console.log("Inicio de semana");
        break;
    case "Viernes":
        console.log("Fin de semana");
        break;
    case "Domingo":
        console.log("Día de descanso");
        break;
    default:
        console.log("Día normal");
}

let mensaje = edad >= 18 ? "mayor de edad" : "menor de edad";
console.log (mensaje);

let numero = 15;

if (numero >= 10 && numero <= 20) {
    console.log ("El numero esta entre 10 y 20");
}

for (let i = 1; i <= 5; i++) {
    console.log ("interacion numero: " + i);
}

for (let i = 1; i <= 10; i++) {
    console.log (i);
}

let contador = 3;

while (contador <= 15) {
    console.log (contador);
    contador++;
}

do {
    console.log ("el numero es: " + numero);
    numero++;
} while (numero < 5);

let frutas = ["🍎 Manzana", "🍌 Plátano", "🍇 Uva"];

for (let fruta of frutas) {
    console.log(fruta);
}

let palabra = "Hola";

for (let letra of palabra) {
    console.log(letra);
}

let persona = { nombre: "Ana", edad: 30, ciudad: "Madrid" };

for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}

for (let i = 10; i >= 1; i --) {
    console.log(i);
}

let numeros = [10, 20, 30];
numeros[1] = 25;

numeros.push (4);
numeros.unshift (0);

console.log(numeros);

frutas.forEach(num => console.log(num));

function sumar () {
    console.log(2+3);
}

sumar ();

function suma (a, b) {
    console.log(a + b);
}

suma (5, 3);
suma (10, 7);

function multiplicar (a, b) {
    return a * b;
}

let resultado = multiplicar (4, 5);
console.log (resultado);

let dividir = function (a, b) {
    return a / b;
}

console.log (dividir (10, 2));

function esPar (numero) {
    return numero % 2 === 0;
}

console.log (esPar (4));
console.log (esPar (7));

console.log( false == '0' );

console.log( null == undefined );

console.log( " \t\r\n" == 0 );

console.log( ' ' == 0 )

if (numero >0){
    console.log(numero);
}

