// Convierte un número a texto con formato de moneda y dos decimales.
export function formatearMoneda(valor) {
  return "$" + valor.toFixed(2);
}

// Genera un título visual en mayúsculas con un formato especial.
export function titulo(texto) {
  return "\n==========" + texto.toUpperCase() + " ==========" + "\n";
}

// Devuelve una línea decorativa para separar secciones en la salida.
export function separador() {
  return "--------------------------------------------";
}