

//convertir en un array de characters
let palabra = "listen";
let letras = palabra.split("");  // ["l", "i", "s", "t", "e", "n"]
console.log(letras);

//ordenar alfabeticamente
let ordenado = letras.sort();  // ["e", "i", "l", "n", "s", "t"]
console.log(ordenado);


//convertir de array a string
let palabraOrdenada = ordenado.join("");  // "eilnst"
console.log(palabraOrdenada);
