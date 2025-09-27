function sonAnagramas(palabra1, palabra2) {
  const normalizar = str =>
    str.toLowerCase().split('').sort().join('');

  return normalizar(palabra1) === normalizar(palabra2);
}
console.log(sonAnagramas("cinema", "iceman")); // true
console.log(sonAnagramas("hello", "world"));   // false
console.log(sonAnagramas("Roma", "amor"));     // true