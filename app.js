// importamos las variables y función del ejercicio los ejerccios
import { baseConfig, extraConfig, configFinal } from "./JS/transferencia/ejercicio_5.js";

// para agregar un ejercicio nuevo:
// 1. importa se importa lo necesario en la linea de arriba.
// 2. agrega una entrada nueva al objeto menu abajo

const menu = {
  5: {
    nombre: "Motor de configuración avanzada",
    fn: () => {
      console.log(configFinal(baseConfig, extraConfig)); // caso válido
      console.log(configFinal(baseConfig, "hola"));      // caso inválido
    }
  },
  // siguiente ejercicio va aquí...
};

// muestra en consola la lista de ejercicios disponibles
function mostrarMenu() {
  console.log("\n===== MENÚ DE EJERCICIOS =====");
  for (const [key, val] of Object.entries(menu)) {
    console.log(`${key}. ${val.nombre}`);
  }
  console.log("==============================\n");
}

// recibe el número de ejercicio y ejecuta su función
function ejecutar(opcion) {
  const ejercicio = menu[opcion];
  if (!ejercicio) {
    console.log("Opción no válida");
    return;
  }
  console.log(`\n--- ${ejercicio.nombre} ---`);
  ejercicio.fn();
}

// mostramos el menú y ejecutamos todos los ejercicios registrados
mostrarMenu();
Object.keys(menu).forEach(key => ejecutar(Number(key)));