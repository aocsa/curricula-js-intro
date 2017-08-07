# Operadores Lógicos

Eche un vistazo al diagrama de flujo. El gráfico contiene dos bloques condicionales donde se puede ver que se utiliza `and` (Y lógico)  y `or` (O lógico).

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
[Ejecutar código]()

**`&& y || `**
 
Lo único nuevo es que cuando se utilizan operadores lógicos en JavaScript, no se puede escribir `and` y `or`. Tienes que usar `&&` y `||`.

Aparte de esto, el `if / else` sigue exactamente los mismos principios.

## `and` y `or` en código


A continuación se muestra el código JavaScript. Siéntase libre de jugar con este código, experimentar y probar nuevas cosas.

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
[Ejecutar código]()


## Coches rápidos 1

Se le proporcionan 2 valores del `input` que determinan la velocidad de 2 coches.

Si cualquier coche está viajando en más de 70km/h entonces el `output` es `'carro rápido'`.De lo contrario el `output` es `'ok'`.

```js

// Obtener el input desde la línea de comandos
// Asegúrese de que sean tratados como números
var car1 = 12 // prompt("input: ")
var car2 = 15 // prompt("input: ")

// Su código va aquí

```
[¡Revisar código!]()


## Coches rápidos 2


Se le proporcionan 2 valores de input que determinan la velocidad de 2 coches.

* Si ambos coches están viajando en más de 70 entonces el output es `'2 carros rápidos'`
* Si sólo un coche  se está moviendo a más de 70, el output es  `'1 carro rápido'`
* De lo contrario el output es `'ningún carro rápido'`

```js

// Obtener las velocidades de nuestro carro desde la línea de comandos
// Trátelos como números
var speed1 = 13 // prompt("input: ")
var speed2 = 14 // prompt("input: ")

// Escribe tu código abajo

```
[¡Revisar código!]()

## Categorías

Se le proporciona la edad de una persona y es necesario determinar en qué nivel escolar esta la persona.

* Si esta de 6 a 11 el output es escuela `primaria`
* Si esta de 12 a 18 el output es escuela `secundaria`
* Si es ninguno de los dos, a continuación, el output es `NA`

```js

// Obtenga los argumentos en la línea de comandos
var age = 14 // prompt("input: ")

// Su código va aquí

```
[¡Revisar código!]()


 


