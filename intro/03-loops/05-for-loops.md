# Bucles For
 
Hasta ahora has aprendido sobre los bucles `while`. Ahora vas a mirar un bucle diferente, que hace lo mismo, pero con una sintaxis diferente (estructura de sentencias) que lo hace más adecuado para tareas particulares.

```js

// Obtener input desde la línea de comandos
var N = 10 // prompt("input: ")

// usaremos esta variable para mantenerse al día con el total
var total = 0

for(var ctr = 0; ctr <= N; ctr ++) {    // bucle de 0 a 10
  Total = total + ctr                     // agrega valor de bucle al total
  console.log (total)                     // imprimir el total actual
}

console.log ('Final total:' + total) // imprimir final total

```

[EJECUTE EL CÓDIGO]()

Eche un vistazo al código de la izquierda. Hace lo mismo que el código de bucle `while` escrito abajo.

```js
// Obtenemos la entrada de la línea de comando 
var N = 10 // prompt("input: ")

// usaremos esta variable para mantenerse al nivel de
var total = 0 

var ctr = 0             // variable de bucle 
while (ctr  <= N) {    // bucle 0 a 10 total 
    total = total + ctr // agregar valor de bucle al total 
    ctr = ctr + 1       // incremento del contador de bucle 
    console.log (total) // imprimir total actual
}

console.log ('Total final: '+ Total) // imprimir total final

```

##  For explicado

Echemos un vistazo al bucle `for` con más detalle.

```
var total = 0 
for (var ctr = 0; ctr \<= N; ctr++) {
    total = total + ctr 
    console.log(total) }
```

Observe que hay 3 partes en la sentencia `for`. Estos se explican a continuación.

Inicialización
---- 

`var ctr = 0;`

Esta es la parte de inicialización. Puede tener varias sentencias JavaScript separadas por un `,`. Al final pones un `;`

Condición
---- 

\`ctr \<= N; 'esta es la segunda parte. Es la condición del bucle. El bucle se ejecutará hasta que la condición ya no sea verdadera.

Final de las declaraciones de bucle (loop)
---- 

`ctr ++` es la sentencia final de bucle. Cualquier sentencia JavaScript encontrada aquí se ejecuta al final del bloque de código de bucle justo antes de que se evalúe la condición. Si hay más de una instrucción de fin de bucle, las sentencias están separadas por `,`

**¿Qué es ctr++?**

Sigue trabajando en esta unidad y lo descubrirás!

##  Un poco más sobre de For

Mira el código de la izquierda y verás que tenemos tres versiones diferentes de código que hacen lo mismo.

Hemos puesto `console.log (total)` en las instrucciones de fin de bucle. Si ejecuta el código, debe ver por sí mismo que cada salida termina igual.

```js

// Obtener un input desde la línea de comandos
var N = 10 // prompt("input: ")

// 
----------------------------------------------------------------
console.log ("Versión 1")
{
  var total
  for (var ctr = 0, totral = 0; ctr<= N; ctr ++, console.log(total)) {
    total = total + ctr
  }
  console.log ('Final Total : ' + total)
}

// 
----------------------------------------------------------------
console.log ("Versión 2")
{
  var total = 0                       // mantiene nuestro total
  for(var ctr = 0; ctr <= N; ctr ++) {    // bucle hasta input0
    total = total + ctr                 // agregar valor de bucle actual
    console.log (total)                 // resultado total hasta ahora
  }
  console.log ('Final Total : ' + total) // output final total 
}

// ------------------------------------------------ ----------------
console.log ("Versión 3")
{
  var total = 0               // mantiene nuestro total
  var ctr = 0                     // nuestro contador de bucle
  while(ctr <= N) {               // loop hasta input0
    total = total + ctr++       // actualización de total, contador de incremento
    console.log (total)         // output total hasta ahora
  }
  console.log ('Final total : ' + total) // final total del output
}
```

[EJECUTE EL CÓDIGO]()

Entonces cuál es la diferencia?
---- 

Los bucles `for` y`while` son \* funcionalmente equivalentes \*. La diferencia entre los dos viene de decidir qué tipo de bucle indica mejor la intención del código . También tendrá que decidir qué tipo de bucle es más fácil de entender para otra persona que mira su código.

El primer ejemplo es malo.
---- 

1. Coloca toda la inicialización del bucle y variable lógica dentro de la sentencia `for`, lo que dificulta la comprensión de cómo se controla el bucle.
2. Esto hace que sea mucho más difícil hacer comentarios de alguna manera significativa.
3. También es mucho más difícil validar las condiciones de inicio y parada de un vistazo.
4. La declaración de la variable `total` se requiere para dar el alcance de la variable, pero la inicialización de`total` en la primera sección del bucle `for` deja el potencial de error entre ellos.
5. Una vez que haya visto las sentencias `for` y`while` unas cuantas veces, el bucle como un todo será más fácil de leer, independientemente del lazo que se elija.

Jugar
---- 

Siéntase libre de experimentar con el código de la izquierda. Si lo estropeas, puedes restablecerlo eligiendo la opción 'Restaurar archivos actuales' en el menú 'Configuración' en la parte superior de esta página.

## ctr++, ctr--

`ctr++` se utiliza al final de bucle.

El operador \`++ 'se llama el operador \* operador de incremento \*. Incrementa una variable por uno.

Si se escribe `++` después de la variable, como esto: `c++`, la variable se incrementa después de que se evalúa la sentencia. Si se escribe `++`, como esto: `++c`, la variable se incrementa antes de que se evalúe la sentencia. Esto puede afectar el orden de las operaciones.

A continuación, `b` terminará con un valor de 8 y`c` con un valor de 5:

```js
var c= 4
var b= 2 * c++
console.log(b)
console.log(c)
```

Pero en el siguiente ejemplo, `b` terminará con un valor de 10 porque`++c` establece `c = 5` antes de evaluar`2 \ * c`. La variable `c` como antes tendrá un valor de 5:

```js
var c= 4
var b= 2 * ++c
console.log(b)
console.log(c) 
```

variable+= and variable-=
Aquí tenemos una solución corta  (una manera corta y limpia de escribir).
  
``` js
ctr += 10 es la manera corta de ctr = ctr + 10
ctr -= 10 es la manera corta de ctr = ctr - 10
ctr \*= 10 es la manera corta de = ctr \* 10
ctr /= 10 es la manera corta de = ctr / 10
```
`

