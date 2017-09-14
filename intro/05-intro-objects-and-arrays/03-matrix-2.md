# Arrays en 2D explicados

Hasta ahora, has aprendido a usar array unidimensionales simples:

```
numArray = [1, 2, 3, 4, 5] strArray = ['Alice', 'Tariq', 'Bob']
```

En esta unidad, vas a aprender sobre array bidimensionales.

Los array con dos o más dimensiones pueden ser muy útiles. Los array bidimensionales son las más comunes, por lo que vamos a concentrarnos en ellas en esta unidad. Sin embargo, vale la pena saber para referencia futura que más dimensiones son posibles.

## Ejemplo

Imagine un aula con filas de escritorios, y en cada escritorio se sienta un estudiante. Piense en el array 2D como una cuadrícula, con filas que van de izquierda a derecha y columnas que suben y bajan. Se puede hacer referencia a cada elemento del array especificando la fila y la columna que deseamos seleccionar.

El primer elemento del array escritorios, `escritorios [0]` contiene un array con cuatro elementos, `['Adam', 'Ben', 'Carl', 'David']`.

[

 ['Adam', 'Ben,' Carl ',' David '],

 ['Edward', 'Frank', 'Georgia', 'Helen'],

 ['Isabelle', 'Joan', 'Kelly', 'Linda']

]

![Screenshot 2017-07-14 15.23.23.png](resources/89C7CA5C566D655F7B8E9AAF8ABC3D9C.png)

## Lectura de una matriz 2D
 
```js
// declarar nuestra variable
var escritorios = []

//
// establece las filas 0,1,2 para contener un array propio
//
escritorios[0] = ['Adam', 'Ben', 'Carl', 'David']
escritorios[1] = ['Edward', 'Frank', 'Georgia', 'Helen']
escritorios[2] = ['Isabelle', 'Joan', 'Kelly', 'Linda']


for (var fila = 0; fila < escritorios.length; fila++) {
var filaAlumnos= ''
	for (var columna = 0; columna < mesas [fila] .length; columna ++) {
		console.log ('fila [' + fila + ']col[' + column + ']=' + escritorios[fila][columna]);
	}
}

```

Echa un vistazo al código de la izquierda. Esto es lo que hace:

**Definir un array**
 
```
2 var escritorios= []
```

Para crear unn array 2D, llenamos un array regular `escritorios 'con un array para cada elemento.

Rellenar un array
-----------------

Hay un número de formas equivalentes de llenar la mismn array 2D.

En el código de ejemplo, el array 2D se ha llenado de esta manera:

```js

7 escritorios[0] = ['Adam', 'Ben', 'Carl', 'David']
8 escritorios[1] = ['Edward', 'Frank', 'Georgia', 'Helen']
9 escritorios[2] = ['Isabelle', 'Joan', 'Kelly', 'Linda']

```

Otra forma de rellenar un array 2D sería así, utilizando unn array de array:

```

escritorios= [
        ['Adam', 'Ben', 'Carl', 'David'],
        ['Edward', 'Frank', 'Georgia', 'Helen'],
        ['Isabelle', 'Joan', 'Kelly', 'Linda']
];

```

Para hacerlo más simple, todo en el ejemplo anterior podría ir en una sola línea, entonces el código sería así:

```js

var escritorios = [['Adam', 'Ben', 'Carl', 'David'],['Edward', 'Frank', 'Georgia', 'Helen'],['Isabelle', 'Joan', 'Kelly', 'Linda']];

```

**Lengths (longitudes)** 

Echa un vistazo al bucle exterior, utiliza `fila \<escritorios.length`. Esto nos dice la longitud de la primera dimensión.

```js
12 for(var fila = 0; fila < escritorios.length; fila++) {
```

Para el bucle interno, usamos `columna \< escritorios[fila] .length`.

```js
14 for (columna = 0; columna < escritorios[fila].length; columna++) {
```

Esto nos indica la longitud del array interno para la fila `fila`, es decir, el número de columnas de la fila actual.

**Bucle a través de todo** 

Puede ver que en realidad tenemos un *bucle anidado* dentro de otro bucle.

```js
12 for (var fila = 0; fila < desks.length; fila ++) {
```

* El primer bucle se itera a través de cada *fila*. Por lo tanto, cuando entra en el bucle por primera vez, se está agarrando datos para la primera fila.

```js
14 for (var columna = 0; columna < escritorios[fila].length; columna++) {
```

* El segundo bucle recorre entonces todas las * columnas *.

**Referencia de un elemento** 

Si hacemos referencia al array como `escritorios[1][2]` vamos a obtener el valor 'Georgia'. En esta sección hacemos referencia a la fila y columna que queremos imprimir.

```js
15 console.log('fila [' + fila + ']col[' + columna + '] =' + escritorios[fila] [columna]);
```

## Creación de un array 2D dinámica
 
Escribir código para crear arrays bidimensionales es lógico, pero puede ser un poco complicado. La gráfica de Flode a la izquierda ilustra un array 2D visualmente para tratar de hacer el concepto ¡un poco más fácil de entender!

## Avance en el gráfico
 
Utilice la función ‘Step’ para recorrer el gráfico Flode para que pueda ver exactamente cómo cambia la matriz `a2d` en cada etapa del proceso.

## Array 2D Dinamico en Javascript

Mira el ejemplo de código de la izquierda. El código crea un nuevo array y lo llena con algunas filas y columnas.

Cada ‘celda’ del array se llena cuando se ejecuta el código.

```js

// primero crear una matriz vacía 
// Esto nos da nuestra primera dimensión
var array = []

// Un par de variables por diversión
var filas = 5
var cols = 4

// Trabajamos a través de las filas primero, dimensión 1
for (var i = 0; i < filas; i++) {
  // Hacer un array vacío array[i] 
  // Esta es la segunda dimensión
  array[i] = []
  for (var j = 0; j < cols; j++) {
    // Ahora podemos escribir en una 'celda'
    // Podría leer [i] como la fila
    // y [j] como columna
    array[i][j] = i + ',' + j
  }
}

console.log (array)

```

[EJECUTE EL CÓDIGO]()

