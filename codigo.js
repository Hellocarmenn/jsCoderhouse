let opcion = parseInt(prompt('Ingrese la opción deseada \n 1.- Comprar \n 2.- Mi Carrito'));
while (opcion !== 0) {
    if (opcion === 1) {
        let funcionalidad = parseInt(prompt('Ingrese qué desea comprar\n 1.- Cafe \n 2.- Capuchino \n 3.- Matcha'));
        switch (funcionalidad) {
            case 1:
                let nombre = prompt('Ingresa que desea comprar ');
                if (nombre != '') {
                    buscarProducto(nombre);
                } else {
                    alert('No ingresaste ninguna producto')
                }
                break;
            case 2:
                // Lógica para comprar capuchino
               
                break;
            case 3:
                // Lógica para comprar matcha
             
                break;
            default:
                alert("Código inválido");
        }
    } else if (opcion === 2) {
        // Lógica para mostrar el carrito
    } else {
        alert("Opción inválida");
        break;
    }
    opcion = parseInt(prompt('Ingrese la opción deseada \n 1.- Comprar \n 2.- Mi Carrito'));
}

function filtrarPorTamaño(tamano) {
    // Implementar lógica para filtrar productos por tamaño
}

function buscarProducto(nomProducto) {
    let producEncontrado = productos.find(producto => producto.nombre.toLowerCase().includes(nomProducto.toLowerCase()));

    if (producEncontrado !== undefined) {
        alert(`Producto encontrado: \n  Nombre: ${producEncontrado.nombre} \n Tamaño: ${producEncontrado.tamano} \n Precio: ${producEncontrado.precio}`);
    } else {
        console.log('Producto no encontrado');
    }
}

