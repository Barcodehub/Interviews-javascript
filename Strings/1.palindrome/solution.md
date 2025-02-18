


```javascript
var isPalindrome = function(s) {
    
s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
let reversed = s.split('').reverse().join('');

return s == reversed;


};
```