function esSecuenciaValida(entrada, salida) {
  const pila = [];
  let i = 0;

  for (const fruta of entrada) {
    pila.push(fruta);

    // Mientras la cima de la pila coincida con la fruta esperada en salida
    while (pila.length > 0 && pila[pila.length - 1] === salida[i]) {
      pila.pop();
      i++;
    }
  }

  return pila.length === 0;
}
const entrada = ["manzana", "pera", "banano", "kiwi"];
const salidaValida = ["kiwi", "banano", "pera", "manzana"];
const salidaInvalida = ["banano", "kiwi", "pera", "manzana"];

console.log(esSecuenciaValida(entrada, salidaValida));   // true
console.log(esSecuenciaValida(entrada, salidaInvalida)); // false