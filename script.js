function programaImagenAmoblamientos() {
    let productos = [
      { id: 1, nombre: "Placard Blanco", precio: 5000, rutaImagen: "../img/placard-1.jpg", descripcion: "Placard standard. 18mm de espesor, solo en blanco." },
      { id: 2, nombre: "Placard Color", precio: 5000, rutaImagen: "../img/placards-2-negro.jpg", descripcion: "Placard con cualquier color a elecciónm. 18mm de espesor." },
      { id: 3, nombre: "Cocina Standard", precio: 10000, rutaImagen: "../img/cocina-new-1", descripcion: "Cocinas standard, pequeñas con modulación básica." },
      { id: 4, nombre: "Cocina New Age", precio: 15000, rutaImagen: "../img/cocina-new-2.jpg", descripcion: "Cocinas modernas, enfocadas en el diseño." },
      { id: 5, nombre: "Cocina Clasica", precio: 15000, rutaImagen: "../img/cocina-clasico-1.jpg", descripcion: "Cocinas antiguas, enfoque en el ambiente y sus materiales." },
    ]
    
    let carritoJSON = JSON.parse(localStorage.getItem("carrito"))
    let carrito = carritoJSON ? carritoJSON : []
    
    let contenedor = document.getElementById("contenedor")
    renderizar(productos, contenedor, carrito)
    renderizarCarrito(carrito)
  
    let botonFinalizarCompra = document.getElementById("finalizarCompra")
    botonFinalizarCompra.addEventListener("click", () => finalizarCompra(carrito))
  }
  
  programaImagenAmoblamientos()
  
  function finalizarCompra(carrito) {
    let carritoFisico = document.getElementById("carrito")
    carritoFisico.innerHTML = ""
    localStorage.removeItem("carrito")
    carrito = []
    renderizarCarrito([])
  }
  
  
  function renderizar(arrayDeElementos, contenedor, carrito) {
  
    contenedor.innerHTML = ""
  
    arrayDeElementos.forEach(({ nombre, rutaImagen, id, descripcion }) => {
      let tarjetaProducto = document.createElement("div")
  
      tarjetaProducto.classList.add("tarjetaProducto")
      tarjetaProducto.innerHTML = `
            <h2>${nombre}</h2>
            <div class=imagen style="background-image: url(./images/${rutaImagen})"></div>
            <p>${descripcion}</p>
            <button id=${id}>Solicitar Cotizacion</button> 
      `
      contenedor.appendChild(tarjetaProducto)
      let botonAgregarAlCarrito = document.getElementById(id)
      botonAgregarAlCarrito.addEventListener("click", () => agregarAlCarrito(arrayDeElementos, id, carrito, ))
      botonAgregarAlCarrito.addEventListener("click", () => lanzarAgregado())
    })
  }

  function lanzarAgregado() {
    Toastify({
      text: "Solicitud Agregada",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast()

  }

  function agregarAlCarrito(arrayDeElementos, id, carrito) {
    let productoBuscado = arrayDeElementos.find(producto => producto.id === id)
    let posicionProductoEnCarrito = carrito.findIndex(producto => producto.id === id)
  
    if (posicionProductoEnCarrito !== -1) {
      carrito[posicionProductoEnCarrito].unidades++
      carrito[posicionProductoEnCarrito].subtotal = carrito[posicionProductoEnCarrito].unidades * carrito[posicionProductoEnCarrito].precioUnitario
    } else {
      carrito.push({
        id: productoBuscado.id,
        nombre: productoBuscado.nombre,
        precioUnitario: productoBuscado.precio,
        unidades: 1,
      })
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    renderizarCarrito(carrito)
  }
  
  function renderizarCarrito(carritoJSON) {
    let carritoFisico = document.getElementById("carrito")
    carritoFisico.innerHTML = `
      <div id=encabezadoCarrito class="encabezado-carrito">
        <p>Nombre</p>
        <p>Precio</p> 
      </div>
    `
  
    carritoJSON.forEach(({ nombre, precioUnitario}) => {
      let elementoDelCarrito = document.createElement("div")
      elementoDelCarrito.classList.add("elementoDelCarrito")
      elementoDelCarrito.innerHTML = `
        <p>${nombre}</p>
        <p>${precioUnitario}</p>
      `
      carritoFisico.appendChild(elementoDelCarrito)
    })
  }
  
  let botonCarrito = document.getElementById("botonCarrito")
  botonCarrito.addEventListener("click", mostrarOcultar)
  
  function mostrarOcultar() {
    let padreContenedor = document.getElementById("productos")
    let carrito = document.getElementById("contenedorCarrito")
    padreContenedor.classList.toggle("oculto")
    carrito.classList.toggle("oculto")
  }
  
  
  
  const container = document.getElementById("cotizacionRucula")
  const urlLocal = "../db.json"

  const cotizar = (compra, venta) => {
    fetch(urlLocal)
      .then(response => response.json())
      .then(data => {
        const card = document.createElement("div")
        card.classList.add("cotizador")
        card.innerHTML = `<h2>Compra: ${data.compra}</h2><h2>Venta: ${data.venta}</h2>`
        container.appendChild(card) 
      })
    }    
          
cotizar("compra" , "venta")