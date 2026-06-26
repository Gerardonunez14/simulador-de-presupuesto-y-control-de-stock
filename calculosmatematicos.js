export function calcularSubtotal(productosSeleccionados) {
  return productosSeleccionados.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );
}

export function calcularIVA(monto) {
  return monto * 0.21;
}

export function aplicarDescuento(monto, porcentaje) {
  return monto - (monto * porcentaje / 100);
}