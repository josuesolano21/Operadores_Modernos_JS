/*7. Evaluación de datos con try...catch + spread
Escribe una función evaluar(...valores) que:

• Reciba varios números mediante rest.
• Use un try...catch para verificar que todos sean numéricos.
• Si encuentra un valor no numérico, captura el error y muestra un mensaje adecuado.
• Si todo es válido, crea una nueva lista (sin mutar la original) y retorna el promedio.*/

// Recibe cualquier cantidad de números gracias al operador rest (...)
function evaluar(...valores) {
  try {
    // Recorremos todos los valores para verificar que sean numéricos
    for (const val of valores) {
      // Si alguno no es número, lanzamos un error a propósito
      if (typeof val !== "number" || isNaN(val)) {
        throw new Error(`"${val}" no es un número válido`);
      }
    }

    // Copiamos el arreglo con spread para no mutar el original
    const copia = [...valores];

    // Sumamos todos los valores de la copia
    const suma = copia.reduce((acc, val) => acc + val, 0);

    // Retornamos el promedio
    return suma / copia.length;

  } catch (error) {
    // Si algo salió mal, mostramos el mensaje del error
    console.error("Error:", error.message);
  }
}

// Caso válido → debería retornar 3 (1+2+3+4+5 / 5)
console.log(evaluar(1, 2, 3, 4, 5));

// Caso inválido → debería capturar el error por el "hola"
console.log(evaluar(1, 2, "hola", 4));