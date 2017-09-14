Al igual que hemos hecho antes, es hora de aplicar los conceptos aprendidos para resolver problemas.

A continuación tendrás varios problemas que debemos resolver. Intenta resolverlos primero por tu cuenta. Más abajo encontrarás las soluciones de del problema. Después de haberlo intentado, compara tus soluciones con las del **repositorio oficial**.

## El Laberinto

Crea una página web que implemente el juego del Laberinto utilizando DOM y eventos. El juego del laberinto es un divertido Puzzle donde podrás darle a cualquier jugador la capacidad de interactuar con el mapa hasta encontrar la salida. 

> El laberinto tiene raíces tan profundas como el mito griego sobre Teseo, que fue enviado a un laberinto para matar al minotauro. Teseo usó una bola de hilo para ayudarse a encontrar su camino de regreso, una vez que había terminado con la bestia.

![GitHub set up-w800](http://photos1.blogger.com/blogger/6613/878/1600/laberinto04.jpg)

El jugador para interactuar con Teseo tendrá que hacer uso de botones (clicks) para poder mover  y ayudar a Teseo  en su búsqueda de la salida. Este divertido juego tiene un **bonus** el cual consiste  en  implementar el algoritmo para la búsqueda de un camino de salida para cualquier tipo de laberinto. 

### Tips para la solución
A continuación, encontrarás tips que podrían ayudarte con la solución, mucha suerte!

#### [Tip 1. | El Programa]

Crea un programa que represente un Teseo en un Laberinto y que implemente el algoritmo de búsqueda de un camino de salida.

Para que sea más fácil para nosotros, asumiremos que nuestro laberinto está dividido en "cuadrados". Cada cuadrado del laberinto está abierto u ocupado por una sección de pared. Teseo sólo puede pasar a través de los cuadrados abiertos del laberinto. Si Teseo se topa con una pared debe intentar una dirección diferente. 


#### [Tip 2. | Creando el Laberinto]

Para crear el Laberinto se puede usar un array de cadenas para poder representarlo. La notación que puedes usar para cada elemento dentro del mapa son las siguientes:

1. `*` Una pared
2. `_` Un espacio vacío
3. `o` Posición inicial del jugador
4. `W` Salida del laberinto. 

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

Ese mapa se puede traducir en lo siguiente con la función de renderización/dibujo adecuado: 

![GitHub set up-w400](media/15034081309333/Screen%20Shot%202017-08-22%20at%2010.17.30%20AM.png)

#### [Tip 3. | Identificando Objetos y Funciones]

Es importante identificar los objetos presentes. Si hacemos un análisis a la imagen anterior nos daremos cuenta que los objetos presentes son los siguientes: 
1. Maze: Objeto que representa el Laberinto.
2. Player: Objeto que representa a Teseo
3. MazeInterface: Objeto que representa la interfaz de Juego usando DOM.

Además es importante identificar propiedades asociadas a estos objetos así como las  principales funciones  presentes. A continuación presentamos la interfaz del código de estos objetos y funciones. 


```js

var maze = {
    matrix: undefined, // representa el mapa del laberinto  
    startX: undefined,  // posición x inicial del laberinto
    startY: undefined,  // posición y inicial del laberinto
    endX: undefined,  // posición x que representa la salida
    endY: undefined,// posición y que representa la salida
    startOrientation: undefined // orientación inicial 
};

var player  = {
    x: undefined, // posición x actual del jugador
    y: undefined, // posición x actual del jugador
    orientation: undefined // orientación actual del jugador
};
const Orientation = {
    LEFT: 1,
    UP: 2,
    RIGHT: 3,
    DOWN: 4
  };

var mazeInterface = []; // representa la inferfaz usando DOM del laberinto

function renderMaze (maze, player); // dibujar laberinto
function setStyleAt (maze, x, y, style); // establecer estilo en la posición x, y

function isWall (maze, x, y); // preguntar si (x,y) representa un muro, es decir  '*'
function isSpace (maze, x, y); // preguntar si (x,y) representa un espacio vacio, es decir  '_'
function isEnd (maze, x, y); // preguntar si (x,y) representa la salida del laberinto, es decir 'W'

function turnLeft (player) ; //  rotar a la izquierda
function turnRight (player) ; //  rotar a la derecha
function moveForward(player) ; //  mover una posición hacia adelante en la dirección de player.direction 

function exitMaze (player); // Algoritmo de búsqueda para encontrar un camino de salida para un laberinto cualquiera
```
 
 
#### [Bonus. | Algoritmos de búsqueda]

Finalmente, podrás obtener un bonus si consigues crear un procedimiento  de búsqueda automática para encontrar un camino de salida para un laberinto cualquiera. 

**TIP 1:** Escribe un método  que permita que Teseo se mueva un paso adelante manteniendo la mano en la pared del lado izquierdo. Debes asegurarte que Teseo siempre mantenga la mano en la pared. 

**TIP 2:** Cuando Teseo tiene una pared a la izquierda, hay dos situaciones a considerar, dependiendo de las paredes circundantes. La siguiente tabla muestra cada situación.
  
![GitHub](media/15034081309333/Screen%20Shot%202017-08-22%20at%2012.16.34%20PM.png) 
 

