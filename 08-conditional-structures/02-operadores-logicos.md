
[¡Revisalo!]()

## 3. Operadores lógicos

Eche un vistazo a la tabla Flode a la izquierda. El gráfico contiene dos bloques condicionales donde se puede ver que se utiliza `and`(y)  y` or `(o).

![Screenshot2017-07-1220.29.53.png](3C66D3735FF4861679FB5FBAE11771C4.png)

A continuación se muestra el código JavaScript equivalente. Pruebe con diferentes valores para `number`.

```js
// Cambie el valor del número y pase a través del número
var number = -10
// un ejemplo de 'and'
if (number >= 10 && number < 100) {
  console.log ('número de 2 dígitos')
} else {
  console .log ('número de 1 dígito')
}
// ejemplo de 'o'
if (número < 0 || número >= 1000) {
  console.log ('Número inválido')}
else {
  console.log ('OK')
}
```

&& y ||
---------

Lo único nuevo es que cuando se utilizan operadores lógicos en JavaScript, no se puede escribir "and" y "or". Tienes que usar '&&' y '||'.

Aparte de esto, el `if / else` sigue exactamente los mismos principios.

## 3.1. `and` y `or` en el código


A la izquierda está el código JavaScript. Siéntase libre de jugar con esto, experimentar y probar cosas.

```js

// establece este número para probar tus valores booleanos
var number  = -10

// Primer bloque if
if (number > = 10 && number < 100 ) {
  console.log ('número de 2 dígitos')
}
else {
  console.log ('número de 1 dígito')
}

// Otro bloque if
if (number < 0 || number >= 1000) {
  console.log ('Número no válido')
}
else {
  console.log ('ok')
}
```

[EJECUTE SU CÓDIGO]()

## 3.2. Coches rápidos 1


Se le proporcionan 2 valores de input que determinan la velocidad de 2 coches.

Si cualquier coche está viajando en más de 70 entonces el output es 'carro rápido'.De lo contrario el output es 'ok'.

```js

// Obtener el input desde la línea de comandos
// Asegúrese de que sean tratados como números
var car1 = 12 // prompt("input: ")
var car2 = 15 // prompt("input: ")

// Su código va aquí

```

[¡Revisalo!]()


## 3.3. Coches rápidos 2


Se le proporcionan 2 valores de input que determinan la velocidad de 2 coches.

* Si ambos coches están viajando en más de 70 entonces el output es ‘2 carros rápidos’
* Si sólo un coche  se está moviendo a más de 70, el output es  '1 carro rápido'
* De lo contrario el output es 'ningún carro rápido'

```js

// Obtener las velocidades de nuestro carro desde la línea de comandos
// Trátelos como números
var speed1 = 13 // prompt("input: ")
var speed2 = 14 // prompt("input: ")

// Escribe tu código abajo

```

[¡Revisalo!]()

## 3.4. Categorías

Se le proporciona la edad de una persona y es necesario determinar en qué nivel escolar esta la persona.

* Si esta de 6 a 11 el output es escuela `primaria`
* Si esta de 12 a 18 el output es escuela `secundaria`
* Si es ninguno de los dos, a continuación, el output es `NA`

```js

// Obtenga los argumentos en la línea de comandos
var age = 14 // prompt("input: ")

// Su código va aquí

```

[¡Revisalo!]()


 
