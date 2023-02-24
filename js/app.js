alert("Ingrese el número de la opción de vino que desea llevar, \n para finalizar su compra ingrese 0")
let seleccionarProductos = +prompt( "1-Merlot $3000 2-Syrah $2000 3-Cabernet $5000 4-Malbec $6000 ")
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= +prompt("el producto seleccionado es Merlot, indique la cantidad")
            total += cantidad(seleccionarCantidad, 3000)
      break;
      case 2:
        seleccionarCantidad = +prompt("el producto seleccionado es Syrah, indique la cantidad")
        total += cantidad(seleccionarCantidad, 2000)
      break;
    case 3:
      seleccionarCantidad = +prompt("el producto seleccionado es Cabernet, indique la cantidad")
      total += cantidad(seleccionarCantidad, 5000)
    break;
    case 4:
      seleccionarCantidad = +prompt("el producto seleccionado es Malbec, indique la cantidad")
      total += cantidad(seleccionarCantidad, 6000)
    break;

    default:
      break;
  }
  seleccionarProductos = +prompt("1-Merlot $3000 2-Syrah $2000 3-Cabernet $5000 4-Malbec $6000 ")
}

alert("el total de la compra es de: " + total)


const envio = () => {
    if (total >= 10000) {
      alert("El envio es gratuito")
    }else{
      total += 1000
      alert("el costo de envio es de 1000, el total es: " + total)
    }
}

envio()

const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago: tarjeta o efectivo" )
  if (metodo == "tarjeta") {
    total *= 1.1
    alert("Con el interés le queda en: " + total);
  }else if ( metodo == "efectivo") {
    total -= 1000
    alert("tenes un descuento de 1000, el total es: " + total)
  }

  
}

metodoDePago()