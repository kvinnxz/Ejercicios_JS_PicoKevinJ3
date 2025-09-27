// Definir la función
function archivosComprometidos(lastSafeDownload, modifications) {
    const comprometidos = new Set();
    for (const [id, timestamp] of modifications) {
        if (timestamp > lastSafeDownload) {
            comprometidos.add(id);
        }
    }
    return Array.from(comprometidos).sort((a, b) => a - b);
}

// Llamar a la función con datos de ejemplo
const lastSafeDownload = 1000;
const modificaciones = [
  [1, 900],
  [2, 1100],
  [3, 1200],
  [2, 1300],
  [4, 800]
];

console.log(archivosComprometidos(lastSafeDownload, modificaciones));
// Resultado: [2, 3]