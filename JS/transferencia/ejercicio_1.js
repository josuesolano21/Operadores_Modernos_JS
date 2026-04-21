/*1. Sistema de registro académico
Requerimiento:
Crea una función crearEstudiante(nombre, ...notas) que reciba:
• Un nombre obligatorio.
• Un número variable de notas mediante rest.

La función debe:
1. Validar con try...catch que todas las notas sean números.
2. Usar destructuración para separar la primera nota del resto.
3. Retornar un objeto inmutable con:
o Nombre
o Primera nota
o Promedio del resto de notas
o Total de notas registradas

Resultado esperado:
Un objeto final correctamente construido, sin mutar ningún arreglo externo, con cálculos
correctos y con manejo adecuado de errores.*/

function Estudiante(nombre, ...notas) {
    try {
    const [primera, ...resto] = notas;

    const promedio = (resto[0] + resto[1] + resto[2]) / resto.length;

    console.log("Nombre:", nombre);
    console.log("Primera nota:", primera);
    console.log("Promedio del resto:", promedio);
    console.log("Total de notas:", notas.length);

    } catch (e) {
    console.log("Error: las notas no son válidas");
    }
}

Estudiante("Pepito", 4.5, 3.8, 4.0, 5.0);

export { Estudiante };
