function decodeSpell(spell) {
  const symbolValues = {
    '☽': 1,
    '☾': 5,
    '♁': 10,
    '⚕': 50,
    '⚡': 100
  };

  let total = 0;
  let prevValue = 0;

  for (let i = spell.length - 1; i >= 0; i--) {
    const symbol = spell[i];
    const value = symbolValues[symbol];

    if (value === undefined) {
      return { valor: NaN, letras: 'Conjuro corrupto' };
    }

    if (value < prevValue) {
      total -= value;
    } else {
      total += value;
    }

    prevValue = value;
  }

  return {
    valor: total,
    letras: numeroALetrasMagicas(total)
  };
}

function numeroALetrasMagicas(numero) {
  const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince'];
  const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos',
                    'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

  if (numero === 100) return 'cien';
  if (numero < 10) return unidades[numero];
  if (numero < 16) return especiales[numero - 10];
  if (numero < 20) return 'dieci' + unidades[numero - 10];
  if (numero < 30) return numero === 20 ? 'veinte' : 'veinti' + unidades[numero - 20];
  if (numero < 100) {
    const d = Math.floor(numero / 10);
    const u = numero % 10;
    return u === 0 ? decenas[d] : decenas[d] + ' y ' + unidades[u];
  }
  if (numero < 1000) {
    const c = Math.floor(numero / 100);
    const resto = numero % 100;
    return resto === 0
      ? (c === 1 ? 'cien' : centenas[c])
      : centenas[c] + ' ' + numeroALetrasMagicas(resto);
  }

  return 'número mágico demasiado grande';
}

  console.log(decodeSpell('☽☽☾'));
  // { valor: 5, letras: 'cinco' }

  console.log(decodeSpell('☽☽☾⚡')); 
  // { valor: 95, letras: 'noventa y cinco' }

  console.log(decodeSpell('☽⚕⚡')); 
  // { valor: 49, letras: 'cuarenta y nueve' }

  console.log(decodeSpell('⚕.♒')); 
  // { valor: NaN, letras: 'Conjuro corrupto' }
