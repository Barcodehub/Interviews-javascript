
//Los arrays en JavaScript pueden declararse de varias formas:
let arr1 = [1, 2, 3, 4, 5]; // Array de números
let arr2 = ["a", "b", "c"]; // Array de strings
let arr3 = new Array(10); // Array con 10 espacios vacíos
let arr4 = []; // Array vacío
console.log("-----------------------------------------------------------------");

// Acceso a Elementos en un Array
let nums = [10, 20, 30, 40];

console.log(nums[0]); // 10
console.log(nums[2]); // 30
console.log(nums[nums.length - 1]); // Último elemento (40)
console.log("-----------------------------------------------------------------");



// Recorrer un Array
// for
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]); // 10, 20, 30, 40
}

// For...of (Iteración Directa)
for (let num of nums) {
    console.log(num); // 10, 20, 30, 40
}

//forEach 
nums.forEach((num, index) => {
    console.log(`Índice: ${index}, Valor: ${num}`);  //indice, valor
});
console.log("-----------------------------------------------------------------");



// Buscar Elementos

let arr = [1, 2, 3, 4, 5];

console.log(arr.includes(3)); // true
console.log(arr.indexOf(3)); // 2 (posición en el array)
console.log(arr.indexOf(10)); // -1 (no encontrado)


console.log("-----------------------------------------------------------------");
// Filtrar Elementos

let mayoresA10 = [5, 12, 8, 130, 44].filter(num => num > 10);
console.log(mayoresA10); // [12, 130, 44]
console.log("-----------------------------------------------------------------");

// Encontrar un Elemento

let encontrado = [10, 20, 30, 40].find(num => num > 15);
console.log(encontrado); // 20 (devuelve el primer valor que cumple la condición)
console.log("-----------------------------------------------------------------");


// Transformar un Array con map

let duplicados = [1, 2, 3, 4].map(num => num * 2);
console.log(duplicados); // [2, 4, 6, 8]
console.log("-----------------------------------------------------------------");


// Ordenar un Array

let num = [4, 2, 7, 1, 9];
num.sort((a, b) => a - b); // Orden ascendente
console.log(num); // [1, 2, 4, 7, 9]
console.log("-----------------------------------------------------------------");


// Almacenar y Recuperar Datos en un Objeto (Clave-Valor)

let obj = {};
obj[2] = 10;
obj[7] = 20;

console.log(obj); // { '2': 10, '7': 20 }
console.log(obj[2]); // 10
console.log(obj[7]); // 20
console.log(obj[1]); // undefined (no existe)
console.log("-----------------------------------------------------------------");


// Sets y Maps (Alternativas para Búsqueda Rápida)

let numSet = new Set([1, 2, 3, 4]);
console.log(numSet.has(3)); // true
console.log(numSet.has(10)); // false


let numMap = new Map();
numMap.set(2, 10); //key, value     || asignamos 
numMap.set(7, 20);

console.log(numMap.get(2)); // 10       ||posicion en que se encuentra el 2
console.log(numMap.get(7)); // 20
console.log("-----------------------------------------------------------------");


let numMap2 = new Map();
numMap2.set(2, 0);
numMap2.set(7, 1);
numMap2.set(11, 2);
numMap2.set(15, 3);

console.log(numMap2.has(7)); // true (búsqueda O(1))
console.log(numMap2.get(7)); // 1 (posición en el array)
console.log("-----------------------------------------------------------------");

