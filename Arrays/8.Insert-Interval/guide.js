

/* Acceder a los valores dentro de cada intervalo
Cada intervalo tiene dos números: inicio y fin (start, end). */

let interval = [1, 3];

console.log(interval[0]);  // 1 (inicio)
console.log(interval[1]);  // 3 (fin)





//  Recorrer una matriz

let intervals = [[1, 3], [6, 9]];

for (let i = 0; i < intervals.length; i++) {
    console.log(intervals[i]);  // Imprime cada intervalo
}

// Si recorremos la matriz, podemos acceder a start y end así:
for (let i = 0; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];
    console.log("Inicio:", start, "Fin:", end);
}





// Agregar un nuevo intervalo
let newInterval = [2, 5];
intervals.push(newInterval);

console.log(intervals);

// Insertar manteniendo el orden
intervals.sort((a, b) => a[0] - b[0]);      // ordenar los intervalos por el inicio (start):

console.log(intervals);





//Fusionar intervalos que se solapan
// Dos intervalos [a, b] y [c, d] se solapan si c está entre a y b

let a = 1, b = 3;
let c = 2, d = 5;

if (c <= b) {
    let merged = [Math.min(a, c), Math.max(b, d)];
    console.log(merged);  // [1, 5]
}








//el splice sirve pa  eliminar, agregar o reemplazar elementos en un array./


let numeros = [1, 2, 3, 4, 5];
// Eliminar 2 elementos desde la posición 1
numeros.splice(1, 2);



let colores = ["rojo", "verde", "azul", "negro"];
// Reemplazar "verde" y "azul" por "amarillo"
colores.splice(1, 2, "amarillo");
console.log(colores);
// Resultado: ["rojo", "amarillo", "negro"]



//CON MATRICES
let i = [[1, 3], [4, 7], [8, 10]];
// Reemplazamos [4,7] con [2,9]
i.splice(1, 1, [2, 9]);
console.log(i);
// Resultado: [[1,3], [2,9], [8,10]]



//REEMPLAZANDO
let intervals2 = [[1,3], [2,5], [6,9]];
let merged2 = [1, 5];

intervals2.splice(0, 2, merged2);

console.log(intervals2);
// Resultado: [[1,5], [6,9]]
