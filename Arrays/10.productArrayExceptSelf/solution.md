



```javascript
var productExceptSelf = function(nums) {
    let n = nums.length;
    let prefix = new Array(n).fill(1);
    let suffix = new Array(n).fill(1);
    let answer = new Array(n).fill(1);

    // Llenamos el prefijo (multiplicamos de izquierda a derecha sin contar i, va acumulandose)
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    // Llenamos el sufijo
    for (let i = nums.length - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    // Multiplicamos prefijo y sufijo
    for (let i = 0; i < n; i++) {
        answer[i] = prefix[i] * suffix[i];
    }

    return answer;
};
```