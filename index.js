import productos from "./baseDeDatosSimulada.js";

import {
  calcularSubtotal,
  calcularIVA,
  aplicarDescuento
} from "./calculosMatematicos.js";

import {
  formatearMoneda,
  titulo,
  separador
} from "./formateoVisual.js";

const venta = [
  {
    id: 1,
    cantidad: 5
  },
  {
    id: 2,
    cantidad: 10
  }
];

const productosSeleccionados = venta.map(item => {
  const producto = productos.find(p => p.id === item.id);

  return {
    nombre: producto.nombre,
    precio: producto.precio,
    cantidad: item.cantidad
  };
});

let subtotal = calcularSubtotal(productosSeleccionados);

if (subtotal > 10000) {
  subtotal = aplicarDescuento(subtotal, 10);
}

const iva = calcularIVA(subtotal);

const total = subtotal + iva;

console.log(titulo("Presupuesto"));

console.log("Subtotal:", formatearMoneda(subtotal));

console.log(separador());

console.log("IVA:", formatearMoneda(iva));

console.log("Total:", formatearMoneda(total));