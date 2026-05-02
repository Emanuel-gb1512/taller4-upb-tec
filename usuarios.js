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