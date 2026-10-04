//1. Cambiar edad de Luke

const jedi = {nombre: "Luke Skywalker", edad: 19};

jedi.edad = 72;

// 2. Mostrar mensaje desde variables (no la he creado como objeto porque el enunciado decía tres variables)

const nombre = "Leia";
const apellido = "Organa";
const edad = 20;

console.log("Soy "+nombre+" "+apellido+", tengo "+edad+" años y soy una princesa de Alderaan.")

// 3. Coste sable de "luz"

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

const precioTotal = sable1.precio + sable2.precio;

console.log("=== Carrito ===");
console.log("Producto: "+sable1.nombre+" -> Precio: "+sable1.precio+" ₡")
console.log("Producto: "+sable2.nombre+" -> Precio: "+sable2.precio+" ₡")
console.log("TOTAL: "+precioTotal+" ₡.")

// 4. Actualizar precio naves

let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = precioBaseGlobal + nave1.precioBase
nave2.precioFinal = precioBaseGlobal + nave2.precioBase

console.log("Nave: "+nave1.nombre+" -> Precio: "+nave1.precioFinal+" ₡")
console.log("Nave: "+nave2.nombre+" -> Precio: "+nave2.precioFinal+" ₡")

