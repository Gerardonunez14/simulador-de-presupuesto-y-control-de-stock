export function formatearMoneda(valor) {
  return "$" + valor.toFixed(2);
}

export function titulo(texto) {
  return "\n==========" + texto.toUpperCase()+ " ==========\n";
}

export function separador() {
  return "--------------------------------------------";
}