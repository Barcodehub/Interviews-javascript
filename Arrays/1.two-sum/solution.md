# Two Sum Problem

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Approaches to Solve the Problem

### 1. Double Loop

```javascript
var twoSum = function(nums, target) {
    for (let j = 0; j < nums.length; j++) {
        for (let i = j + 1; i < nums.length; i++) {
            if (nums[j] + nums[i] == target) {
                return [j, i];
            }
        }
    }
};
```

###  2. Single Loop with IndexOf

```javascript
var twoSum = function(nums, target) {
    for (let j = 0; j < nums.length; j++) {
        let aux = target - nums[j];
        let i = nums.indexOf(aux, j + 1);  // Start searching from j + 1
        if (i !== -1) {
            return [j, i];
        }
    }
};
```


### 3. Recursive Approach

```javascript
var twoSum = function(nums, target, j = 0) {
    let aux = target - nums[j];
    let i = nums.indexOf(aux, j + 1); 

    if (i !== -1) {    
        return [j, i];
    }

    if (j == nums.length) {
        return;
    } else {
        return twoSum(nums, target, j + 1);
    }
};
```

### 4. Using Map

```javascript
var twoSum = function(nums, target, j = 0, map = new Map()) {
    let aux = target - nums[j];

    if (map.has(aux)) {
        let i = map.get(aux);
        return [j, i];
    }

    map.set(nums[j], j);
    return twoSum(nums, target, j + 1, map);
};
```

## Explanation for the Map Approach

In a situation like [3, 3] with a target of 6, if in the first iteration we have a 3, we would need another 3 to reach the target. If we store the first 3 in the map before checking, it will read that there is already a 3 at that position. However, that 3 cannot be used because it is the same element. We need a different element to sum with it, not the same one.

This approach ensures that we are not using the same element twice by storing the elements in a map and checking for the complement (target - nums[j]) in the map.
