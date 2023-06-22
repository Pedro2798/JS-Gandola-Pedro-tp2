console.log("HOLA")

alert("¡Bienvenidos a Imagen Amoblamientos!")

let placardFinal = {}

placardFinal.tipoDePlacard = Number(prompt("Selecione el tipo de placard, hay opción 1 o 2:\n 1 Placard con Frente\n 2 Placard con puerta de abrir \n 3 Interior de Placard solo"))

placardFinal.anchoDePlacard = Number(prompt("Por favor ingrese el ANCHO total del Placard deseado. Trabajamos hasta 2200mm."))

if ((placardFinal.anchoDePlacard) >= 1 && (placardFinal.anchoDePlacard) <= 2200){
    alert("El ancho indicado es "+ (placardFinal.anchoDePlacard))
}else{
    while (placardFinal.anchoDePlacard=isNaN("") || placardFinal.anchoDePlacard > 2200 || placardFinal.anchoDePlacard < 0 ) {
        anchoDePlacard= Number(prompt("El número ingresado no es válido. Por favor ingrese solo números o un ancho total dentro de los permitidos"))
    }
}

placardFinal.altoDePlacard = Number(prompt("Por favor ingrese el ALTO total del Placard deseado. Trabajamos hasta desde 1000 a 2650mm."))

if ((placardFinal.altoDePlacard) >= 1 && (placardFinal.altoDePlacard) <= 2650){
    alert("El ALTO indicado es "+ (placardFinal.altoDePlacard))
}else{
    while ((placardFinal.altoDePlacard)=isNaN("") || (placardFinal.altoDePlacard) > 2650 || (placardFinal.altoDePlacard) < 1000 ) {
        (placardFinal.altoDePlacard)= Number(prompt("El número ingresado no es válido. Por favor ingrese solo números o un ancho total dentro de los permitidos"))
    }
}

alert("Todos nuestros placards se distribuyen de la misma manera. Cuentan con dos cajones, sector para colgar y estantes sobre la cajonera.")


placardFinal.precioFrenteDePlacard = 0

if(placardFinal.tipoDePlacard == 1){
    if((placardFinal.anchoDePlacard) <= 1200){
        (placardFinal.precioFrenteDePlacard) = 50000
        alert("El valor del frente de su placard es $100.000-")
    }else if ((placardFinal.anchoDePlacard) > 1201 && (placardFinal.anchoDePlacard) <= 2650){
        (placardFinal.precioFrenteDePlacard) = 100000
        alert("El valor del frente de su placard es $150.000-")
    }
} else if(placardFinal.tipoDePlacard == 2){
    if((placardFinal.anchoDePlacard) <= 1200){
        (placardFinal.precioFrenteDePlacard) = 50000
        alert("El valor del frente de su placard es $50.000-")
    }else if ((placardFinal.anchoDePlacard) > 1201 && (placardFinal.anchoDePlacard) <= 2650){
        (placardFinal.precioFrenteDePlacard) = 100000
        alert("El valor del frente de su placard es $100.000-")
    }
}else{
    (placardFinal.precioFrenteDePlacard) = 0
    alert("Su Placard no lleva frente.")
}

placardFinal.precioInteriorPlacard = 0

if ((placardFinal.anchoDePlacard) <= 500 && (placardFinal.altoDePlacard) <= 1000){
    (placardFinal.precioInteriorPlacard)= 30000
    alert("El valor de su interior de placard es:"+ precioInteriorPlacard)
}else if (((placardFinal.anchoDePlacard) >= 501 && (placardFinal.anchoDePlacard) <= 1700) && (placardFinal.altoDePlacard) <= 2000){
    (placardFinal.precioInteriorPlacard)= 75000
    alert("El valor de su interior de placard es:"+ precioInteriorPlacard)
}else if(((placardFinal.anchoDePlacard) >= 1701 && (placardFinal.anchoDePlacard) <= 2200) && (placardFinal.altoDePlacard) <= 2650){
    (placardFinal.precioInteriorPlacard)= 100000
    alert("El valor de su interior de placard es:"+ (placardFinal.precioInteriorPlacard))
}

placardFinal.cajonesCierraSuave = prompt("Indique si quiere cajones cierra suave, solo pueden modificarse los dos que ya vienen incluidos\nIndique por Si o por No\nCada uno tiene un valor adicional de $10.000-")

let agregadoCierraSuave = {}


if ((placardFinal.cajonesCierraSuave) == "si"){
    (agregadoCierraSuave.precio)= 20000
    alert("El valor de sus cajones Cierra Suave es de "+ agregadoCierraSuave.precio)
}else if ((placardFinal.cajonesCierraSuave) == "no"){
    (agregadoCierraSuave.precio)= 0
    alert("Ha seleccionado continuar con nuestros cajones clásicos.")
}else {
    while ((placardFinal.cajonesCierraSuave) == isNan(" ") || (placardFinal.cajonesCierraSuave) != isNan("no") || (placardFinal.cajonesCierraSuave) != isNan("si")) {
        placardFinal.cajonesCierraSuave = prompt(prompt("El número ingresado no es válido. Por favor ingrese solo las opciones si o no"))
    }
}


placardFinal.Manijas = prompt("Indique si quiere agregar manijas cromadas, solo pueden modificarse los dos que ya vienen incluidos\nIndique por Si o por No\nCada uno tiene un valor adicional de $1.000-")

let Manijas = {}


if ((placardFinal.Manijas) == "si"){
    (Manijas.precio)= 2000
    alert("El valor de sus cajones Cierra Suave es de "+ Manijas.precio)
}else if ((placardFinal.Manijas) == "no"){
    (Manijas.precio)= 0
    alert("Ha seleccionado continuar con nuestros cajones clásicos.")
}else {
    while ((placardFinal.Manijas) == isNan("") || (placardFinal.Manijas) != isNan("no") || (placardFinal.Manijas) != isNan("si") ) {
        placardFinal.Manijas = prompt(prompt("El número ingresado no es válido. Por favor ingrese solo las opciones si o no"))
    }
}


const carrito = [];
carrito.push( {producto: "Interior de placard", precio: (placardFinal.precioInteriorPlacard)})
carrito.push( {producto: "Frente de placard", precio:  (placardFinal.precioFrenteDePlacard)})
carrito.push( {producto: "Agregado de cierra suave", precio: (agregadoCierraSuave.precio)})
carrito.push( {producto: "Agregado de manijas", precio: (Manijas.precio)})

console.log(carrito)

let mensaje = "1 Ver carrito\n2 Finalizar cotización y ver total"

let opcion

do{
    opcion = Number(prompt(mensaje))
    if (opcion == 1){
        listar(carrito)
    } else if (opcion == 2){
        let totalCarrito = carrito.reduce((acumulador, carrito) => acumulador + carrito.precio, 0)
        alert("La cotización final de su placard es de: " + totalCarrito)
    } else if (opcion == 3){


    }

}while (opcion !== 0)

function listar(carrito){
    let listado
    carrito.forEach(element => {
        listado = listado + element.producto + " " + element.precio + "\n"
    })
    alert(listado)
}


alert("Gracias por visitar nuestro cotizador online. Cualquier consulta comuníquese con Imagen Amoblamientos!") 