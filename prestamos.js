const listarTodos = () => {
    if (inventarioLibros.length === 0) {
        console.log("Inventario vacío.");
    } else {
        inventarioLibros.forEach(l => {
            console.log(`Título: ${l.titulo}, Autor: ${l.autor}, Estado: ${l.estado}`);
        });
    }
};

const listarDisponibles = () => {
    const disponibles = inventarioLibros.filter(l => l.estado === "disponible");
    if (disponibles.length === 0) {
        console.log("No hay libros disponibles.");
    } else {
        disponibles.forEach(l => {
            console.log(`Título: ${l.titulo}, Autor: ${l.autor}, Estado: ${l.estado}`);
        });
    }
};

const listarPorAutor = (autor) => {
    const librosAutor = inventarioLibros.filter(l => l.autor.toLowerCase() === autor.toLowerCase());
    if (librosAutor.length === 0) {
        console.log(`No se encontraron libros del autor: ${autor}`);
    } else {
        librosAutor.forEach(l => {
            console.log(`Título: ${l.titulo}, Autor: ${l.autor}, Estado: ${l.estado}`);
        });
    }
};

let ejecutarListados = true;

while (ejecutarListados) {
    const opcion = prompt("Menú Listados: \n1. Listar Todos \n2. Listar Disponibles \n3. Listar por Autor \n4. Salir");

    switch (opcion) {
        case "1":
            listarTodos();
            break;

        case "2":
            listarDisponibles();
            break;

        case "3":
            const autorBuscar = prompt("¿Qué autor deseas consultar?");
            listarPorAutor(autorBuscar);
            break;

        case "4":
            ejecutarListados = false;
            console.log("Cerrando menú de listados...");
            break;

        default:
            alert("Opción no válida en el menú de listados.");
    }
}
