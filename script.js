let total = 0;
let descuento = 0.20;
let totalFinal = 0; // Definir totalFinal aquí

let codeProductos;
while (codeProductos !== 0) {
    codeProductos = parseInt(prompt("Bienvenido\nSeleccione el código del producto\n¡Recibe un descuento por cada $1000 de compra!\n1.-Matcha\n2.-Capuchino\n3.-Té Latte Caliente\n4.-Espresso Americano\n0.-Salir"));

    switch (codeProductos) {
        case 1:
            alert("Agregaste Matcha🍵");
            total += 150;
            break;
        case 2:
            alert("Agregaste Capuchino");
            total += 170;
            break;
        case 3:
            alert("Agregaste Té Latte Caliente");
            total += 190;
            break;
        case 4:
            alert("Agregaste Espresso Americano");
            total += 170;
            break;
        case 0:
            break;
        default:
            alert("Código inválido");
            break;
    }
    if (codeProductos === 0) { // Salir del bucle cuando el usuario elige salir
        break;
    }
}

// Llamar a la función pago antes de usar totalFinal
pago();

if (totalFinal != 0) {
    let metodoPago = parseInt(prompt('¿Cómo deseas pagar?\n1.-Efectivo\n2.-Tarjeta'));

    switch (metodoPago) {
        case 1:
        case 2:
            alert('Total a pagar $' + totalFinal);
            break;
        default:
            alert("Código inválido");
            break;
    }
}

function pago() {
    if (total >= 1000) {
        totalFinal = total - total*descuento;
    } else {
        totalFinal = total;
    }
}
