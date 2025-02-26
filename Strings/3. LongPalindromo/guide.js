

/* Contar la frecuencia de caracteres en una cadena
Para determinar cuántas veces aparece cada letra en la cadena. */


function contarFrecuencia(s) {
    let frecuencia = {};
    for (let char of s) {
        frecuencia[char] = (frecuencia[char] || 0) + 1;   //si está vacio esa posicion, empieza en cero
    }
    return frecuencia;
}

console.log(contarFrecuencia("abccccdd")); 
// { a: 1, b: 1, c: 4, d: 2 }


/* Verificar si un número es par o impar
Esto será útil para saber cuántas letras pueden formar pares y cuántas quedan sueltas.*/


function esPar(num) {
    return num % 2 === 0;
}

console.log(esPar(4)); // true
console.log(esPar(3)); // false



