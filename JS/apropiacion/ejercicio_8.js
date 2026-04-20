/*8. Fusión de colecciones y validación final
Crea una función fusionarColecciones(lista1, lista2) que:
• Use spread para fusionar las dos listas sin mutarlas.
• Valide dentro de un try...catch que ambas listas sean arreglos.
• Si no lo son, lanza un error personalizado.
• Retorna la colección final.*/

// Fusiona dos arreglos en uno nuevo sin mutar los originales
function fusionarColecciones(lista1, lista2) {
  try {
    // Verificamos que ambos parámetros sean arreglos
    if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
      throw new Error("Ambos parámetros deben ser arreglos");
    }

    // Fusionamos las dos listas con spread sin tocar los originales
    const fusion = [...lista1, ...lista2];

    return fusion;

  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Caso válido → fusiona los dos arreglos
console.log(fusionarColecciones([1, 2, 3], [4, 5, 6]));

// Caso inválido → captura el error porque el segundo no es arreglo
console.log(fusionarColecciones([1, 2, 3], "hola"));