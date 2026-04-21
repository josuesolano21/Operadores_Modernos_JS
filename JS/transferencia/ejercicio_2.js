/*2. Fusión de catálogos digitales
Requerimiento:
Tienes dos catálogos:
const catalogoA = [
{ id: 1, nombre: "Curso JavaScript", precio: 40 },
{ id: 2, nombre: "Curso HTML", precio: 35 }
];
const catalogoB = [
{ id: 3, nombre: "Curso CSS", precio: 30 }
];

Crea una función fusionarCatalogos(a, b) que:

1. Use try...catch para validar que ambos parámetros sean arreglos.
2. Utilice spread para fusionarlos sin modificar los originales.
3. Retorne un nuevo catálogo ordenado por precio ascendente.

Resultado esperado:
Una nueva colección combinada, ordenada e inmutable. Si un parámetro no es un arreglo,
debe mostrarse un error comprensible.
*/

const catA = [
  { id: 1, nombre: "Curso JavaScript", precio: 40000 },
  { id: 2, nombre: "Curso HTML",       precio: 35000 }
];

const catB = [
  { id: 3, nombre: "Curso CSS", precio: 30000 }
];

function fusionarCatalogos(a, b) {
  try {
    // validamos que ambos parámetros sean arreglos
    if (!Array.isArray(a) || !Array.isArray(b)) {
      throw new Error("Ambos parámetros deben ser arreglos");
    }

    // fusionamos sin mutar los originales
    const fusion = [...a, ...b];

    // retornamos ordenado por precio ascendente sin mutar fusion
    return [...fusion].sort((x, y) => x.precio - y.precio);

  } catch (error) {
    return { error: error.message };
  }
}

console.log(fusionarCatalogos(catA, catB)); // caso válido
console.log(fusionarCatalogos(catA, "hola")); // caso inválido

export { catA, catB, fusionarCatalogos };

