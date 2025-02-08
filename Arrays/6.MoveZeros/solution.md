

```javascript
var moveZeroes = function(nums) {
    
    let longitud = nums.length;
    for(i=0; i < longitud; i++){

        if(nums[i] == 0){
            nums.splice(i, 1); // Eliminar el cero actual (el array se corre automaticamente )
            nums.push(0);
            i--; // Retroceder el índice para no saltarse elementos (el array se corrio al eliminarse el 0)
            longitud--; // Reducir la longitud porque eliminamos un elemento
        }
    }
};
```


```javascript
var moveZeroes = function(nums) {
    let index = 0; // Índice para colocar los números distintos de cero

    // Mover todos los números distintos de cero al frente
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }

    // Llenar el resto del array con ceros
    while (index < nums.length) {
        nums[index] = 0;
        index++;
    }
};

```