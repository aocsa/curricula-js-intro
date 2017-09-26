# `JSX`

## ¿Qué es y para qué sirve?

`JSX` es una extensión al lenguage JavaScript, que agrega estructuras
sintácticas que nos permiten trabajar más fácilmente y de una manera más natural
con el código de `React`.

Gracias a `JSX,` desarrollar interfaces con componentes se vuelve tan natural
como escribir `HTML`.

## Migrando a JSX

Por ejemplo, si tomamos el siguiente código de la lección anterior:

```javascript
function Cabecera(props) {
  const titulo = 'Saludo';

  return React.DOM.div({ style: { borderColor: 'red' } },
    React.DOM.h2(null, titulo),
    React.DOM.p(null,
      "Hola ", React.DOM.b(null, props.saludo), ".", React.DOM.br(null),
      "Un link? ", React.DOM.br(null),
      React.DOM.a({ href:"http://laboratoria.la" }, "Laboratoria"), "!"
    )
  )
}

ReactDOM.render(
  Cabecera({ nombre: 'Mundo' }),
  document.getElementById('cabecera')
);
```

Con `JSX` lo expresaríamos de la siguiente manera:

```javascript
function Cabecera(props) {
  const titulo = 'Saludo';

  return (
    <div style={{ borderColor: 'red' }}>
      <h2>{titulo}</h2>
      <p>
        Hola <b>{props.saludo}</b>. <br />
        Un link? <br />
        <a href="http://laboratoria.la">Laboratoria</a>
      </p>
    </div>
  )
}

ReactDOM.render(
  <Cabecera nombre="Mundo" />
  document.getElementById('cabecera')
);
```

Mucho más elegante, ¿verdad?


## Expresiones

Fíjate como injectamos [expresiones `javascript`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) dentro de nuestros tags, usando llaves (`{}`), en este caso `titulo`
```javascript
const titulo = 'Saludo';

return (
  // ...
    <h2>{titulo}</h2>
  // ...
)
```

Todas las siguientes son expresiones válidas: `2 + 2`, `user.email`, `formatDate(new Date())`
 
## Ejercicio: Migrar a `JSX`

Nuestro primer paso será configurar nuestra página, para que comience a entender
`JSX`. Hay varias formas de hacer esto, pero nosotros lo que haremos es incluir
una dependencia a un script de `babel`, que entre otras cosas entiende `JSX` y
crearemos nuestro `script`, con una anotación especial, para que `babel`
entienda que es su responsabilidad procesarlo.

Entoces, necesitamos agregar la siguiente dependencia

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script>
```

Y anotar nuestro tag `script`, como type `text/babel`

```html
<script type="text/babel">
  // aqui el codigo de tus componentes
</script>
```

Si refrescas tu página, nada debería haber cambiado, ya que todo el código ES5
es compatible con ES6.

Terminada la configuración, ahora nuestra tarea será deshacernos de todas las
referencias a `React.DOM` y las llamadas directas a nuestros componentes,
reemplazando todas ellas por código `JSX`.

Entonces, por ejemplo, el siguiente código

```javascript
function Header(props) {
  return DOM.header(null,
    DOM.h1(null, props.titulo),
    DOM.p(null, props.descripcion)
  )
}
```

se convierte en

```javascript
function Header(props) {
  return (
    <header>
      <h1>{props.titulo}</h1>
      <p>{props.descripcion}</p>
    </header>
  )
}
```

y

```javascript
const articles = props.articles.map(function(it) {
  return Article(it)
})
```

se convierte en

```javascript
const children = props.articles.map(function(a) {
  return <Article titulo={a.titulo} descripcion={a.descripcion} />
})
```


##   Ejemplo JSX con create-react-app

Como he mencionado antes, create-react-app ya ha puesto en marcha una aplicación de ejemplo. Todos los archivos vienen con implementaciones predeterminadas. Vamos a sumergirnos en el código fuente.
El único archivo que tocarás al principio será el `src/App.js`.

```js
import React, { Component } from 'react'; import logo from './logo.svg';
import './App.css';
class App extends Component { 
    render() {
        return (
        <div className="App">
                <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
        </div> );
    } 
}
export default App;
```

No se deje confundir por las declaraciones de `import/export` y la declaración de clase. Estas características ya son JavaScript ES6. Los revisaremos en un capítulo posterior.

En el archivo tiene un componente de clase ES6 con el nombre App. Es una declaración de componentes. Básicamente, después de haber declarado un componente, puede utilizarlo como elemento en todas partes de su aplicación. Se producirá una instancia de su componente o, en otras palabras: el componente se instanciará.

El elemento que devuelve se especifica en el método `render ()`. Los elementos son de lo que están hechos los componentes. Es útil entender las diferencias entre componente, instancia y elemento.

Muy pronto verás donde se usa el componente App. De lo contrario, no vería la salida renderizada en el navegador, ¿verdad? El componente App es sólo la declaración, pero no el uso. Instanciarías el componente en algún lugar de tu JSX con `<App />`.

El contenido en el bloque de render se parece bastante a HTML, pero es JSX. JSX le permite mezclar HTML y JavaScript. Es poderoso pero confuso cuando se está acostumbrado a HTML simple. Por eso, un buen punto de partida es utilizar HTML básico en su JSX. A continuación puede empezar a incrustar expresiones JavaScript entre medio.

```js
import React, { Component } from 'react';
import './App.css';
class App extends Component {
    render() {
        var helloWorld = 'Welcome to the Road to learn React';
        return (
           <div className="App">
                 <h2>{helloWorld}</h2>
            </div> );
    } 
}
export default App;
```
Además, es posible que haya notado el atributo `className`. Refleja el atributo de clase CSS. Debido a razones técnicas, JSX tuvo que reemplazar un puñado de atributos HTML internos. Puede encontrar todos los atributos HTML compatibles en la documentación https://facebook.github.io/react/docs/dom-elements.html. En tu camino para aprender React te encontrarás con más atributos JSX.


## ReactDOM 

Antes de continuar con el componente App, es posible que desee ver dónde se utiliza. Se encuentra en su punto de entrada al mundo React: el archivo `src/index.js`.

```js
import React from 'react'; 
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Básicamente ReactDOM. render () utiliza un nodo DOM en su HTML para reemplazarlo con su JSX. Así es como se puede integrar fácilmente React en cualquier aplicación. No está prohibido utilizar ReactDOM. render () varias veces a través de su aplicación. Puede utilizarlo en múltiples lugares para iniciar una sintaxis JSX simple, un componente React, varios componentes React o una aplicación completa.

ReactDOM. render () espera dos argumentos.

El primer argumento es JSX que se renderiza. El segundo argumento especifica el lugar donde la aplicación React se engancha a su HTML. Espera un elemento con un `id=' root'`. Puede abrir su archivo `public/index.html` para encontrar el atributo `id`.

En la implementación ReactDOM. render () ya toma su componente App.  

```js
// Otro ejemplo con ReactDOM
ReactDOM.render(
  <h1>Hello React World</h1>,
  document.getElementById('root')
);
```

