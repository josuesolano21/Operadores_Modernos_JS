/*3. Registro de actividades con manejo de errores
Escribe una función registrarActividad(actividad) que reciba un objeto que debe contener
{nombre, fecha}.
• Usa un try...catch para validar que ambas propiedades existan.
• Si falta alguna, lanza un error indicando que la actividad no es válida.
• Si todo está correcto, muestra un mensaje confirmando el registro.*/

function registrarActividad(actividad) {
    try {
    const { nombre, fecha } = actividad;
    console.log("Actividad registrada:", nombre, fecha);
    } catch {
    console.log("Error: La actividad no es válida");
    }
}

export { registrarActividad };