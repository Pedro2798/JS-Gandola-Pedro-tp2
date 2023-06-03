console.log("HOLA")

alert("¡Bienvenidos a Imagen Amoblamientos!")

let tipoDePlacard = Number(prompt("Selecione el tipo de placard, hay opción 1 o 2:\n 1 Placard con Frente\n 2 Placard con puerta de abrir \n 3 Interior de Placard solo."))

let anchoDePlacard = Number(prompt("Por favor ingrese el ANCHO total del Placard deseado. Trabajamos hasta 2200mm."))

if (anchoDePlacard >= 1 && anchoDePlacard <= 2200){
    alert("El ancho indicado es "+ anchoDePlacard)
}else{
    while (anchoDePlacard=isNaN("") || anchoDePlacard > 2200 || anchoDePlacard < 0 ) {
        anchoDePlacard= Number(prompt("El número ingresado no es válido. Por favor ingrese solo números o un ancho total dentro de los permitidos"))
    }
}

let altoDePlacard = Number(prompt("Por favor ingrese el ALTO total del Placard deseado. Trabajamos hasta 2650mm."))

if (altoDePlacard >= 1 && altoDePlacard <= 2650){
    alert("El ancho indicado es "+ altoDePlacard)
}else{
    while (altoDePlacard=isNaN("") || altoDePlacard > 2650 || altoDePlacard < 0 ) {
        altoDePlacard= Number(prompt("El número ingresado no es válido. Por favor ingrese solo números o un ancho total dentro de los permitidos"))
    }
}

alert("Todos nuestros placards se distribuyen de la misma manera. Cuentan con dos cajones, sector para colgar y estantes.")


let precioFrenteDePlacard = 0

if(tipoDePlacard == 1){
    if(anchoDePlacard <= 1200){
        precioFrenteDePlacard = 50000
        alert("El valor del frente de su placard es $100.000-")
    }else if (anchoDePlacard > 1201 && anchoDePlacard <= 2650){
        precioFrenteDePlacard = 100000
        alert("El valor del frente de su placard es $150.000-")
    }
} else if(tipoDePlacard == 2){
    if(anchoDePlacard <= 1200){
        precioFrenteDePlacard = 50000
        alert("El valor del frente de su placard es $50.000-")
    }else if (anchoDePlacard > 1201 && anchoDePlacard <= 2650){
        precioFrenteDePlacard = 100000
        alert("El valor del frente de su placard es $100.000-")
    }
}else{
    precioFrenteDePlacard = 0
    alert("Su Placard no lleva frente.")
}

