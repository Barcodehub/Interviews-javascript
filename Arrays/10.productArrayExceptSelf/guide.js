

// Recorrido de Izquierda a Derecha


// Imagina que tienes un array y quieres multiplicar todos los elementos anteriores al array[i] para cada posición.

let nums = [2, 3, 4, 5];
let prefix = new Array(nums.length).fill(1);

let product = 1;
for (let i = 0; i < nums.length; i++) {
    prefix[i] = product;  // Guardamos el producto acumulado antes de nums[i]
    product *= nums[i];   // Multiplicamos por el número actual para el siguiente paso
}

console.log(prefix); // [1, 2, 6, 24]




/* Explicación Paso a Paso

prefix[0] = 1 → (no hay números antes del primer elemento).
prefix[1] = 2 → (producto de números antes de nums[1]).
prefix[2] = 2 * 3 = 6 → (producto de números antes de nums[2]).
prefix[3] = 2 * 3 * 4 = 24 → (producto de números antes de nums[3]). */