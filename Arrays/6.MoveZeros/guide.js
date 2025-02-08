


let array = [1, 2, 3];
array.push(4); // Agrega el 4 al final
console.log(array); // [1, 2, 3, 4]




function moverAlFinal(array, indice) {
    if (indice < 0 || indice >= array.length) return array; // Validación
    let elemento = array.splice(indice, 1)[0]; // Extrae el elemento (lo borra y lo guarda)
    array.push(elemento); // Lo añade al final
    return array;
}

let numeros = [1, 2, 3, 4, 5];
console.log(moverAlFinal(numeros, 1)); // [1, 3, 4, 5, 2]
