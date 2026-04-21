// app.js — Aquí se conectan todos los ejercicios

import * as readline from "readline";

import { Estudiante } from "./JS/transferencia/ejercicio_1.js";
import { catA, catB, fusionarCatalogos } from "./JS/transferencia/ejercicio_2.js";
import { procesarCompra } from "./JS/transferencia/ejercicio_3.js";
import { estadisticas } from "./JS/transferencia/ejercicio_4.js";
import { baseConfig, extraConfig, configFinal } from "./JS/transferencia/ejercicio_5.js";

// para agregar un ejercicio nuevo:
// 1. se importa arriba
// 2. para agregar una entrada nueva al objeto menu abajo con su número, nombre y fn

const menu = {
  1: {
    nombre: "Sistema de registro académico",
    fn: () => {
      Estudiante("Pepito", 4.5, 3.8, 4.0, 5.0);
    }
  },
  2: {
    nombre: "Fusión de catálogos digitales",
    fn: () => {
      console.log(fusionarCatalogos(catA, catB));
      console.log(fusionarCatalogos(catA, "hola"));
    }
  },
  3: {
    nombre: "Procesamiento de compras",
    fn: () => {
      const datosCliente = { nombre: "Luis", correo: "luis@mail.com" };
      const listaProductos = [
        { nombre: "Teclado", precio: 50 },
        { nombre: "Mouse", precio: 25 },
        { nombre: "Monitor", precio: 200 },
      ];
      console.log(procesarCompra(datosCliente, listaProductos));
      console.log(procesarCompra({}, listaProductos));
    }
  },
  4: {
    nombre: "Informe de estadísticas deportivas",
    fn: () => {
      const jugadores = [
        { nombre: "Ana",  stats: { puntos: 20, asistencias: 5 } },
        { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } },
      ];
      console.log(estadisticas(jugadores));
      console.log(estadisticas([]));
    }
  },
  5: {
    nombre: "Motor de configuración avanzada",
    fn: () => {
      console.log(configFinal(baseConfig, extraConfig));
      console.log(configFinal(baseConfig, "hola"));
    }
  },
  // siguiente ejercicio va aquí...
};

// configuramos readline para leer la entrada del usuario en consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log("\n===== MENÚ DE EJERCICIOS =====");
  for (const [key, val] of Object.entries(menu)) {
    console.log(`${key}. ${val.nombre}`);
  }
  console.log("0. Salir");
  console.log("==============================\n");
}

// pregunta al usuario qué ejercicio quiere ejecutar y lo corre
function preguntar() {
  mostrarMenu();
  rl.question("Selecciona un ejercicio: ", (respuesta) => {
    const opcion = Number(respuesta);

    if (opcion === 0) {
      console.log("Saliendo...");
      rl.close();
      return;
    }

    const ejercicio = menu[opcion];
    if (!ejercicio) {
      console.log("Opción no válida, intenta de nuevo.");
    } else {
      console.log(`\n--- ${ejercicio.nombre} ---`);
      ejercicio.fn();
    }

    // volvemos a preguntar después de ejecutar
    preguntar();
  });
}

preguntar();