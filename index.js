// Importa la base de datos simulada con los productos disponibles.
import productos from "./baseDeDatosSimulada.js";

// Importa las funciones que calculan el subtotal, el IVA y los descuentos.
import {
  calcularSubtotal,
  calcularIVA,
  aplicarDescuento
} from "./calculosMatematicos.js";

// Importa las funciones que formatean y muestran los datos de forma visual.
import {
  formatearMoneda,
  titulo,
  separador
} from "./formateoVisual.js";

// Define la venta actual como un arreglo de productos con su cantidad.
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

// Convierte la venta en un arreglo de productos con la información necesaria.
const productosSeleccionados = venta.map(item => {
  // Busca el producto correspondiente en la base de datos usando su id.
  const producto = productos.find(p => p.id === item.id);

  // Devuelve un objeto con los datos que se necesitan para calcular el presupuesto.
  return {
    nombre: producto.nombre,
    precio: producto.precio,
    cantidad: item.cantidad
  };
});

// Calcula el subtotal de la compra a partir de los productos seleccionados.
let subtotal = calcularSubtotal(productosSeleccionados);

// Si el subtotal supera cierto límite, se aplica un descuento del 10%.
if (subtotal > 10000) {
  subtotal = aplicarDescuento(subtotal, 10);
}

// Calcula el IVA sobre el subtotal ya posiblemnte actualizado.
const iva = calcularIVA(subtotal);

// El total final es la suma del subtotal y el IVA.
const total = subtotal + iva;

// Muestra el título del presupuesto en pantalla.
console.log(titulo("Presupuesto"));

// Muestra el subtotal formateado como moneda.
console.log("Subtotal:", formatearMoneda(subtotal));

// Muestra una línea separadora para mejorar la lectura del resultado.
console.log(separador());

// Muestra el IVA formateado como moneda.
console.log("IVA:", formatearMoneda(iva));

// Muestra el total final formateado como moneda.
console.log("Total:", formatearMoneda(total));