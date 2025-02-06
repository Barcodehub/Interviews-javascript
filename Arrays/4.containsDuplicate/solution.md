



```javascript
var containsDuplicate = function(nums) {
    
    frecuencias = {};

    for(i=0; i<nums.length; i++){
        
        if(frecuencias[nums[i]]){  //no nulo, no vacio 
           return true;
    }else{
          frecuencias[nums[i]] = 1; //añadimos en caso de no haber nada en esa posicion
    }
    }
    return false;
    
};
```





```javascript
//usando set
var containsDuplicate = function(nums) {
    let numSet = new Set();

    for (let num of nums) {
        if (numSet.has(num)) {
            return true;
        }
        numSet.add(num);
    }
    
    return false;
};
```