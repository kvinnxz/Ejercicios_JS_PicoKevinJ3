# EJERCICIOS

Colección de ejercicios de JavaScript basados en el documento de especificaciones.

## 📋 Lista de Ejercicios

### 1. El códice de Arkansas
**Descripción:** Descifrar símbolos arcanos según un sistema numérico mágico con reglas de suma/resta.
- **Reglas:** Símbolos de menor valor antes de mayor valor se restan
- **Entrada:** Cadena de símbolos ('I', 'V', 'X', 'L', 'C')
- **Salida:** Valor numérico o NaN si hay símbolos desconocidos

### 2. Archivos comprometidos
**Descripción:** Identificar archivos modificados después de una descarga segura.
- **Reglas:** 
  - Timestamp de última descarga segura
  - Logs de modificaciones [ID, timestamp]
  - Ordenar IDs ascendente, sin repetir

### 3. Frases Plagiadas
**Descripción:** Detectar frases copiadas ignorando mayúsculas, espacios y puntuación final.
- **Reglas:**
  - Ignorar mayúsculas/minúsculas
  - Ignorar espacios al inicio/final
  - Ignorar . , ! ? al final
  - Mantener orden original

### 4. Frutas envasadas
**Descripción:** Verificar si secuencia de salida es posible con orden LIFO (pila).
- **Reglas:**
  - Última en entrar, primera en salir
  - Arrays de entrada y salida
  - Frutas únicas, sin repetir

### 5. Habilidades compatibles
**Descripción:** Emparejar candidatos con ofertas laborales (70% de coincidencia).
- **Reglas:**
  - 70% de habilidades requeridas (redondear abajo)
  - Case-insensitive
  - Ordenar alfabéticamente por ID

### 6. Puertas del portal temporal
**Descripción:** Encontrar primer portal que no se repite en secuencia.
- **Reglas:**
  - String de letras minúsculas
  - Devolver índice del primer único
  - -1 si todos se repiten

### 7. Anagramas
**Descripción:** Determinar si dos palabras son anagramas.
- **Reglas:**
  - Mismas letras, mismas cantidades
  - Case-insensitive
  - Solo letras, sin caracteres especiales

## 🗂️ Estructura del Proyecto
EJERCICIOS_JS_PICOKEVINJS/
│
├── 1-el-codice-de-arkansas/
│ ├── index.html
│ └── script.js
│
├── 2-archivos-comprometidos/
│ ├── index.html
│ └── script.js
│
├── 3-frases-plagiadas/
│ ├── index.html
│ └── script.js
│
├── 4-frutas-envasadas/
│ ├── index.html
│ └── script.js
│
├── 5-habilidades-compatibles/
│ ├── index.html
│ └── script.js
│
├── 6-puertas-del-portal-temporal/
│ ├── index.html
│ └── script.js
│
├── 7-anagramas/
│ ├── index.html
│ └── script.js
│
└── README.mdJS_PEOREVNJS/
│
├── 1-el-codice-de-arkansas/
│ ├── index.html
│ └── script.js
│
├── 2-archivos-comprometidos/
│ ├── index.html
│ └── script.js
│
├── 3-frases-plagiadas/
│ ├── index.html
│ └── script.js
│
├── 4-frutas-envasadas/
│ ├── index.html
│ └── script.js
│
├── 5-habilidades-compatibles/
│ ├── index.html
│ └── script.js
│
├── 6-puertas-del-portal-temporal/
│ ├── index.html
│ └── script.js
│
├── 7-anagramas/
│ ├── index.html
│ └── script.js
│
└── README.md

## 🚀 Cómo Usar

1. Navegar a la carpeta del ejercicio deseado
2. Abrir `index.html` en el navegador
3. Los resultados se muestran en la consola del navegador
