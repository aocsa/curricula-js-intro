# Matrices

Usted va a aprender acerca de los array bidimensionales (2D) estudiando algunas teorías e intentando los retos dados.

Aquí hay un ejemplo de datos bidimensionales:

```
'Alice', 23, 'Azul', 'Audi''Tariq', 18, 'Rojo', 'Mini'
'Bob', 31, 'Verde', 'Renault'
```

Cómo se prepresentan los datos es aquí, en un array bidimensional:

```
personas = [ ['Alice',23,'Blue','Audi'], ['Tariq',18,'Red','Mini'], ['Bob',31,'Green','Renault']
```

## Experimentos
 
Esta ventana se proporciona para que pruebe cualquier código que desarrolle. Úselo para experimentar y practicar.

Hay un código de inicio proporcionado para usted. Este código se explicará en las siguientes páginas.

```js

// Creación de un array 2D
var personas = [
  ['Nombre', 'Edad', 'Color', 'Carro'],
  ['Alice', 23, 'Azul', 'Audi'],
  ['Tariq', 18, 'Rojo', 'Mini'],
  ['Bob', 31, 'Verde', 'Renault']
]

// un string que vamos a llenar
var str = ''

// pasando a través de ambas dimensiones
for (var i=1; i < personas.length; i++) {
  
  for (var j=0, str =''; j < personas[i].length; j++) {
    str += personas[0][j] + '=' + personas[i][j] + ''
  }
  console.log (str)
  
}

```

[EJECUTE EL CÓDIGO ]()


