

//convertir a minusculas
let text = "Hello World!";
console.log(text.toLowerCase());


// eliminar signos
let cleanText = text.replace(/[^a-z0-9]/gi, '');
console.log(cleanText); 


// split: Convertir la cadena en un array de caracteres
// reverse: Invertir el array
// join: Convertir el array de vuelta a una cadena
let word = "racecar";
let reversed = word.split('').reverse().join('');
console.log(reversed); 


