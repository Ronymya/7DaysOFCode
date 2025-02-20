function listaDeCompras() {
    let lista = {
        frutas: [],
        lacteos: [],
        congelados: [],
        dulces: [],
        otros: []
    };

    while (true) {
        let respuesta = prompt("¿Deseas agregar o eliminar un alimento de tu lista de compras? (agregar/eliminar/no)").toLowerCase();
        if (respuesta === "no") break;
        
        if (respuesta === "eliminar" && Object.values(lista).some(arr => arr.length > 0)) {
            console.log("Lista actual:");
            for (let categoria in lista) {
                if (lista[categoria].length > 0) {
                    console.log(`${categoria}: ${lista[categoria].join(", ")}`);
                }
            }
            let alimentoAEliminar = prompt("¿Qué alimento deseas eliminar?");
            let eliminado = false;
            
            for (let categoria in lista) {
                let index = lista[categoria].indexOf(alimentoAEliminar);
                if (index !== -1) {
                    lista[categoria].splice(index, 1);
                    eliminado = true;
                    alert(`${alimentoAEliminar} ha sido eliminado de la lista.`);
                    break;
                }
            }
            if (!eliminado) {
                alert("¡No fue posible encontrar el elemento en la lista!");
            }
        } else if (respuesta === "agregar") {
            let alimento = prompt("¿Qué alimento deseas agregar?");
            let categoria = prompt("¿En qué categoría se encaja? (frutas, lácteos, congelados, dulces, otros)").toLowerCase();
            
            if (lista[categoria]) {
                lista[categoria].push(alimento);
            } else {
                lista.otros.push(alimento);
            }
        } else {
            alert("Opción no válida o no hay elementos en la lista para eliminar.");
        }
    }

    alert("Lista final de compras:");
    for (let categoria in lista) {
        if (lista[categoria].length > 0) {
            alert(`${categoria}: ${lista[categoria].join(", ")}`);
        }
    }
}

listaDeCompras();
