# La sentencia 'break'

La instrucción `break` es una forma de escapar de un bucle antes de que se cumpla la condición del bucle.

La instrucción `break` no debería nunca necesitar ser usada. Cualquier programa que parece requerir una sentencia break puede ser reescrito para funcionar igualmente bien sin él.

Echa un vistazo al código de la izquierda. El código muestra un bucle que cuenta de 0 a 9\. Sin embargo, la sentencia `break` en el bucle está esperando para ver si el índice de bucle golpea a 7, y si lo hace, el bucle se sale inmediatamente.

Este es un ejemplo artificial, pero ilustra muy bien cómo funciona la ruptura.

```js

for (var i=0; i<10; i++ ) {
  console.log(i)
  if (i == 7) {
    break
  }
}
console.log ('Finalizado').
```

[EJECUTA EL CÓDIGO]()

## La instrucción 'continue'

La instrucción `continue` se utiliza para saltar sobre una iteración y continuar el bucle desde la parte superior.

El ejemplo de la izquierda muestra un bucle que salta mostrando el contador de bucle si es un número impar.

Como `break` en la página anterior,`continue` no debería ser necesaria bajo ninguna circunstancia normal. Cualquier código que parece requerir una instrucción de continuación podría volver a escribirse mejor sin ella.

```js

for (var i=0; i<10; i++) {
  if (i % 2 == 1) {
    continue
  }
  console.log (i)
}
console.log ('Finalizado').
```

[EJECUTE EL CÓDIGO]()

## Todo listo

¡Bien hecho!

En esta unidad has aprendido a usar bucles de control con `for` y `while`. Seguirá aprendiendo más acerca de los bucles de control en las siguientes unidades.


