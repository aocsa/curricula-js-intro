# Desafíos
 
Ahora ya está listo para probar algunos desafíos y probar su conocimiento de funciones.

**Probando tus functions**
 
En estos desafíos, escribirá las funciones que serán llamadas para usted. Puede probar estos directamente en su código como se muestra en el ejemplo anterior:

```js
// calcular el volumen de un cilindro
function volumenCilindro( radio, altura) {
  return Math.PI * radio * radio * altura
}

console.log ('r = 10, h = 20. => V = ' + volumenCilindro(10, 20))
```
Puede llamar a su function en cualquier lugar fuera de la function como `value = volumeCilindro(10,20)` lo hace arriba.

##  Número Entero aleatorio
 
### Número entero aleatorio

Escribe una function llamada `aleatorioEntero` que toma dos parámetros numéricos` min` y `max` y retorna un valor entero aleatorio entre` min` y `max`.

```js
`
// Escribe tu código aquí


function aleatorioEntero (min, max) {
  
  return Math.random() * (max - min) + min;
}
```
`
[¡Revisalo!]()()

## Perseguir rojo

### Es rojo

Escribe una function `isRed` que toma una cadena` str` y determina si la cadena contiene la palabra 'red'. Si devuelve `true`, volverá` false`.

Tendrás que usar el método `str.lastIndexOf ('characters to look for')` o `str.indexOf ('characters to look for')` que devuelve un índice válido si se encuentra la cadena o `-1` si No lo fue.

```js
`
// Escribe tu código aquí

function esRojo(str) {
  
  if (str.indexOf ("rojo") \>= 0)
    return verdadero;
  return false;
}
```
`
[¡Revisalo!]()()


