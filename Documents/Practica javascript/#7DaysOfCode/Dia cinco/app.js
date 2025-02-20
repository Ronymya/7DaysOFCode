function listaDeCompras() {
    let lista = {
        frutas: [],
        lacteos: [],
        congelados: [],
        dulces: [],
        otros: []
    };

    while (true) {
        let respuesta = prompt("¿Deseas agregar un alimento a tu lista de compras? (si/no)").toLowerCase();
        if (respuesta !== "si") break;

        let alimento = prompt("¿Qué alimento deseas agregar?");
        let categoria = prompt("¿En qué categoría se encaja? (frutas, lácteos, congelados, dulces, otros)").toLowerCase();
        
        if (lista[categoria]) {
            lista[categoria].push(alimento);
        } else {
            lista.otros.push(alimento);
        }
    }

    alert("Lista de compras:");
    for (let categoria in lista) {
        if (lista[categoria].length > 0) {
            alert(`${categoria}: ${lista[categoria].join(", ")}`);
        }
    }
}

listaDeCompras();
