let usuarios = [];

function iniciarPrograma() {
    let continuar = true;

    while (continuar) {
        let nombre = prompt("--- REGISTRO DE USUARIO ---\nIngrese el nombre:");
        let correo = prompt("Ingrese el correo electrónico:");

        if (nombre && correo) {
            usuarios.push({
                nombre: nombre.trim(),
                correo: correo.trim().toLowerCase()
            });
            console.log(" Usuario guardado temporalmente.");
        } else {
            alert(" No se guardó el registro porque faltan datos.");
        }
        continuar = confirm("¿Desea registrar a otro usuario?");
    }
    imprimirEnJSON();
}

function imprimirEnJSON() {
    console.log("\n--- REPORTE FINAL DE USUARIOS (FORMATO JSON) ---");

    if (usuarios.length === 0) {
        console.log("[] (No hay datos registrados)");
    } else {
        const jsonResultado = JSON.stringify(usuarios, null, 2);
        console.log(jsonResultado);
    }

    console.log("\nEl programa ha finalizado.");
}
iniciarPrograma();

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
