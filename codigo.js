let funcionalidad = parseInt(prompt('Bienvenido a DevCoffe \n¿Qué deseas comprar? \n 1.- Bebida Caliente  \n 2.- Bebida Fria'));

while (funcionalidad !== 0) {
    switch (funcionalidad) {
        case 1:
            let bebidaCaliente = prompt('Buena Elección!\nIngresa qué deseas comprar\nAmericano \nCapuchino\nMocha \n Latte');
            if (bebidaCaliente !== '') {
                buscarProducto(bebidaCaliente); // Usar bebidaCaliente en lugar de nombre
            } else {
                alert('No ingresaste ningún producto');
            }
            break;
        case 2:
            let bebidaFria = prompt('Buena Elección!\nIngresa qué deseas comprar\nFrapuchino\nCapuchino Helado\nHelado Shaken \nMango Dragonfruit ');
            if (bebidaFria !== '') {
                buscarProducto(bebidaFria); // Usar bebidaFria en lugar de nombre
            } else {
                alert('No ingresaste ningún producto');
            }
            break;
        default:
            alert("Código inválido");
    }

    funcionalidad = parseInt(prompt('Bienvenido a DevCoffe \n¿Qué deseas comprar? \n 1.- Bebida Caliente  \n 2.- Bebida Fria'));
}

function filtrarPorTamaño(tamano) {
    // Implementar lógica para filtrar productos por tamaño
}

function buscarProducto(nomProducto) {
    let productoEncontrado = productos.find(producto => producto.nombre.toLowerCase().includes(nomProducto.toLowerCase()));

    if (productoEncontrado !== undefined) {
        alert(`Producto encontrado:\nNombre: ${productoEncontrado.nombre}\nTamaño: ${productoEncontrado.tamano}\nPrecio: ${productoEncontrado.precio}`);
    } else {
        console.log('Producto no encontrado');
    }
}
