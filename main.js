/*LOCALSTORE */

/**Funcion para guardar el carrito en el almacenamiento local */
function guardarCarritoEnLocalStorage(){
    localStorage.setItem('carrito',JSON.stringify(carrito));
}

/*Funcion para cargar  el carrito desde el almacenamiento del local al cargar la pagina */


//esto es un fetch
async function fetchData(){
    try{
        const response = await fetch('./productos.json');
        const productos = await response.json();
        renderizarProductos(productos);
    }catch(error){
        console.error('Error al cargar los productos',error);
    }
}

let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
}

 let header = document.querySelector('header');
 window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow',window.scrollY > 0);
 });


//buscando en el local storage
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

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
                <div class="box" style="position:relative;padding:10px;display:flex;flex-direction:colum;justify-content:center;border-radius:0.5rem">
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


function agregarACarrito(producto) {
    carrito.push(producto);
    guardarCarritoEnLocalStorage();
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
    renderizarCarrito()
    //agregar calculo de total
    let totalAcumulado = carrito.reduce((acum, prod) => acum + prod.precio, 0);
    document.getElementById('total').innerText = 'Total a pagar $: ' + totalAcumulado;
}


function renderizarCarrito(){
    //se vacia para ingresar los productos
    tablaBody.innerHTML = "";
    carrito.forEach((producto)=>{
        tablaBody.innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
        `
    })
}
renderizarCarrito()
//evento para finalizar la compra
botonFinalizar.onclick = () => {
    if (carrito.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tu carrito está vacío, ¡agrega algunos productos primero!',
            confirmButtonColor: '#bc9667',
        });
    } else {
        Swal.fire({
            title: "Compra finalizada!",
            text: `Gracias por tu compra 🛒`,
            icon: 'success',
            confirmButtonColor: '#bc9667',
        });
        vaciarCarro();
    }
}


function vaciarCarro() {
    carrito = [];
    tablaBody.innerHTML = '';
    document.getElementById('total').innerText = 'Total a pagar $: ';
    guardarCarritoEnLocalStorage();

}

//vaciar carro
botonVaciar.onclick = () => {
    vaciarCarro();
}

// Llamar a la función para cargar los productos desde el archivo productos.js
fetchData();