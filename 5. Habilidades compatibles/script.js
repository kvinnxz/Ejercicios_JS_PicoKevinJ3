function candidatosCompatibles(oferta, candidatos) {
  const requeridas = oferta.map(h => h.toLowerCase());
  const minimo = Math.floor(requeridas.length * 0.7);
  const compatibles = [];

  for (const candidato of candidatos) {
    const habilidades = candidato.habilidades.map(h => h.toLowerCase());
    const coincidencias = requeridas.filter(h => habilidades.includes(h)).length;

    if (coincidencias >= minimo) {
      compatibles.push(candidato.id);
    }
  }

  return compatibles.sort();
}
const oferta = ["JavaScript", "React", "CSS", "HTML", "Node.js"];

const candidatos = [
  { id: "Ana", habilidades: ["JavaScript", "React", "CSS"] },
  { id: "Juan", habilidades: ["HTML", "CSS", "JavaScript", "React"] },
  { id: "Leo", habilidades: ["JavaScript", "HTML"] },
  { id: "Zoe", habilidades: ["Node.js", "React", "CSS", "JavaScript", "HTML"] }
];

console.log(candidatosCompatibles(oferta, candidatos));
// Resultado: ["Ana", "Juan", "Zoe"]
