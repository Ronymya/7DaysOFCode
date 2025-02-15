//Fundamento del ejercicio

// - ¿Cuál es tu nombre?
// - ¿Cuántos años tienes?
// - ¿Qué lenguaje de programación estás estudiando?

// A medida que se hagan las preguntas, la persona que esté usando el programa debe responder cada una de ellas.

// Al final, el sistema mostrará el mensaje:

// "Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"
// prompt 

//Solucion ejercicio

let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

alert("Hola " + nombre + ", tienes " + edad + " años y ya estás aprendiendo " + lenguaje + "!");

let respuesta = prompt(`Te gustaria estudiar ${lenguaje}? responde con el numero 1 para SI o con el numero 2 para NO.`);

if (respuesta == 1) {
    alert(`¡Muy bien! Sigue estudiando y tendrás mucho éxito.`);
} else if (respuesta == 2) {
    alert(`Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?`);
}
