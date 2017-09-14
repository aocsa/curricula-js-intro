# Introducción  

## Objetivos de Aprendizaje
- Entender qué se entiende por _while/for_  en JavaScript
- 

> El texto a continuación se basa en gran medida, con ciertos ajustes, en el capítulo 2 de [Eloquent JavaScript][1], de Marijn Haverbeke, 2014.

## Estructuras repetitivas

Esta unidad le presenta el concepto de usar bucles en código.

Podrían parecer un poco aterrador, pero obtendrá dominarlos muy rápidamente.

### El bucle for

```js
var total= 0                            // variable del contador 
for(var ctr = 0; ctr <= input0; ctr++) {// bucle hasta la input0 
    total = total + ctr                 // incremento total del contador de bucle 
    console.log (total)                 // output el total actual
}
```

### El bucle while

```js
var ctr = 0                             // variable de bucle 
var total = 0                           // variable de contador 
while (ctr <= input0) {                 // bucle hasta que ctr es igual a input0 
    total = total + ctr++               // aumenta el total por el número de bucle, incremento
    console.log (total)                 // fuera del total actual
}
```

### Experimentos

Esta ventana se proporciona para que pruebe cualquier código que desarrolle. Úselo para experimentar y practicar.

```js
-------

// Escribe el código experimental a continuación
//

console.log ('su archivo de experimentos')
```

[EJECUTE SU CÓDIGO]()


[1]:	http://eloquentjavascript.net/


