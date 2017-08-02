# Estructuras Condicionales  

## Objetivos de Aprendizaje
- Entender qué se entiende por _conditions_ (condiciones) en JavaScript
- Conocer  como indentar código
- Aprender cómo combinar y transformar condiciones con operadores lógicos en JavaScript

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el capítulo 2 de [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn
Haverbeke, 2014.

***

## 1. Introducción

Esta unidad trata de usar sentencias condicionales en JavaScript.

Aquí hay un buen ejemplo:

```js
var number = 123   // prompt("input: ")

if (number >= 10 && number < 100) {	// 1. si el número es de 2 dígitos
  console.log('número de 2 dígitos') 	// entonces el output está diciendo
}
else if (number >= 100) {			        // 2. De lo contrario, si hay más de 2 dígitos
  console.log ('número de dígitos múltiples') // entonces el output está diciendo
}
else {						                    // 3. de lo contrario
  console.log ('número de 1 dígito')	// este debe ser un número de un solo dígito
}
```

**Si** el número es mayor o igual a 10 y  el número es menor que 100, **entonces** mostrar ‘número de 2 dígitos’ **de lo contrario si** el número es mayor o igual a 100 entonces mostrar ‘número de dígitos múltiples’ **de lo contrario**  mostrar 'número de 1 dígito'.

### 1.1. Experimentos

Esta ventana se proporciona para que pruebe cualquier código que desarrolle. Úselo para experimentar y practicar.

Hay un código de inicio proporcionado para usted. Este código se explicará en las siguientes páginas.

```js

// Escribe el código de experimento a continuación

console.log ('su archivo de experimento')

```

[EJECUTE EL CÓDIGO]()

## 2. Condiciones explicadas

Echa un vistazo a la diagrama de flujo; el gráfico muestra el uso de una condición.

### Ejemplo

![Screenshot 2017-07-12 20.10.38.png](ABA2686987271F50F421DE94863644A9.png)


En este ejemplo, la condición es input0 \> 100 \. Puede ver cómo esta condición puede ser verdadera o falsa. Estos son los únicos dos posibles resultados de la decisión.

### 2.1. Condiciones en el código

A la izquierda está el código JavaScript equivalente al gráfico de Flode de la página anterior.

Si ejecuta el código verá que se ocupa de la sentencia condicional exactamente de la misma manera que hizo el gráfico de Flode.

```js

// Obtener el input desde la línea de comandos
var number = 12 // prompt("input");

// Su código va abajo

// output del número del input del programa
console.log ('La entrada de línea de comandos es:' + number)

// Y aquí viene nuestra declaración ‘if'
if (number> 100) {
  console.log ('grande')
}
else {
  console.log ('pequeño')
}

```

[EJECUTE EL CÓDIGO]()

Echa un vistazo a cómo funciona este código:

En primer lugar, los datos de prueba de nuestra variable de entrada `number`, proviene de la línea de comandos.

```text
var number = process.argv [2]
```

Y aquí viene la parte importante. Se utiliza una instrucción `if` para comprobar si` number` es mayor que 100 \. Si lo es, entonces emitimos la cadena 'grande'. De lo contrario, emitiremos la cadena 'pequeño'.

```js
if (number > 100) {
  console.log ('grande')
}
else {
  console.log ('pequeño')
}
```

## 2.2. Declaraciones condicionales explicadas

Ahora vamos a ver con más detalle cómo funciona la sentencia `if`. Aquí está el código completo nuevamente:

```js
var number = 123   // prompt("input: ")
if (number > 100) {
  console.log ('grande’')
}
else {
  console.log ('pequeño')
}
```

En primer lugar, eche un vistazo a la primera línea:

La sentencia if
---------------

```js

 if (number > 100) {

```

 1\. Inicie la línea con `if`.

 2\. Ahora especifique la condición dentro de los paréntesis `(condión)`.

 3\. Por último, al final de la línea se añade un `{`, conocido como una **llave**.

 Si la condición es verdadera
 ----------------------------

 **if** (si) la condición es verdadera, entonces realizas todas las instrucciones que vienen después de ella, dentro del `{` `}`. En este ejemplo sólo hay una instrucción.

 ```

 console.log ('grande')

 ```

 Todo lo que está dentro de `{`  y `} se le denomina *bloque de código*.

 De otra manera
 --------------

 Si la condición es **falsa** (not true), el bloque de código `else` se ejecuta en su lugar.

 ```

 console.log ('pequeño')

 ```

 Bloques de código
 -----------------

 El `{` al final de la línea `if` se utiliza para iniciar un bloque de código. Una vez que se ha iniciado el bloque de código, agrega el código que desea ejecutar en las siguientes líneas. A continuación, finaliza el bloque de código con un `}`.

## 2.3. Indentación

Indentación significa dejar un espacio vacío entre el margen izquierdo y el comienzo de una línea de código. En algunos lenguajes de programación como Python, la sangría es *requerida*. En estos idiomas, si no se indenta su código correctamente, no se ejecutará.

En JavaScript, su código funcionará bien sin sangría pero parecerá desordenado y puede ser difícil para otros leer y entender.

Echa un vistazo al código que está escrito sin sangría. Es difícil de leer en comparación con el código que hemos utilizado en las páginas anteriores.

```js
if (number > 100) {
  console.log ('grande')

} else {
  console.log ('pequeño')
}
```

¿Qué código se debería identar?
-------------------------------

Se debe identar todo el código dentro de un bloque de código. Los bloques de código  comienzan con el carácter `{` y terminan con `}`.

```text
If (number > 100) {
  aquí todo el código identado
}
```

Pronto verás otras sentencias que también tienen bloques de código, como son los ciclos `for` y` while`. Estos deben ser identados también.

```text
while (contador  <= 9) {
  console.log (contador)
  contador = contador + 1
}
```

¿Cómo se indenta código?
-----------------------------------

Pulse la tecla de tabulación al principio de una nueva línea para identar su código. (La tecla de tabulación es la tecla con dos flechas apuntando en direcciones opuestas).

A veces los principiantes presionan la barra de espacio varias veces para sangrar su código. **No haga esto**.

Siempre use la tecla de tabulación en su lugar. Esto asegura que las sangrías sean consistentes.

En JavaScript, utilice 2 o 4 espacios para sangrar.

## 2.4. Explicación de iguales

Echa un vistazo al diagrama de flujo.

![Screenshot 2017-07-12 20.20.52.png](A07B07C57B8B5658F01A8EC75706C7FA.png)

A continuación se muestra el código JavaScript equivalente:

```js
var number = 123   // prompt("input: ")
if (number == 100) {
  console.log ('es 100')
} else {
  console.log ('no es 100')
}
```

¿Por qué usamos ==?
------------------

Tenga en cuenta que necesita utilizar `==` y ** not ** =.

En JavaScript (y muchos otros lenguajes de programación) `=` es el operador * de asignación *, no un operador de comparación. Esto significa que usted usa `==` para comparar cosas y `=` para establecer variables.

```text
N = 100 // asigna N a 100
N == 100 // falso a menos que N tenga el valor 100
```

## 2.5. Desafío

Le proporcionaremos un número, N.

* Si N es igual a 100, el output ‘éxito’
* De lo contrario, output ‘pierde’

Recuerde que el string distingue entre mayúsculas y minúsculas.

```js
// Obtener argumentos de la línea de comandos
// Asegúrese de que N se maneje como un número
var N = +process.argv[2]

// Su código va aquí

```

[¡Revisalo!]()

## 2.6. No es igual explicado

Echa un vistazo a la tabla de Flode a la izquierda, que muestra una condición "no es igual". A continuación se muestra el código JavaScript equivalente.

![Screenshot2017-07-1220.22.50.png](68D791572098196733D1301DBC3AD230.png)

```text
if (input0 != 100) {
   console.log ('no es 100')}
else {
   console.log ('es 100')
}

```

!=
--

Usted puede recordar de la unidad anterior que el signo `!` Significa 'no' por lo tanto `!=` Significa ‘no es igual’

## 2.7. No es igual a (!=)

Le pasaremos un string.

* Si el string no es igual a ‘Bingo’ output ‘perdio’
* De lo contrario, output ‘exito!’

Utilice el `!=` en su condición.

```js

// Obtener argumentos de línea de comandos
Var testString = proceso.argv [2]

// Su código va aquí

```

[¡Revisalo!]()


## 2.8. Dos condiciones

Ahora veamos otro ejemplo. Mira el gráfico de Flode a la izquierda. Pase a través de la tabla y verá que funciona de la siguiente manera:

>

![Screenshot2017-07-1220.25.59.png](F47FA1181121E6DF09BBA962869EA162.png)

> Si el número es menor o igual a 100, output 'pequeño'. Si el número es mayor que 100  y también mayor que 200 el output es 'enorme', si no el output es 'grande'

Ahora haga clic en la pestaña del archivo `if2.js` en el panel izquierdo para ver cómo se escribiría el código JavaScript para hacer lo mismo.

```js

var number = 211

// Como está escrito en el gráfico de Flode
if (number <= 100) {
  console.log ('pequeño')
}
else if (number> 200) {
  console.log ('enorme')
}
else {
  console.log ('grande')
}

```

else if (de lo contrario si)
--------------------------------

Eche un vistazo a la segunda condición, se utiliza la siguiente instrucción:

```text
  else if (input0 > 200) {
      ...
```

El uso de `else if` significa que esta línea sólo se ejecutará si la primera condición `if` fue `false`.

Esta es la forma general en que JavaScript evalúa las sentencias `if`.

```text
if (condicion1) {hace algo} else if (condicion2) {hace otra cosa} else if (condicion3) {hace otra cosa} si no de otra manera {hace esto}
```

* Se evalúa la primera condición `if`. Si es cierto, entonces se ejecutará el bloque de código y la ejecución saltará al final de todas las condiciones `if / else`.
* Si es falso, entonces todas las condiciones `else if` serán evaluadas a su vez hasta que una de ellas tenga una condición    `true`.
* Si ninguna de las condiciones `if` o `else if` se evalúan como `true`, entonces el bloque de código `else` se ejecutará automáticamente (si se utilizara).

## 2.9. Corregir los errores

Corrige el código partido a la izquierda

* ¡Puede haber más de un error!
* Asegúrese de que su programa funcione en ambos casos: `str` es al inicio igual a ‘there’ y luego no es igual.

```js

// Obtener argumentos de la línea de comandos
input0 = "there" // prompt("input: ")

// Su código va aquí
if (input0 = 'there') {
  console.log (1)
}
else {
  console.log (0)

```

[¡Revisalo!]()


## 2.10. Corregir más errores

Corrige el código partido a la izquierda. Podría haber uno o más errores.

```js

// Obtener un input desde la línea de comandos
var text = "Bingo" // prompt("input: ")

if (texts != 'Bingo')
  console.log ('Perdió')
}
else {
  console.log ('Acertó!')

```

[¡Revisalo!]()

## 2.11. Los  `1` ó `0`

Se le proporciona un input  numérico que será 1 o 0.

Si el número es 1, el output es "prender", si es 0 el output es"apagar".

```js
// Obtener argumentos de la línea de comandos
// Asegúrese de que sean tratados como números
var N = "prender" // prompt("input: ")

// Su código va aquí

```
[¡Revisalo!]()

## 2.12. True o False (verdadero o falso)

Este desafío está al revés.

Le proporcionamos un input  de string que es "true" o "false". Debería dar de output un número 1 si es verdadero ‘true’ o 0 si es falso ‘false’.

```js
// Obtener argumentos de la línea de comandos
var inputText = "true" // prompt("input: ")

// Su código va aquí

```
