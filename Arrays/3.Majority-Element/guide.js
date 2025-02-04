//Dado un arreglo de números, cuenta cuántas veces aparece cada número.

function contarFrecuencias(nums) {
    const frecuencias = {};

    for (let num of nums) {
        if (frecuencias[num]) {
            frecuencias[num]++;
        } else {
            frecuencias[num] = 1;
        }
    }

    return frecuencias;
}

// Ejemplo de uso
const nums = [1, 2, 2, 3, 3, 3, 4];
console.log(contarFrecuencias(nums));






// Dado un arreglo de números, encuentra todos los elementos que aparecen más de una vez.

function encontrarDuplicados(nums) {
    const frecuencias = {};
    const duplicados = [];

    for (let num of nums) {
        if (frecuencias[num]) {
            frecuencias[num]++;
        } else {
            frecuencias[num] = 1;
        }
    }

    for (let num in frecuencias) {
        if (frecuencias[num] > 1) {
            duplicados.push(Number(num));
        }
    }

    return duplicados;
}