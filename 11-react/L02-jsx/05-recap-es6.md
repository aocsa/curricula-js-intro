# Anexo: ES6

## Arrow Functions

JavaScript ES6 introdujo funciones de flecha. Una expresión de función de flecha es más corta que una expresión de función.

```js
// function expression
function () { ... }
// arrow function expression
() => { ... }
```

Pero hay que ser consciente de sus funcionalidades. Uno de ellos es un comportamiento diferente con el objeto `this`. Una expresión de función siempre define su propio objeto `this`. Las expresiones de la función de flecha todavía tienen el objeto `this` pero son heredadas del contexto del padre. No se confunda al usar esto en una función de flecha.

Hay otro hecho valioso acerca de las funciones de flecha con respecto al paréntesis. Puede eliminar el paréntesis cuando la función sólo recibe un argumento, pero tiene que mantenerlos cuando recibe varios argumentos.

```js
// allowed
item => { ... }
// allowed
(item) => { ... }
// not allowed
item, key => { ... }
// allowed
(item, key) => { ... }
```
Sin embargo, echemos un vistazo a la función `.map`. Puede escribirlo más concisamente con una función de flecha ES6.

```js

{
   list.map(item => {
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

## ES6 Classes

JavaScript ES6 introdujo clases. Una clase es comúnmente usada en lenguajes de programación orientados a objetos. JavaScript fue y es muy flexible en sus paradigmas de programación. Puede hacer programación funcional y programación orientada a objetos lado a lado para sus casos de uso particulares.

Aunque React abarca la programación funcional, por ejemplo con estructuras de datos inmutables, las clases se utilizan para declarar componentes. Se llaman componentes de clase ES6. Reaccionar mezcla las partes buenas de ambos paradigmas de programación.

Consideremos la siguiente clase de desarrollador para examinar una clase JavaScript ES6 sin pensar en un componente.

```js
class Developer {
   constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
   }
   getName() {
      return this.firstname + " " + this.lastname;
   }
}
```
Una clase tiene un constructor para hacerla instanciable. El constructor puede tomar argumentos para asignarlo a la instancia de clase. Además, una clase puede definir funciones. Debido a que la función está asociada con una clase, se llama método. A veces se hace referencia a él como un método de clase.
La clase Developer es sólo la declaración de clase. Puede crear varias instancias de la clase invocándola. Es similar al componente de clase ES6, que tiene una declaración, pero hay que utilizarlo en otro lugar para instanciarlo.
Veamos cómo se puede instanciar la clase y cómo se pueden utilizar sus métodos.

```js
const robin = new Developer('Robin', 'Wieruch'); console.log(robin.getName());
// output: Robin Wieruch
```
React utiliza clases JavaScript ES6 para componentes de clase ES6. Ya ha utilizado un componente de clase ES6.

```js
import React, { Component } from 'react';
//...
class App extends Component {
 render() {
      //... 
  }
}
```

La clase App se extiende desde Component. Básicamente se declara el componente App, pero se extiende desde otro componente. ¿Qué significa extenderse? En la programación orientada a objetos se tiene el principio de herencia. Se utiliza para pasar funcionalidades de una clase a otra.

La clase App amplía la funcionalidad de la clase Component. Para ser más específico, hereda funcionalidades de la clase Component. El componente se utiliza para extender una clase básica ES6 a una clase de componente ES6. Este dispone de todas las funcionalidades que un componente necesita tener. Una de estas funcionalidades, un método que ya ha utilizado: el método render (). Pero aprenderá más sobre más funcionalidades.

La clase Component encapsula todas las funcionalidades de React que un desarrollador no necesita ver.  Los métodos que expone un componente de React son la interfaz pública. Uno de estos métodos tiene que ser sobreescrito, los otros no necesitan ser sobreescritos.  

Ahora ya conoce los conceptos básicos acerca de las clases de JavaScript ES6 y cómo se usan en React para extenderlos a los componentes.  

-------

Has aprendido a poner en marcha tu propia aplicación React! 
Recapitulemos lo aprendido:

* create-react-app    para crear una aplicación React
* JSX mezcla HTML y JavaScript para definir componentes React 
* componentes, instancias y elementos son cosas diferentes.
* ReactDOM. render () es un punto de entrada para una aplicación React.
* Las funcionalidades JavaScript incorporadas pueden ser utilizadas en JSX.  `.map` se puede utilizar para mostrar una lista de elementos como elementos HTML - ES6
* Las funciones de flecha se pueden utilizar para acortar sus declaraciones de función. 
* Las clases se utilizan para definir componentes en React.



