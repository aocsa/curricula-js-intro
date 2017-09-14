# Introducción  

## Objetivos de Aprendizaje
- Entender qué se entiende por _conditions_ (condiciones) en JavaScript
- Conocer  como indentar código
- Aprender cómo combinar y transformar condiciones con operadores lógicos y valores boleanos en JavaScript

> El texto a continuación se basa en gran medida, con ciertos ajustes, en el capítulo 2 de [Eloquent JavaScript](http://eloquentjavascript.net/), de Marijn Haverbeke, 2014.


## Ejemplo de condición

Esta unidad trata de usar sentencias condicionales en JavaScript.

Aquí hay un buen ejemplo:

```js
var number = 123   // prompt("input: ")

if (number >= 10 && number < 100) { // 1. si el número es de 2 dígitos
  console.log('número de 2 dígitos')
}
else if (number >= 100) { // 2. De lo contrario, si hay más de 2 dígitos
  console.log ('número de dígitos múltiples')  
}
else { // 3. de lo contrario
  console.log ('número de 1 dígito')	// este debe ser un número de un solo dígito
}
```
[Ejecutar código]()

**Si** el número es mayor o igual a 10 y  el número es menor que 100, **entonces** mostrar `número de 2 dígitos` **de lo contrario si** el número es mayor o igual a 100 entonces mostrar `número de dígitos múltiples` **de lo contrario**  mostrar `número de 1 dígito`.

## Experimenta

Esta sección se proporciona para que pruebe cualquier código que desarrolle. Úselo para experimentar y practicar.

Hay un código de inicio proporcionado para usted.  

```js

// Escribe el código de experimento a continuación

console.log ('su archivo de experimento')

```
[Ejecutar código]()


