Al igual que hemos hecho antes, es hora de aplicar los conceptos aprendidos para resolver problemas.

A continuación tendrás varios problemas que debemos resolver. Intenta resolverlos primero por tu cuenta. Más abajo encontrarás las soluciones de ##. Después de haberlo intentado, compara tus soluciones con las de ##.

# 3. El Laberinto

Crear una web que implemente el juego del laberinto utilizando DOM y eventos. El juego del laberinto es un puzzle donde   un jugador interactua con un mapa del cual tiene que salir. 

> El problema del laberinto tiene raíces tan profundas como el mito griego sobre Teseo que fue enviado a un laberinto para matar al minotauro. Teseo usó una bola de hilo para ayudarle a encontrar su camino de regreso una vez que había terminado de la bestia.

Para interactuar con el jugador se hará uso de eventos de teclado y botones para poder mover el jugador. 

El problema del laberinto también implica implementar el algoritmo general para la búsqueda automática de un camino de salida para cualquier tipo de laberinto. 

Ver el video a continuación para ver más detalles.

[Video del Problema del Laberinto](media/15034081309333/run%20maze.mov)

## Solución
A continuación, se  explicará paso a paso cómo resolver el problema.

### [Paso 1. | El Problema]

Escribe un programa que represente un jugador en un laberinto y que  implemente el algoritmo de búsqueda de un camino de salida.

![](media/15034081309333/15034128157197.png)


Para que sea más fácil para nosotros, asumiremos que nuestro laberinto está dividido en "cuadrados". Cada cuadrado del laberinto está abierto o ocupado por una sección de pared. El jugador sólo puede pasar a través de los cuadrados abiertos del laberinto. Si el jugador se topa con una pared debe intentar una dirección diferente. 


### [Paso 2. | Identificando Objetos]

Es importante identificar los objetos presentes en el problema. Estos objetos están definidos por clases. Las clases presentes en la son los siguiente:
1. Maze: Clase que representa el Laberinto.
2. Player: Clase que representa el Jugador
3. MazeInterface: Clase que representa la interfaz de Juego.

Además es importante identificar Propiedades (datos) y Métodos (comportamiento) presentes. 

A continuación presentamos un diagrama que representa las clases así como las propiedades y métodos asociados. 

 ![Screen Shot 2017-08-22 at 9.05.56 A](media/15034081309333/Screen%20Shot%202017-08-22%20at%209.05.56%20AM.png)



### [Step 3. | Creando el Laberinto]

Para crear el Laberinto se puede usar un array de cadenas para poder representarlo. La notación que vamos usar para cada elemento dentro del mapa será la siguiente:
`*` Una pared
`_` Un espacio vacío
`o` Posición inicial del jugador
`W` Salida del laberinto. 
 
```js
const mazeMap = [
    "******************",
    "*_________*______*",
    "*_*****_____******",
    "*______***__*__*_*",
    "***_*____*____**_*",
    "*___*____**__*___*",
    "*_********__**_*_*",
    "*____*______*__*_*",
    "*_**_*__*****_**_*",
    "*o*__*________**W*",
    "******************"
];
```

Ese mapa se puede traducir en lo siguiente con la función de renderización  o dibujo adecuado: 

![Screen Shot 2017-08-22 at 10.17.30 A](media/15034081309333/Screen%20Shot%202017-08-22%20at%2010.17.30%20AM.png)


### [Step 4. | Añadiendo  Métodos]

Existen 5 métodos importantes  asociados al objeto `MazeInterface`:
1. `renderMaze()` : Renderizar o dibujar el mapa 
2. `resetEvent()` : Función asociado al evento de reiniciar el juego
3. `moveEvent()` : Función asociado al evento de avanzar  una posición hacía adelante
4.  `rightEvent()` : Función asociado al evento de rotar a la derecha
5. `leftEvent()` : Función asociado al evento de rotar a la izquierda
 

Existen 5 métodos importantes  asociados al objeto `Player`:

1. `turnLeft()` : rotar jugador a la izquierda
2. `turnRight()` : rotar jugador a la derecha
3. `moveForward()` : mover una posición hacia adelante
4. `canMoveForward()` : preguntar si se puede mover hacia adelante. Nota, solo se puede mover hacia adelante si no hay un bloque de la pared en frente o si no se encontrado la salida aun
5. `exitMaze()` : Algoritmo de búsqueda automática para encontrar un camino de salida para un laberinto cualquiera. 

Existen 3 métodos importantes  asociados al objeto `Maze`:

1. `isInBounds()` : verificar si el jugador esta en los bordes del mapa
2. `isValidDirection()` : verificar si la dirección actual del jugador es válido.
3. `canMove()` : verificar si el jugador se puede mover  una posición hacia adelante 

### [Step 5. | Que comience el juego...]

![](media/15034081309333/15034153834695.jpg)

### [Bonus. | Algoritmos de búsqueda]

Existen un método  importantes  asociados al objeto `Player`, `exitMaze()` que debe implementar un  procedimiento sistemático de búsqueda automática para encontrar un camino de salida para un laberinto cualquiera.   

Escriba un método keepHandOnSideWall () que permite que el jugador se mueva un paso adelante manteniendo la mano en la pared del lado izquierdo. Usted debe asegurarse de que eljugador siempre mantenga la mano en la pared.  

Ahora si puede escribir   el algoritmo para recorrer el laberinto paso a paso (usando keepHandOnSideWall ()) hasta encontrar  la salida. 

**Más información**
> Cuando el  jugadortiene una pared a la izquierda, hay tres situaciones a considerar, dependiendo de las paredes circundantes. La siguiente tabla muestra cada situación inicial, y donde debes dejar que tu jugador finalice después de un paso.
>  
  ![Screen Shot 2017-08-22 at 12.16.34 P](media/15034081309333/Screen%20Shot%202017-08-22%20at%2012.16.34%20PM.png) 



