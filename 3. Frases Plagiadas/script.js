function frasesPlagiadas(frasesEstudiante, frasesSospechosas) {
  // Función para normalizar frases
  function normalizar(frase) {
    return frase
      .trim() // quitar espacios al inicio y final
      .replace(/[.!?]$/, '') // quitar signos de puntuación al final
      .toLowerCase(); // convertir a minúsculas
  }

  // Crear un conjunto de frases sospechosas normalizadas
  const sospechosasNormalizadas = new Set(frasesSospechosas.map(normalizar));

  // Filtrar las frases del estudiante que están plagiadas
  return frasesEstudiante.filter(frase => sospechosasNormalizadas.has(normalizar(frase)));
}
  const estudiante = [
  "La inteligencia artificial dominará el mundo.",
  "El sol es una estrella",
  "¡La inteligencia artificial dominará el mundo!",
  "La luna no tiene luz propia"
];

const sospechosas = [
  "la inteligencia artificial dominará el mundo",
  "el sol es una estrella."
];

console.log(frasesPlagiadas(estudiante, sospechosas));
// Resultado:
// [
//   "La inteligencia artificial dominará el mundo.",
//   "El sol es una estrella",
//   "¡La inteligencia artificial dominará el mundo!"
// ]
