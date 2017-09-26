# Complex JavaScript in JSX

Volvamos al componente de la aplicación. Hasta ahora, has renderizado algunas variables primitivas en tu JSX. Ahora comenzará a renderizar una lista de elementos. La lista será de datos artificiales al principio, pero más tarde obtendrá los datos de una API externa. Eso será mucho más emocionante.
Primero hay que definir la lista de posiciones.

```js
import React, { Component } from 'react';
import './App.css';
const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
}, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
}, ];
class App extends Component {
  ...
}
```

Los datos artificiales reflejarán los datos que obtendremos más adelante de la API. Un elemento de la lista tiene un título, una URL y un autor. Además viene con un identificador, puntos (que indican cuán popular es un artículo) y un recuento de comentarios.

Ahora puede utilizar la funcionalidad de JavaScript `.map` incorporada en su JSX. Le permite iterar sobre su lista de elementos para visualizarlos. Como se mencionó anteriormente, usted usará  este tipo de código para encapsular la expresión JavaScript en su JSX.

```js
class App extends Component {
  render() {
    return (
      <div className="App">
        { list.map(function(item) {
          return <div>{item.title}</div>;
})}
</div> );
} }
export default App;
```

Eso es muy poderoso en JSX. Normalmente, es posible que haya utilizado  `.map` para convertir una lista de elementos a otra lista de artículos. Esta vez se utiliza map para convertir una lista de artículos a elementos HTML.

Hasta ahora, sólo se mostrará el título de cada elemento. Pero vamos a mostrar un poco más del artículo propiedades.

```js

class App extends Component {
   render() {
      return (
         <div className="App">
            {list.map(function(item) {
               return (
                  <div>
                     {" "}
                     <span>
                        <a href={item.url}>{item.title}</a>
                     </span>
                     <span>{item.author}</span>
                     <span>{item.num_comments}</span>
                     <span>{item.points}</span>
                  </div>
               );
            })}
         </div>
      );
   }
}
export default App;
```
Usted puede ver cómo la función `.map` está simplemente alineada en su JSX. Cada propiedad de artículo se muestra en una etiqueta <span>. Además, la propiedad url del ítem se utiliza en el atributo `href` de `<a>`.

React hará todo el trabajo por usted y mostrará cada elemento. Pero usted debe añadir un ayudante para React para aprovechar todo su potencial y mejorar su rendimiento. Debe asignar un atributo clave a cada elemento de la lista. De esta manera React es capaz de identificar elementos añadidos, modificados y eliminados cuando la lista cambia. Los elementos de la lista artificial ya vienen con un identificador.

```js
///... 
{
   list.map(function(item) {
      return (
         <div key={item.objectID}>
            <span>
               <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
         </div>
      );
   });
}
```

Debe asegurarse de que el atributo clave es un identificador estable. No cometa el error de usar el índice de ítems en el array. El índice del array no es estable. Por ejemplo, cuando la lista cambia su orden, React tendrá dificultades para identificar los elementos correctamente.

```js
// don't do this
{ list.map(function(item, key) { return (
    <div key={key}>
      ...
    </div> );
})}
```


