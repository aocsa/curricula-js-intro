# Conceptos básicos de React

El capítulo le guiará a través de los fundamentos de Reaccionar. Cubre el estado y las interacciones en los componentes, porque los componentes estáticos son un poco apagados, ¿no? Además, aprenderá sobre las diferentes formas de declarar un componente y cómo mantener los componentes compostables y reutilizables. Prepárese para dar vida a sus componentes.

# Estado de los componentes 

El estado interno de los componentes le permite almacenar, modificar y eliminar propiedades de su componente. El componente de clase ES6 puede utilizar un constructor para inicializar el estado de componente interno. El constructor sólo se llama una vez cuando el componente se inicializa.

Presentemos un constructor de clases donde puede establecer el estado inicial del componente interno.

```js
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          list: list,
        }; 
    }
... 
}
```
En su caso, el estado inicial es la lista artificial de elementos. Tenga en cuenta que tiene que llamar a super (props); para llamar al constructor de la clase Component extendida. Es obligatorio, porque pone esto. puntales en tu constructor. Usted debe seguir la mejor práctica, de lo contrario podría encontrar errores en el futuro.

El estado está ligado a la clase con este objeto. Puede acceder al estado del componente. Por ejemplo, se puede utilizar en el método render (). Antes, había asignado una lista estática de elementos. Ahora está a punto de utilizar la lista del estado de sus componentes internos.

```js
class App extends Component {
   //...
   render() {
      return (
         <div className="App">
            {this.state.list.map(item => (
               <div key={item.objectID}>
                  <span>
                     <a href={item.url}>{item.title}</a>
                  </span>
                  <span>{item.author}</span>
                  <span>{item.num_comments}</span>
                  <span>{item.points}</span>
               </div>
            ))}
         </div>
      );
   }
}
```
La lista forma parte del componente ahora. Reside en el estado de componente interno. Podrías añadir artículos, cambiarlos o eliminarlos de tu lista. Cada vez que cambie el estado de sus componentes, el método render () de su componente volverá a ejecutarse. Así es como puede simplemente cambiar el estado de sus componentes internos y asegurarse de que el componente se vuelve a renderizar.

Pero ten cuidado. No mute el estado directamente. Tiene que usar un método llamado `setState ()` para modificar su estado. Lo conocerá en el siguiente capítulo.



