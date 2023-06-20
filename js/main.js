let nombre = ingresarNombre();
console.log(nombre);

function ingresarNombre (){
    let nombrePersona;
    nombrePersona = prompt("Ingrese su nombre");
    console.log(nombrePersona.length);
    while (nombrePersona.length==0){
        alert("Es necesario ingresar un nombre");
        nombrePersona = prompt("Ingrese su nombre");
    }
    return nombrePersona;
}


function productoTienda(totalProducto, costo, cantidad) {
    return totalProducto + costo * cantidad;
  }
  
  const productos = [
    { nombre: " 3 Vidas", precio: 650 },
    { nombre: " 2 Posiones para la fuerza", precio: 530 },
    { nombre: "La Espada Neutronina", precio: 2400 },
    { nombre: "Carambolos", precio: 400 },
    { nombre: "Caliz de fuego", precio: 1300 },
  ];
  
  let total = 0;
  let opcion;
  let iniciar;
  
  alert("Bienvenido a Equalia. Por favor elija un producto:");
  
  do {
    // Mostrar las opciones de productos
    let opciones = "";
    for (let i = 0; i < productos.length; i++) {
      opciones += `${i + 1}. ${productos[i].nombre}\n`;
    }
    opcion = parseInt(prompt(opciones));
  
    if (opcion >= 1 && opcion <= productos.length) {
      const producto = productos[opcion - 1];
      const cantidadProducto = parseInt(
        prompt(`El costo de ${producto.nombre} es de $${producto.precio}. Por favor ingrese la cantidad que desea comprar.`)
      );
      total = productoTienda(total, producto.precio, cantidadProducto);
      alert(`Ha gastado $${total} hasta ahora.`);
    } else {
      alert("Ingrese una opción válida, por favor.");
    }
  
    iniciar = prompt("¿Desea continuar? si/no");
  } while (iniciar.toLowerCase() !== "no");
  
  alert(`El total de su compra es de $${total}. Muchas gracias por su compra.`);