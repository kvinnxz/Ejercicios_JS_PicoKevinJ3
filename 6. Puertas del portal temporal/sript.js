function primerPortalFueraDeFase(portales) {
  const conteo = {};

  // Contar ocurrencias de cada portal
  for (const letra of portales) {
    conteo[letra] = (conteo[letra] || 0) + 1;
  }

  // Buscar el primer portal que no se repite
  for (let i = 0; i < portales.length; i++) {
    if (conteo[portales[i]] === 1) {
      return i;
    }
  }

  return -1; // Si todos se repiten
}
console.log(primerPortalFueraDeFase("aabbcddce")); // 8 → 'e' es único
console.log(primerPortalFueraDeFase("aabbccdd"));  // -1 → todos se repiten
console.log(primerPortalFueraDeFase("xxyz"));      // 3 → 'z' es único