



```javascript
var insert = function(intervals, newInterval) {
    
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
    
    for (let i = 0; i < intervals.length-1; i++) {
    let a = intervals[i][0];    //[0 , ] primer elemento del intervalo i
    let b = intervals[i][1];   // [ , 1] ultimo elemento del intervalo i
    
    let c = intervals[i+1][0];
    let d = intervals[i+1][1];
    
      if (c <= b) {
         let merged = [Math.min(a, c), Math.max(b, d)];
         intervals.splice(i, 2, merged);  //reemplazamos con el merged en ese espacio donde se eliminan los intervalos
         i--;
    }
    
    }
    return intervals;
    
    };


/* Esto significa:

i → Posición del primer intervalo que queremos modificar.
2 → Eliminamos dos elementos (el intervalo actual y el siguiente).
merged → Insertamos el nuevo intervalo fusionado en su lugar. */

```