function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por 0";
    }
    return a / b;
}

function calculadora() {
    let continuar = true;

    while (continuar) {
        let opcion = prompt(
            "Elige una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir"
        );

        if (opcion === "5") {
            alert("Hasta la próxima");
            continuar = false;
            break;
        }

        let num1 = parseFloat(prompt("Ingresa el primer número:"));
        let num2 = parseFloat(prompt("Ingresa el segundo número:"));
        let resultado;

        switch (opcion) {
            case "1":
                resultado = sumar(num1, num2);
                break;
            case "2":
                resultado = restar(num1, num2);
                break;
            case "3":
                resultado = multiplicar(num1, num2);
                break;
            case "4":
                resultado = dividir(num1, num2);
                break;
            default:
                alert("Opción no válida");
                continue;
        }

        alert(`El resultado es: ${resultado}`);
    }
}

calculadora();
