


```javascript
var sortedSquares = function(nums) {
    
    let square = 0;

            square = nums.map(num => num*num);
            square.sort((a, b) => a - b);
            return square;


};
```