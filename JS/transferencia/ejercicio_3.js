/*3. Procesamiento de compras
Requerimiento:
Implementa una función procesarCompra(cliente, productos) donde:
• cliente es un objeto con {nombre, correo}.
• productos es una lista de objetos con {nombre, precio}.
La función debe:
1. Validar con try...catch que el cliente tenga los dos datos y que los productos sean
válidos.
2. Utilizar spread para crear un nuevo objeto con toda la información del cliente.
3. Usar destructuración para separar el primer producto comprado del resto.
4. Retornar un informe con:
o Total de productos
o Precio total
o Primer producto adquirido

Resultado esperado:
Un informe completo y coherente, construido con técnicas de inmutabilidad y manejo
seguro de errores.*/


// Nos aseguramos de que el cliente tenga nombre y correo antes de continuar.
// Si falta alguno, lanzamos un error para evitar procesar datos incompletos.
// Usamos spread para no mutar el objeto original y devolver una copia limpia.
const crearCliente = (cliente) => {
  if (!cliente?.nombre || !cliente?.correo)
    throw new Error("Datos del cliente incompletos.");
  return { ...cliente };
};

// Verificamos que la lista de productos sea un arreglo con al menos un elemento.
// No tiene sentido procesar una compra vacía, así que lo cortamos desde aquí.
const validarProductos = (productos) => {
  if (!Array.isArray(productos) || productos.length === 0)
    throw new Error("Lista de productos no válida.");
};

// Recorremos todos los productos y sumamos sus precios uno por uno.
// El reduce empieza desde 0 y va acumulando el total en cada iteración.
const calcularTotal = (productos) =>
  productos.reduce((acc, p) => acc + p.precio, 0);

// Aprovechamos la desestructuración para separar el primer producto del resto.
// Esto nos permite identificar qué fue lo primero que el cliente agregó al carrito.
const separarProductos = ([primero, ...resto]) => ({
  primerProducto: primero,
  resto,
});

// Función principal que orquesta todo el proceso de compra.
// Llama a cada función auxiliar en orden y arma el informe final.
// Si algo falla en cualquier paso, el catch lo captura y devuelve el mensaje de error.
const procesarCompra = (cliente, productos) => {
  try {
    const infoCliente = crearCliente(cliente);
    validarProductos(productos);

    const precioTotal = calcularTotal(productos);
    const { primerProducto, resto } = separarProductos(productos);

    // Armamos el objeto de respuesta con toda la información relevante del pedido.
    // Los productos restantes se mapean para devolver solo sus nombres, sin datos extra.
    return {
      cliente: infoCliente,
      totalProductos: productos.length,
      precioTotal,
      primerProductoAdquirido: primerProducto.nombre,
      otrosProductos: resto.map((p) => p.nombre),
    };
  } catch (error) {
    return { error: error.message };
  }
};

// Datos de prueba para simular una compra real.
// El cliente Luis compra tres productos con precios distintos.
const datosCliente = { nombre: "Luis", correo: "luis@mail.com" };
const listaProductos = [
  { nombre: "Teclado", precio: 50 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Monitor", precio: 200 },
];

// Ejecutamos la función y mostramos el resultado en consola.
// El output debería mostrar el resumen completo del pedido de Luis.
console.log(procesarCompra(datosCliente, listaProductos));

// Exportamos todo lo que podría necesitarse desde otro archivo,
export { crearCliente, validarProductos, calcularTotal, separarProductos, procesarCompra };