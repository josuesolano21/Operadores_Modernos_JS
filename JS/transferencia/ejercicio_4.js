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
const jugadores = [
  { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
  { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } }
];

const estadisticas = (lista) => {
  try {
    // 1. Validación básica
    if (!Array.isArray(lista) || lista.length === 0) throw new Error("Lista no válida");

    // 2. Destructuración profunda (primer jugador -> stats -> puntos)
    const [{ stats: { puntos: puntosPrimerJugador } }] = lista;

    // 3. Cálculo inmutable de puntos totales con reduce
    const puntosTotales = lista.reduce((acc, j) => acc + (j.stats?.puntos || 0), 0);

    // 4. Lista inmutable de jugadores procesados (copia superficial)
    const jugadoresProcesados = [...lista];

    return {
      puntosPrimerJugador,
      puntosTotales,
      jugadoresProcesados
    };

  } catch (error) {
    return { error: error.message };
  }
};

// Prueba del código
console.log(estadisticas(jugadores));