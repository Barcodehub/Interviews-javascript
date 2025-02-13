




```javascript
function threeSum(nums) {
    //  Ordenamos el array 
    nums.sort((a, b) => a - b); 

    let sum = []; 

    // Recorremos el array con un índice fijo `i`
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1; 
        let right = nums.length - 1; 

        // Buscamos combinaciones mientras `left` sea menor que `right`
        while (left < right) {
            let total = nums[i] + nums[left] + nums[right]; 

            if (total === 0) {

                sum.push([nums[i], nums[left], nums[right]]);

                left++; // Movemos `left` hacia la derecha
                right--; // Movemos `right` hacia la izquierda

            } else if (total < 0) {

                left++; // Si la suma es muy baja, aumentamos `left`

            } else {

                right--; // Si la suma es muy alta, reducimos `right`

            }
        }
    }

    // Eliminamos duplicados al final usando Set y JSON.stringify
    return uniqueTriplets = Array.from(new Set(sum.map(JSON.stringify)), JSON.parse);
}

```





```javascript
function threeSum(nums) {
    nums.sort((a, b) => a - b); // Ordenar el array primero
    let sum = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Evitar duplicados en el primer número

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let total = nums[i] + nums[left] + nums[right];

            if (total === 0) {
                sum.push([nums[i], nums[left], nums[right]]); // Guardar tripleta

                // Evitar duplicados en `left` y `right`
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (total < 0) {
                left++; // Necesitamos un número más grande
            } else {
                right--; // Necesitamos un número más pequeño
            }
        }
    }

    return sum;
}


```



