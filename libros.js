let inventarioLibros = [];

const registrarLibro = (titulo, autor, estado) => {
    const nuevoLibro = {
        titulo: titulo,
        autor: autor,
        estado: estado.toLowerCase()
    };
    
    inventarioLibros.push(nuevoLibro);
    console.log(`Libro "${titulo}" registrado con éxito.`);
};

const prestarLibro = (titulo) => {
    const libro = inventarioLibros.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());

    if (!libro) {
        console.error("Error: El libro no existe en el inventario.");
    } else if (libro.estado === "prestado") {
        console.warn(`El libro "${libro.titulo}" ya está prestado actualmente.`);
    } else {
        libro.estado = "prestado";
        console.log(`Has pedido prestado: "${libro.titulo}".`);
    }
};

const devolverLibro = (titulo) => {
    const libro = inventarioLibros.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());

    if (!libro) {
        console.error("Error: Ese libro no pertenece a nuestra biblioteca.");
    } else {
        libro.estado = "disponible";
        console.log(`Gracias por devolver: "${libro.titulo}". Ahora está disponible.`);
    }
};

let ejecutar = true;

while (ejecutar) {
    const seleccion = prompt("Menú Biblioteca: \n1. Registrar \n2. Prestar \n3. Devolver \n4. Ver Inventario\n5. Salir");

    switch (seleccion) {
        case "1":
            const t = prompt("Título:");
            const a = prompt("Autor:");
            const e = prompt("Estado (disponible/prestado):");
            registrarLibro(t, a, e);
            break;

        case "2":
            const tituloPrestar = prompt("¿Qué libro deseas llevarte?");
            prestarLibro(tituloPrestar);
            break;

        case "3":
            const tituloDevolver = prompt("¿Qué libro vas a devolver?");
            devolverLibro(tituloDevolver);
            break;

        case "4":
            if (inventarioLibros.length === 0) {
                console.log("Inventario vacío.");
            } else {
                console.log(JSON.stringify(inventarioLibros, null, 2));
            }
            break;

        case "5":
            ejecutar = false;
            console.log("Cerrando sistema...");
            break;

        default:
            alert("Opción no válida.");
    }
} 