## Approaches to Solve the Problem

### 1. Double Loop

```javascript

var maxProfit = function(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};

```


### 2. One Loop

```javascript
var maxProfit = function(prices) {
    let minPrice = prices[0]; // Precio mín
    let maxProfit = 0; // Ganancia máx

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; // Actualiza el precio mínimo
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice; // Actualiza la ganancia máxima
        }
    }

    return maxProfit;
};
```