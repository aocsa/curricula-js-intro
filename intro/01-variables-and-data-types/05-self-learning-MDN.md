# Auto-aprendizaje: manipulando strings  

## Objetivos de Aprendizaje

- Conocer la documentación MDN y la importancia del auto-aprendizaje.
- Aprender a manipular `strings`  en JavaScript.

***

## Aprendiendo sobre `string.length`

En el mundo de la tecnología, el **auto-aprendizaje** es esencial. Constantemente salen herramientas, lenguajes o tecnologías nuevas que debes aprender por tu cuenta para mantenerte al día. Por eso, es importante que, desde los inicios de tu camino en el mundo del código, te acostumbres a aprender por tu cuenta y a tomar el control de tu desarrollo profesional.

Internet es un excelente recurso para aprender por tu cuenta. Es como una gran biblioteca de conocimiento siempre a tu disposición. Veamos un ejemplo:

En JavaScript existe una forma fácil de obtener la longitud de un `string` que te devuelve la cantidad de caracteres que componen el `string`. Por ejemplo, la longitud de _'hola'_ es 4 (porque son 4 caracteres) y la de _"supercalifragilisticexpialidocious"_ es 34 (porque son 34 caracteres).

¿Cómo podemos aprender sobre esto? Empieza abriendo Google y realizando una búsqueda con algo como: _"obtener la longitud de un string en JavaScript"_. Esto nos dará varios resultados que nos pueden ayudar.

<!-- links_blank
Seguramente uno de los resultados es de **La Red de Desarrolladores de Mozilla (MDN)**. Ésta fuente es una de las fuentes más confiables para investigar sobre JavaScript. De hecho, el creador de JavaScript, [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich), es uno de los fundadores del Mozilla Foundation y el Mozilla Corporation. Como dice directamente la web de [MDN](https://developer.mozilla.org/es/docs/MDN/About):
-->
Seguramente uno de los resultados es de **La Red de Desarrolladores de Mozilla (MDN)**. Ésta fuente es una de las fuentes más confiables para investigar sobre JavaScript. De hecho, el creador de JavaScript, <a href="https://en.wikipedia.org/wiki/Brendan_Eich" target="_blank">Brendan Eich</a>, es uno de los fundadores del Mozilla Foundation y el Mozilla Corporation. Como dice directamente la web de <a href="https://developer.mozilla.org/es/docs/MDN/About" target="_blank">MDN</a>:
> MDN es una plataforma de aprendizaje para las tecnologías Web y el software con el que funciona la Web, incluyendo:

>1. Estándares Web como CSS, HTML, y JavaScript.
>2. Desarrollo de aplicaciones para Web Abierta.
>3. Desarrollo de complementos para Firefox.
>4. Desarrollo de Firefox OS.
<!-- links_blank
Lee con detenimiento la sección de [string.lenght](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/length) que te ofrece MDN. Quizás no entiendas absolutamente todo (especialmente todo lo referente a UTF-16), pero eso está bien. Debes poder manejar ese sentimiento y avanzar con un poco de incentidumbre. Revisa el ejemplo con calma; parece bastante claro cómo es el tema de obtener la longitud de un `string`:
-->

Lee con detenimiento la sección de <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/length" target="_blank">string.lenght</a>  que te ofrece MDN. Quizás no entiendas absolutamente todo (especialmente todo lo referente a UTF-16), pero eso está bien. Debes poder manejar ese sentimiento y avanzar con un poco de incentidumbre. Revisa el ejemplo con calma; parece bastante claro cómo es el tema de obtener la longitud de un string:

```js
var x = "Mozilla";
var empty = "";

console.log("Mozilla tiene " + x.length + " caracteres.");
/* "Mozilla tiene 7 caracteres" */

console.log("La cadena vacia tiene una longitud de " + empty.length);
/* "La cadena vacia tiene una longitud de 0" */
```

Nota: console.log() Es un comando que muestra un mensaje en la consola para facilitar la depuración del código Javascript. La ventaja de usarlo en comparación con, por ejemplo, la función alert(), es que console.log() no detiene la ejecución del código hasta que el usuario acepta el mensaje de alerta como sí sucede con alert().

Después de leer la documentación debería quedar claro que para conocer la longitud de strings, lo que debemos es colocarle un _.length_ al final, así:

```js
var shortWord = 'hola'
var longWord = "supercalifragilisticexpialidocious"

// Determinar longitud de cada string

var lengthShortWord = shortWord.length;
var lengthLongWord = longWord.length;

// Imprimir en la consola

console.log(lengthShortWord);
// returns > 4
console.log(lengthLongWord);
// returns > 34

// también podemos imprimir directo en la consola, así:
console.log('hola'.length);
// returns > 4
"supercalifragilisticexpialidocious".length;
// returns > 34
```


## Más sobre expresiones de  cadenas 

Mira el diagrama de flujo de abajo. Si lo revisa, verá cómo se maneja los strings. En la siguiente página, aprenderá cómo hacer lo mismo usando  código.

Al pasar por el gráfico, puede ver qué sucede con las variables después de cada operación.

![Screenshot 2017-07-12 13.25.23.png](A902CDBB2A2958B283F8419EE6D1783F.png)

### Código equivalente

Abajo se puede ver el código equivalente al diagrama de flujo anterior.

Como puede ver, es exactamente casi lo mismo.

```js

var str = 'Hola' 		             // Crear una variable de cadena
var newStr = str + 'mundo!'   	 // '¡Hola Mundo!'
console.log(newStr)		         // output

newStr = '123' + 10		          // '12310'
console.log(newStr) 		       // output

newStr = '123' + '456' 		     // '123456'
console.log (newStr)		       // output

```
[Ejecutar Código]()

### Concatenando Strings

Le estamos proporcionando una cadena como entrada para su programa.

Su tarea es agregar el string: `, que tal!` al string que le proporcionamos.

¡Asegúrese de incluir el espacio después de la coma!

```js

// Obtener el input desde la línea de comandos
var inputText =  "Alex"// prompt("input: ") 

// Su código va aquí

```
[Revisar Código]()

### Unirse a más strings

Le proporcionaremos 2 strings a su programa.

Su trabajo es unir los strings para obtener un solo string con un espacio entre los dos strings originales.

Éste es un caso común en la codificación y usted tendrá que crear su string uniendo los inputs y añadiendo el espacio en el medio.

```js

// Obtener un input desde la línea de comandos
var string1 = "sumar" // prompt("input: ") 
var string2 = "strings" // prompt("input: ") 

// Su código va aquí


```
[Revisar Código]()


## Practicando el auto-aprendizaje

Ahora que ha quedado demostrado el _"súper poder del auto-aprendizaje"_, lee en MDN otras cosas interesantes que podemos hacer con `strings` y `numbers`, como:

<!-- links_blank_old
1. [Obtener un caracter específico de un string](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charAt)
2. [Obtener el índice de un caracter de un string](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/indexOf)
3. [Convertir a mayúsculas un string](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/toUpperCase)
4. [Convertir a minúsculas un string](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/toLowerCase)
5. [Cortando un string](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/slice)
6. [Convertir un string en un número](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) **nota**: este artículo está en inglés. Intenta leerlo con ayuda del [traductor de Google](https://translate.google.com/)
-->

1. <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charAt" target="_blank">Obtener un caracter específico de un string</a>
2. <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/indexOf" target="_blank">Obtener el índice de un caracter de un string</a>
3. <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/toUpperCase" target="_blank">Convertir a mayúsculas un string</a>
4. <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/toLowerCase" target="_blank">Convertir a minúsculas un string</a>
5. <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/slice" target="_blank">Cortando un string</a>
6. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt" target="_blank">Convertir un string en un número</a>
**nota**: este artículo está en inglés. Intenta leerlo con ayuda del <a href="https://translate.google.com/" target="_blank">traductor de Google</a>

Al final de estas lecturas, debes saber muy bien cómo funcionan:

- `charAt()`
- `indexOf()`
- `toUpperCase()`
- `toLowerCase()`
- `slice()`
- `parseInt()`

## Otros recursos de auto-aprendizaje

Si aún tienes dudas de estos conceptos, podrías explorar otras formas de auto-aprendizaje:

<!-- links_blank
1. Busca otros recursos en la web. Uno muy bueno es [stackoverflow](https://es.stackoverflow.com/) (aunque en español suele haber menos contenido de calidad, así que quizás tengas que apoyarte con el traductor de Google)
2. Realiza una consulta en uno de los grupos de Facebook [(ver bienvenida)](https://github.com/Laboratoria/curricula-js/blob/intro-js/01-intro/01-introduction/00-welcome-and-orientation.md)
3. Consulta con una amiga que sepa de programación :)
-->

1. Busca otros recursos en la web. Uno muy bueno es <a href="https://es.stackoverflow.com/" target="_blank">stackoverflow</a>. En español suele haber menos contenido de calidad, así que quizás tengas que apoyarte con el traductor de Google.
2. Realiza una consulta en uno de los grupos de Facebook [(ver bienvenida)](http://js-intro.laboratoria.la/)
3. Consulta con una amiga que sepa de programación :)

**NOTA: Es importante NO avanzar si no has logrado comprender bien los conceptos anteriores. Lo que continúa de este curso se construye sobre estos conceptos, así que tómate el tiempo para aprender bien antes de avanzar.**

***

[Continuar](04-comments.md)


