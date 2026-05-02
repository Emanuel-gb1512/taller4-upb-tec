let inventarioLibros = [];

const registrarLibro = (titulo, autor, estado) => {
    const nuevoLibro = {
        titulo: titulo,
        autor: autor,
        estado: estado
    };
    
    inventarioLibros.push(nuevoLibro);

    const datosJSON = JSON.stringify(inventarioLibros, null, 2);

    console.log("Libro registrado.");
    console.log("--- Inventario en formato JSON ---");
    console.log(datosJSON);
};

let ejecutar = true;

while (ejecutar) {
    const seleccion = prompt("Comandos: \n1. Registrar \n2. Ver JSON \n3. Salir");

    if (seleccion === "1") {
        const t = prompt("Título:");
        const a = prompt("Autor:");
        const e = prompt("Estado (disponible/prestado):");
        
        registrarLibro(t, a, e);

    } else if (seleccion === "2") {
        if (inventarioLibros.length === 0) {
            console.log("El inventario está vacío.");
        } else {
            const listadoJSON = JSON.stringify(inventarioLibros, null, 2);
            console.log(listadoJSON);
        }

    } else if (seleccion === "3") {
        ejecutar = false;
        console.log("Saliendo de registrar libros.");
    } else {
        alert("Comando no reconocido.");
    }
} 