/*6. Análisis de ventas con destructuración profunda
Dado este arreglo:
const ventas = [
{ producto: "teclado", detalles: { precio: 50, unidades: 3 } },
{ producto: "mouse", detalles: { precio: 20, unidades: 5 } }
];
Crea una función que emplee destructuración anidada para obtener precio y unidades del
primer producto, y retorne el total vendido (precio × unidades).*/

// Arreglo de ventas con objetos anidados
const ventas = [
  { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
  { producto: "mouse", detalles: { precio: 20, unidades: 5 } }
];

// Calcula el total vendido del primer producto usando destructuración anidada
function calcularTotalPrimerProducto(ventas) {
  // Extrae precio y unidades del primer elemento mediante destructuración anidada
  const [{ detalles: { precio, unidades } }] = ventas;
  return precio * unidades;
}

// Total vendido del primer producto (50 × 3 = 150)
const total = calcularTotalPrimerProducto(ventas);
console.log(total); // 150