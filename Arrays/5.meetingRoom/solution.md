


```javascript
function minMeetingRooms(A) {
    if (A.length === 0) return 0;

    let startTimes = A.map(meeting => meeting[0]).sort((a, b) => a - b); //tiempos de inicio, y los ordena(sort)
    let endTimes = A.map(meeting => meeting[1]).sort((a, b) => a - b);

    let rooms = 0, maxRooms = 0;
    let startPointer = 0, endPointer = 0;

    while (startPointer < A.length) {
        if (startTimes[startPointer] < endTimes[endPointer]) {
            rooms++; // Se necesita una nueva sala
            startPointer++;
            maxRooms = Math.max(maxRooms, rooms);
        } else {
            rooms--; // Se libera una sala
            endPointer++;
        }
    }

    return maxRooms;
}
```

```
meeting => meeting[0] significa que de cada meeting (que es un array [inicio, fin]), tomamos solo el primer valor (inicio).

map() crea un nuevo array con esos valores.
```