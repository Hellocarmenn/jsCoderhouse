let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    search.classList.toggle('active');
}




 let header = document.querySelector('header');
 window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow',window.scrollY > 0);

 });

console.table(productos);
let carrito = [];

const contenedorProds = document.getElementById('products');
const tablaBody = document.getElementById('tablabody');
const botonFinalizar = document.getElementById('finalizarBtn');
const botonVaciar = document.getElementById('vaciarBtn');

//LUXON
const DateTime = luxon.DateTime;
const fechaImportante = DateTime.fromObject(
    { day: 22, hour: 12, month: 2, year: 2021 },
    { zone: 'America/Buenos_Aires', numberingSystem: 'beng' }
)

console.log(fechaImportante.toString());

const otraFecha = DateTime.fromISO("2017-05-15T08:30:00");
console.log(otraFecha.toString());

const ahora = DateTime.now();
const diasEnElMes = ahora.daysInMonth;
const diasParaFinDeMes = diasEnElMes - ahora.day;



function renderizarProductos(listaProds) {
    for (const prod of listaProds) {
        contenedorProds.innerHTML += `

        <div class="products-container">
        <div class="box">
          <img src=${prod.foto} alt="" />
          <h3>Nombre: ${prod.nombre}</h3>
          <div class="content">
            <span>$${prod.precio}</span>
            <button class="btn btn-primary compra" id=${prod.id}>Agregar al carrito</button>
            </a>
          </div>
        </div>
      </div>
        `
    }

    //eventos
    const botonesCompra = document.getElementsByClassName('compra');
    for (const boton of botonesCompra) {
        //opcion 1 - addEventListener()
        boton.addEventListener('click', () => {
            //buscar el objeto que tiene ese id
            const prodACarrito = listaProds.find(prod => prod.id == boton.id);
            console.log(prodACarrito);
            //cargar el producto al carrito de compras
            agregarACarrito(prodACarrito);
        })
    }
}

renderizarProductos(productos);

function agregarACarrito(producto) {
    carrito.push(producto);
    /* sweet alert */
    Swal.fire({
        title: "MUY BIEN!",
        text: `Agregaste ${producto.nombre} al carrito 🛒`,
        imageUrl: producto.foto,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: producto.nombre,
        confirmButtonColor: '#bc9667',
    });
    console.table(carrito);
    tablaBody.innerHTML += `
    <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
    </tr>
    `
    //agregar calculo de total
    let totalAcumulado = carrito.reduce((acum, prod) => acum + prod.precio, 0);
    document.getElementById('total').innerText = 'Total a pagar $: ' + totalAcumulado;
}

//evento para finalizar la compra
botonFinalizar.onclick = () => {
    Toastify({
        text: ahora.toLocaleString(DateTime.DATE_SHORT) + ' - Gracias por tu compra! Recibirás el pedido en 48hs',
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();

    vaciarCarro();
}

function vaciarCarro() {
    carrito = [];
    tablaBody.innerHTML = '';
    document.getElementById('total').innerText = 'Total a pagar $: ';
}

//vaciar carro
botonVaciar.onclick = () => {
    vaciarCarro();
}