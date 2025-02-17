function adivinaElNumero () {   
    let numeroSecreto = Math.floor(Math.random() * 11); 
    let intentos = 3;

    for (let i = 0; i < intentos; i++) {
        let intentoUsuario = prompt (`Intento ${i + 1}: Adivina el numero (entre 0 y 10):`);

        if (intentoUsuario === numeroSecreto) {
            alert("Felicidades! Has adivinado el numero.");
            return;
        } else {
            alert ("Incorrecto, intenta de nuevo.");
        }
    }

    alert(`Lo siento, pero no has adivinado el numero. El numero era ${numeroSecreto}.`);
}

adivinaElNumero();