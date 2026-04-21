/*4.Informe de estadísticas deportivas
Requerimiento:
Partiendo del arreglo:
const jugadores = [
{ nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
{ nombre: "Luis", stats: { puntos: 15, asistencias: 7 } }
];
Crea una función estadisticas(jugadores) que:

Verifique mediante try...catch que la estructura de datos sea válida.
Emplee destructuración profunda para obtener los puntos del primer jugador.
Calcule la suma total de puntos del equipo utilizando técnicas inmutables.
Devuelva un objeto con:
o Puntos del primer jugador
o Puntos totales del equipo
o Lista inmutable de jugadores procesados
Resultado esperado:
Un objeto estadístico confiable, con cálculos correctos y sin mutación de la lista original.*/
// Este archivo calcula las estadísticas del equipo a partir de una lista de jugadores.
// Toda la lógica está pensada para no mutar los datos originales en ningún momento.

// Verificamos que el arreglo exista, tenga jugadores y que cada uno
// cuente con nombre y stats válidos. Si algo falla, lanzamos un error descriptivo.
const validarJugadores = (jugadores) => {
  if (!Array.isArray(jugadores) || jugadores.length === 0)
    throw new Error("La lista de jugadores no es válida.");

  jugadores.forEach((j, i) => {
    if (!j?.nombre || !j?.stats?.puntos === undefined || !j?.stats?.asistencias === undefined)
      throw new Error(`El jugador en la posición ${i} tiene datos incompletos.`);
  });
};

// Usamos destructuración profunda para sacar directamente los puntos
// del primer jugador sin tener que navegar manualmente por el objeto.
const obtenerPuntosJugadorUno = ([{ stats: { puntos } }]) => puntos;

// Recorremos el arreglo con reduce para sumar todos los puntos del equipo.
// En ningún momento tocamos el arreglo original, solo leemos sus valores.
const calcularPuntosTotal = (jugadores) =>
  jugadores.reduce((acc, { stats: { puntos } }) => acc + puntos, 0);

// Creamos una copia inmutable del arreglo usando map y spread en cada jugador.
// Así devolvemos una lista nueva sin alterar la original.
const procesarJugadores = (jugadores) =>
  jugadores.map((j) => ({ ...j, stats: { ...j.stats } }));

// Función principal que orquesta todas las operaciones.
// Si la validación falla, el catch captura el error y lo devuelve como objeto.
const estadisticas = (jugadores) => {
  try {
    validarJugadores(jugadores);

    const puntosJugadorUno = obtenerPuntosJugadorUno(jugadores);
    const puntosTotal = calcularPuntosTotal(jugadores);
    const jugadoresProcesados = procesarJugadores(jugadores);

    // Devolvemos el informe final con los tres datos solicitados.
    // La lista de jugadores procesados es una copia, no una referencia al original.
    return {
      puntosJugadorUno,
      puntosTotal,
      jugadoresProcesados,
    };
  } catch (error) {
    return { error: error.message };
  }
};

// Datos de prueba con dos jugadores y sus respectivas estadísticas.
const jugadores = [
  { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
  { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } },
];

// Ejecutamos la función y mostramos el resultado en consola.
// El output debería mostrar los puntos de Ana, el total del equipo y la lista procesada.
console.log(estadisticas(jugadores));

// Exportamos todas las funciones para que puedan reutilizarse o probarse desde otro módulo.
export { validarJugadores, obtenerPuntosJugadorUno, calcularPuntosTotal, procesarJugadores, estadisticas };