# Interacciones con formularios y eventos

Añadamos otra interacción para experimentar formas y eventos en Reaccionar. La interacción es una función de búsqueda. La entrada del campo de búsqueda debe ser usada para filtrar su lista basada en la propiedad del título de un artículo.

Primero defina el campo de entrada en su JSX.

```js
class App extends Component {
   //...
   render() {
     return (
       <div className="App">
         <form>
           <input type="text" />
         </form>
         {
              this.state.list.map(item =>
                     // ...
           )} 
         </div>
    ); 
  }
}
```
En el siguiente escenario, escribirá en el campo y filtrará la lista temporalmente por el término de búsqueda. Para poder filtrar la lista, se necesita el valor del campo de entrada para actualizar el estado. Pero, ¿cómo se accede al valor? Puede utilizar eventos sintéticos en React para acceder a la carga útil del evento.

Definamos una función de devolución de llamada `onChange ()` para el campo de entrada.

```js
class App extends Component {
   //...
   render() {
      return (
         <div className="App">
            <form>
               <input type="text" onChange={this.onSearchChange} />{" "}
            </form>
            //...{" "}
         </div>
      );
   }
}
```
La función está ligada al componente y,  por lo tanto, vuelve a ser un método de clase. Tiene que vincular y definir el método.

```js
class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         list
      };
      this.onSearchChange = this.onSearchChange.bind(this);
      this.onDismiss = this.onDismiss.bind(this);
   }
   onSearchChange() {
      //...
   }
   //...
}
```
El argumento de método le da acceso al evento de React. El evento tiene el valor del campo de entrada en su objeto de destino. Ahora puedes manipular el estado del término de búsqueda:

```js
class App extends Component {
   //...
   onSearchChange(event) {
      this.setState({ searchTerm: event.target.value });
   }
   //...
}
```
Adicionalmente hay que definir el estado inicial del SearchTerm en el constructor.

```js
class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         list,
         searchTerm: ""
      };
      this.onSearchChange = this.onSearchChange.bind(this);
      this.onDismiss = this.onDismiss.bind(this);
   }
   //...
}
```

Ahora almacena el valor de entrada en su estado de componente interno cada vez que cambia el valor en el campo de entrada. Sin embargo, la lista no se actualiza todavía. Tiene que filtrar la lista temporalmente en función del término de búsqueda. Eso es bastante simple. Antes de asignar la lista, puede aplicarle un filtro. Ya ha utilizado la funcionalidad de filtro JavaScript incorporada.


```js
class App extends Component {
  //...
  render() {
    return (
      <div className="App">
        <form>
            <input
               type="text"
               onChange={this.onSearchChange}
            /> 
         </form>
        { this.state.list.filter(...).map(item => ... )}
      </div> );
   } 
}
```

Abordemos la función de filtro de una manera diferente esta vez. Queremos definir el argumento del filtro - la función - fuera de nuestro componente de clase ES6. Allí no tenemos acceso al estado del componente - por lo tanto no tenemos acceso a la propiedad searchTerm para evaluar el estado del filtro. Tenemos que pasar el SearchTerm a la función de filtro y tenemos que devolver una nueva función para evaluar la condición. Eso se llama una función de orden superior.

Normalmente no mencionaría funciones de orden superior, pero en un libro de React tiene sentido. Tiene sentido conocer las funciones de orden superior, porque React trata con un concepto llamado componentes de orden superior. Conocerás el concepto más adelante en el libro. Ahora de nuevo, vamos a centrarnos en la funcionalidad del filtro.

Primero tiene que definir la función de orden superior fuera de su clase.

```js
// ES5:
// La función toma el SearchTerm y devuelve otra función que toma una posición. 
// La función devuelta se utilizará para filtrar la lista según la condición definida en la función. 
 function isSearched(searchTerm) {
    return function(item) {
        return !searchTerm ||item.title.toLowerCase().includes(searchTerm.toLowerCase());
    } 
}
// ES6
const isSearched = (searchTerm) => (item) =>
!searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
```
La condición dice muchas cosas. La lista sólo se filtra cuando se fija un término de búsqueda. Cuando se establece un término de búsqueda, se ajusta el patrón de términos de búsqueda entrante con el título del elemento. Puede hacerlo con la funcionalidad JavaScript incorporada. Sólo cuando el patrón coincide, devuelve true y el elemento permanece en la lista. Pero ten cuidado con la coincidencia de patrones: no debes olvidarte de bajar ambas cuerdas en minúsculas. De lo contrario, habrá desajustes entre el término de búsqueda' redux' y el título del artículo' Redux'.

```js
class App extends Component {
   //...
   render() {
      return (
         <div className="App">
            <form>
               <input type="text" onChange={this.onSearchChange} />
            </form>
            {this.state.list.filter(isSearched(this.state.searchTerm)).map(
               item =>  ...
            )}
         </div>
      );
   }
}

// comentarios de codigo!
// ES5
string.indexOf(pattern) !== -1 
// ES6
string.includes(pattern)

```

