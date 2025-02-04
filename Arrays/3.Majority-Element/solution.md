


```javascript
var majorityElement = function(nums) {
    const counts = {}; // Objeto para contar frecuencias

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        // Incrementar el conteo del número actual
        if (counts[num]) {      //LA CLAVE o posicion, si ya hay un valor alli, entonces incrementamos
            counts[num]++;
        } else {
            counts[num] = 1;    //si no existe, entonces se crea en esa clave con el valor de conteo inicial
        }

        // Verificar si el número actual es mayoritario
        if (counts[num] > nums.length / 2) {
            return num;
        }
    }
};
```