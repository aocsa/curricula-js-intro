# Arrays

Usted ya ha estudiado arrays en la unidad Arrays de Flode, por lo que debe estar familiarizado con el concepto de arrays. (Si no ha completado la unidad Flode, le recomendamos que lo haga. Está disponible en el curso `Una Introducción a la Programación \> Flode`).

```js

// Crear una lista con edades
var edades = [12, 5, 68, 51, 62]

// Crear una lista con nombres
var nombres = ['Richard', 'Alice', 'Jennifer', 'Bob', 'Harry']

for (var indice = 0; indice < edades.length; indice ++) {
  console.log (nombres[indice] + 'es' + edades[indice])
}

```

[EJECUTE EL CÓDIGO]()

** Creación de arrays**

La creación de arrays en JavaScript funciona exactamente de la misma manera que en Flode.

*** Arrays de cadenas**

Crea un string de arrays como esta:

```
strArray = ['Alice', 'Shahneila', 'Bob,' Tariq ']
```

**Arrays de números**

Aquí hay un ejemplo de un array numérico:

```
numArray = [1, 3, 141, 5, 17,1, 100]
```

**Array vacío**

Si va a crear su propio array, entonces necesita crear una variable de array vacía antes de agregar cualquier dato a ella.

La forma correcta de crear una variable de array vacía es la siguiente:

```
numArray = []
numArray [0] = 4
```

Nota: el siguiente ejemplo fallará porque no se ha creado el array:

```
numArray [0] = 4
```

## Longitud de un array

Cada array tiene un número de elementos (valores o variables). Es importante conocer el número de elementos que tiene una array.

```js

// declare un array de números
var numeros = [1, 2, 3, 4, 5, 6]

// obtener la longitud del array
var longitudArray = numeros.length

// imprimir la longitud
console.log ('Longitud de [' + numeros + '] es:' + longitudArray)

```

[EJECUTE EL CÓDIGO]()

Mire el código de la izquierda, verás lo siguiente:

```
6  var longitudArray = numeros.length
```

Este código devuelve el número de elementos del array `numeros`.

Este código se utiliza a menudo en bucles para realizar un recorrido circular a través de todos los elementos de un array.

## Configurando elementos del array
 
Es fácil establecer un elemento de un array utilizando las mismas técnicas.

`numArray [4] = 50` establece el quinto elemento del array llamado` numArray` a `50`.

**Definiendo un array**

Si desea crear un array y ya sabe los elementos (que no es el caso a menudo), entonces usted puede hacerlo de esta manera.

```
numArray = [1, 55, 3, 16]
```

A menudo, no tendrás ningún elemento para comenzar y querrás agregarlos más tarde.

Si este es el caso, debe primero crear un array vacío como éste .

```
numArray = []
```

**Ejecutar el código**

Eche un vistazo al código de la izquierda.

```js
// Crear algunos arrays
var unusedArray = [1,2,3,4]
var unusedStrArray = ['Alice', 'Shahneila', 'Bob', 'Tariq']
var numArray = []

// Asignar algunos datos a los elementos 1 y 5
numArray [0] = 10
numArray [4] = 50

// Mostrarlos todos en la consola
for (var i=0; i < numArray.length; i++) {
    console.log (numArray[i])
}

```

[EJECUTE EL CÓDIGO]()

Esto muestra cómo:

1. Defina un nuevo array.
2. Asigne valores a los elementos del array (tenga en cuenta que no estamos asignando valores a los elementos * contiguos *).
3. Muestre cada elemento del array en la consola.

Cuando ejecute el código, observe cómo algunos de los elementos se muestran como * undefined *. La razón de esto es que sólo asignamos los elementos 0 y 4 \. JavaScript inserta automáticamente los elementos del array entre nosotros. Debido a que los elementos que JavaScript ha insertado son indefinidos, no tienen ningún valor asignado a ellos.

## push y pop

JavaScript tiene un par de métodos útiles para agregar elementos al final de un array. Se les llama push y pop.

```js

// Crear un array con algunos valores
var valores = [10, 20, 30, 40, 50, 60]

//ciclo de 0 a 2, empujando cada uno al final de la lista
for (var indice = 0; indice < 3; indice++) {
  valores.push (indice)
  console.log (valores)
}

console.log ('--- Remove  ')

//ciclo de 0 a 2, saliendo del final de la lista
for (var indice = 0; indice < 3; indice++) {
  valores.pop ()
  console.log (valores)
}

```

[EJECUTE SU CÓDIGO]()

### Push 

`valores.push(newElement)` se utiliza para agregar un nuevo elemento al final de una array. Imagínese como "estamos empujando un nuevo elemento al final de la array".

### Pop 

`valores.pop()` se utiliza para eliminar el último elemento de la array. Imagínese como "estamos haciendo estallar un elemento fuera del final de la array".

Ejecute el código para comprobar que entiende lo que está sucediendo.

## Unshift y shift 
 
Unshift y shift también son  métodos útiles para agregar o quitar elementos. Donde push y pop agregan y quitan elementos al * final * de un array, unshift y shift agregan y quitan elementos al * comienzo*.

```js

// Crear un array con algunos valores
var valores = [10, 20, 30, 40, 50, 60]

for (var indice = 0; indice < 3; indice++) {
  valores.unshift(indice)
  console.log (valores)
}

console.log ('--- Remove  ')

for (var indice = 0; indice < 3; indice++) {
  valores.shift()
  console.log (valores)
}

```

[EJECUTA TU CÓDIGO]()

### Unshift
 

`valores.unshift (newElement)` se utiliza para agregar un nuevo elemento al inicio de un array.

### Shift
 

`valores.shift ()` se utiliza para eliminar el primer elemento al principio de un array.

Ejecute el código para comprobar que usted entiende lo que está sucediendo.

    

