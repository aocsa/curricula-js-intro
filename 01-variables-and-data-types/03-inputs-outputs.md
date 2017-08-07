# Entradas y salidas

La forma en que se maneja las entradas y salidas en código es muy similar a los diagramas de flujo.

Haga clic en el botón de abajo para **Ejecutar Código**. Los resultados del programa aparecerán justo debajo del botón.

```js

// Obtener la entrada desde la línea de comandos
var digit1 = 123 // prompt ()
var digit2 = 324 // prompt ()
var digit3 = 546 // prompt ()

// Las variables digit1, digit2 y digit3 ahora están siendo asignadas
// valores pasados al programa.

// Haga algo matemático
var num = digit1 * (digit2 + digit3)

// la variable num ahora contiene el  resultado de la expresión matemática

// Imprimir algunos resultados (outputs)
console.log ('Nuestros resultados:')
console.log ('digit1 =' + digit1)
console.log ('digit2 =' + digit2)
console.log ('digit3 =' + digit3)
console.log ('num =' + num)
```
[Ejecutar Código]()

## Inputs (Entradas)

Usted obtendrá un input (entrada) para su código usando la función `prompt()`. JavaScript hace esto fácil, proporcionando acceso a los argumentos de línea de comandos como éste:

```
var digit1 = prompt("input 1") 
var digit2 = prompt("input 2")
var digit3 = prompt("input 3")
```

Usted aprenderá más sobre cómo funciona esto más adelante.  

## Outputs (Salidas)

Para emitir datos, utilice la función `console.log ()`. Esta función puede contener cualquier expresión JavaScript válida.

## Errores comunes

A menudo cometerá errores al escribir código. Pronto se acostumbrará a esto, lo importante es desarrollar la habilidad de aprender a entender los errores y luego arreglarlos (debugging o depuración).

Mire el código de abajo. Este código contiene un error de sintaxis simple.

Ahora presione el botón de abajo para **ejecutar código**.

```js
// Obtener inputs desde la línea de comandos
var digit1 = 123 // prompt("input ") 
var digit2 = 324 // prompt("input ") 
var digit3 = 546 // prompt("input ") 

// Existe un error en ésta línea
var num =  digit1 +  digit4

//Output
console.log ('digit1 = ' + digit1)
console.log ('digit2 = ' + digit2)
console.log ('digit3 = ' + digit3)
console.log ('num = ' + num)

```
[Ejecutar Código]()

Cuando ejecute el código, verá aparecer un error

### Entendiendo el error

El error parece bastante hostil. Sin embargo, si lee el error cuidadosamente y mira hacia atrás a través de su código, debería ser capaz de averiguar qué hacer para solucionarlo. Echa un vistazo a la siguiente explicación.

Este es el mensaje de error:

```
ReferenceError: digit4 is not defined (digit4 no esta definido)

```

Vamos a analizar el error:

* `ReferenceError:` Esto simplemente nos dice que hay un error.
* `digit4 is not defined` Esto nos dice que la variable`digit4` no está definida en ninguna parte de nuestro código aunque hemos intentado usarlo.

La información que viene debajo de esas líneas iniciales es realmente para situaciones de depuración más avanzadas y puede ignorarse de forma segura por ahora.

## Experimentos

Esta ventana se proporciona para que pruebe cualquier código que desarrolle. Úselo para experimentar y practicar.

Hay un código de inicio proporcionado para usted. Este código se explicará en las siguientes páginas.

```js
// Escriba algún código abajo
console.log ('Experimentos')

```
[Ejecutar Código]()

---- 

