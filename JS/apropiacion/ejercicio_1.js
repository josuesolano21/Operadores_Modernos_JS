/*1. Gestión de pedidos con rest y destructuración
Crea una función procesarPedido(pedido, ...extras) donde pedido es un objeto con {cliente,
producto, cantidad}.
• Usa destructuración para obtener sus propiedades.
• Usa parámetros rest para almacenar los extras del pedido.
La función debe retornar un objeto final con toda la información consolidada.*/
const procesarPedido = ({ cliente, producto, cantidad }, ...extras) => {
  return {
    cliente,
    producto,
    cantidad,
    extras
  };
};

// Ejemplo de uso:
const pedidoOriginal = { cliente: "Ana", producto: "Laptop", cantidad: 1 };
const resultado = procesarPedido(pedidoOriginal, "Funda", "Mouse", "Garantía");

console.log(resultado);