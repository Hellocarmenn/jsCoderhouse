let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

console.table(productos);
let carrito = [];

const contenedorProds = document.getElementById('products');
const tablaBody = document.getElementById('tablabody');
const botonFinalizar = document.getElementById('finalizarBtn');
const botonVaciar = document.getElementById('vaciarBtn');


function renderizarProductos(listaProds) {
    for (const prod of listaProds) {
        contenedorProds.innerHTML += `

        <div class="products-container">
        <div class="box">
          <img src=${prod.foto} alt="" />
          <h3>Nombre: ${prod.nombre}</h3>
          <div class="content">
            <span>$${prod.precio}</span>
            <a href="#"><button class="btn btn-primary compra" id=${prod.id}>Agregar al carrito</button>
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
        title: "Felicitaciones!",
        text: `Agregaste ${producto.nombre} al carro 🛒`,
        imageUrl: producto.foto,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: producto.nombre,
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
    let totalAcumulado = carrito.reduce((acum, prod)=> acum + prod.precio,0);
    document.getElementById('total').innerText = 'Total a pagar $: '+totalAcumulado;
}


//evento submit del formulario
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', validar);

function validar(ev) {
    if ((campoNombre.value == '') || (campoEmail.value == '')) {
        ev.preventDefault();
        alert('Ingrese nombre o email faltante 🚨');
    }
}

//evento para finalizar la compra
botonFinalizar.onclick=()=>{
    Toastify({
        text: ahora.toLocaleString(DateTime.DATE_SHORT)+' - Gracias por tu compra! Recibirás el pedido en 48hs',
        duration: 5000,
        gravity:'bottom',
        position:'left',
        close: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
    }).showToast();

    vaciarCarro();
}

function vaciarCarro(){
    carrito=[];
    tablaBody.innerHTML='';
    document.getElementById('total').innerText = 'Total a pagar $: ';
}

//vaciar carro
botonVaciar.onclick=()=>{
    vaciarCarro();
}