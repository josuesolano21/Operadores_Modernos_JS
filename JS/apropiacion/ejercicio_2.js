/*2. Control de inventario con inmutabilidad y spread
Partiendo del arreglo inicial:
const inventario = ["cámara", "trípode", "micrófono"];
Crea una función agregarInventario(lista, nuevoItem) que devuelva una nueva lista sin
modificar la original y que registre un mensaje indicando cuántos ítems tiene ahora el
inventario.*/
const inventario = ["cámara", "trípode", "micrófono"];

const agregarInventario = (lista, nuevoItem) => {
  const nuevaLista = [...lista, nuevoItem];
  console.log(`El inventario ahora tiene ${nuevaLista.length} ítems.`);
  return nuevaLista;
};

// Prueba
const nuevoInventario = agregarInventario(inventario, "lente");

console.log("Original:", inventario); // Sigue siendo ["cámara", "trípode", "micrófono"]
console.log("Nuevo:", nuevoInventario);