


```javascript
function combinationSum(candidates, target) {
    const result = [];

    function backtrack(start, path, sum) {
        if (sum === target) {
            result.push([...path]); // Guardar la combinación válida
            return;
        }

        if (sum > target) {
            return; // Detener la exploración si la suma excede el target
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]); // Incluir el número actual
            backtrack(i, path, sum + candidates[i]); // Permitir repetir números
            path.pop(); // Backtracking
        }
    }

    backtrack(0, [], 0); // Iniciar el proceso
    return result;
}



```