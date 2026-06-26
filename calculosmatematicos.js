// Calcula el subtotal sumando el precio total de cada producto.
export function calcularSubtotal(productosSeleccionados) {
  return productosSeleccionados.reduce(
    // Acumula el monto de cada producto según precio por cantidad.
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );
}

// Calcula el IVA aplicando un porcentaje del 21% al monto recibido.
export function calcularIVA(monto) {
  return monto * 0.21;
}

// Aplica un descuento sobre un monto recibido según el porcentaje indicado.
export function aplicarDescuento(monto, porcentaje) {
  return monto - (monto * porcentaje / 100);
}