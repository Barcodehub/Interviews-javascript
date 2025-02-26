
Devolver el tamaño del mas largo palindromo

```javascript


function longitudMayorPalindromo(s) {
    let frecuencia = contarFrecuencia(s); // Obtenemos las frecuencias
    let longitud = 0; // Guardará el tamaño del palíndromo
    let tieneImpar = false; // Verificamos si hay algún número impar

    let valores = Object.values(frecuencia); // Obtenemos solo los value (cuantas veces hay de cada letra)
    for (let i = 0; i < valores.length; i++) { 
        let count = valores[i]; // Número de veces que aparece una letra

        if (count % 2 === 0) { // Si es par
            longitud += count; // Lo sumamos directamente 
        } else { // Si es impar
            longitud += count - 1; // Restamos 1 para hacerlo par y sumarlo
            tieneImpar = true; // Marcamos que había un impar
        }
    }

    return tieneImpar ? longitud + 1 : longitud; // Si hay un impar, lo ponemos en el centro
}

/* cuando es par
Si "c" aparece 4 veces, podemos usarlas todas para formar un palíndromo simétrico.
es decir 2 en cada extremo para hacer el plaindromo

cuando es impar
Si "a" aparece 3 veces, solo podemos usar 2 (en los lados del palíndromo) y dejar 1 para el centro. 
por esto se le resta uno


? :
? (if)  :(else)
*/
















```