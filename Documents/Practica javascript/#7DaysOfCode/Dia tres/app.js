function startGame() {
    let area = prompt("¿Quieres seguir hacia el área de Front-End o Back-End?").toLowerCase();
    let tecnologia = "";
    
    if (area === "front-end") {
        tecnologia = prompt("¿Quieres aprender React o Vue?").toLowerCase();
        if (tecnologia === "react" || tecnologia === "vue") {
            alert(`Has elegido especializarte en ${tecnologia} en el área de ${area}.`);
        } else {
            alert("Opción no válida, fin del juego.");
            return;
        }
    } else if (area === "back-end") {
        tecnologia = prompt("¿Quieres aprender C# o Java?").toLowerCase();
        if (tecnologia === "c#" || tecnologia === "java") {
            alert(`Has elegido especializarte en ${tecnologia} en el área de ${area}.`);
        } else {
            alert("Opción no válida, fin del juego.");
            return;
        }
    } else {
        alert("Opción no válida, fin del juego.");
        return;
    }
    
    let camino = prompt("¿Quieres seguir especializándote en esta área o convertirte en Fullstack?").toLowerCase();
    if (camino === "especializarme") {
        alert(`¡Genial! Seguirás perfeccionándote en ${tecnologia}.`);
    } else if (camino === "fullstack") {
        alert("¡Felicidades! Estás en camino de convertirte en un desarrollador Fullstack.");
    } else {
        alert("Opción no válida, fin del juego.");
        return;
    }
    
    let aprenderMas = "ok";
    while (aprenderMas === "ok") {
        let nuevaTecnologia = prompt("¿Qué otra tecnología te gustaría aprender?");
        alert(`¡${nuevaTecnologia} es una gran elección para mejorar tus habilidades!`);
        aprenderMas = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Responde 'ok' para continuar o cualquier otra cosa para salir.").toLowerCase();
    }
    
    alert("¡Gracias por jugar y mucho éxito en tu aprendizaje!");
}

startGame();
