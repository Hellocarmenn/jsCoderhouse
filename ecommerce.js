let codeProductos = parseInt(prompt("Bienvienido\nSeleccione el codigo del producto\n1.-Matcha\n2.-Capuchino\n3.-Té Latte Caliente\n4.-Espresso Americano"))
let total= 0;
switch (codeProductos) {
    case 1:
        alert("Agregaste Matcha ");
        total += 68;
        break;

    case 2:
        alert("Agregaste Capuchino");
        total += 78;
        break;
    case 3:
        alert("Agregaste Té Latte Caliente");
        total += 78;
        break;
    case 4:
        alert("Agregaste Espresso Americano");
        total += 70;
        break;
    default :
    alert("Codigo invalido");
    break
}

function calcularTotal{


}