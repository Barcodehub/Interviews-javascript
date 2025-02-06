
// Verificar reuniones que se superponen
function isOverlapping(meeting1, meeting2) {
    return meeting1[1] > meeting2[0]; // Se superponen si una empieza antes de que la otra termine
}

console.log(isOverlapping([1, 3], [2, 5])); // true
console.log(isOverlapping([1, 3], [3, 5])); // false (pueden compartir sala)
console.log(isOverlapping([4, 6], [7, 8])); // false (no se superponen)




// El método .map() recorre un array y transforma cada elemento en algo nuevo.

let numbers = [1, 2, 3, 4];

let squares = numbers.map(num => num * num); // Elevar al cuadrado cada número

console.log(squares); // [1, 4, 9, 16]


// El método .sort() ordena un array.

let numbers2 = [3, 1, 4, 2];

numbers2.sort((a, b) => a - b); // Orden ascendente

console.log(numbers2); // [1, 2, 3, 4]



// Ordenar de menor a mayor los tiempos de inicio [0]

let meetings = [[10, 20], [5, 15], [0, 30]];

// Extraemos los tiempos de inicio y los ordenamos
let startTimes = meetings.map(meeting => meeting[0]).sort((a, b) => a - b);

console.log(startTimes); // [0, 5, 10]

