
//todas las combinaciones posibles:


    const result = []; // Aquí guardaremos todas las combinaciones
    nums = [1, 2, 3];

    function backtrack(start, arr) {
        if (arr.length > 0) {
            result.push([...arr]); // Guardar la combinación actual
        }

        for (let i = start; i < nums.length; i++) {
            arr.push(nums[i]); // Incluir el número actual en la combinación
            backtrack(i + 1, arr); // Explorar otras posibilidades
            arr.pop(); // Backtracking: eliminar el último número agregado
        }
    }

    backtrack(0, []); // Iniciar el proceso
    console.log(result) ;






