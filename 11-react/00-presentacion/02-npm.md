#  node / npm

Este capítulo te da un pequeño curso intensivo en node y npm. No es exhaustivo, pero obtendrá todas las herramientas necesarias. Si   está familiarizado con ambos, puede omitir el capítulo.

Los paquetes de node globales son accesibles desde cualquier punto del terminal y sólo hay que instalarlos una vez. Puede instalar un paquete global escribiendo en su terminal:

Command Line
`npm install -g <package>`

La bandera -g indica a npm que instale el paquete globalmente. Los paquetes locales se utilizan en su aplicación. Por ejemplo, React as a library será un paquete local que puede ser requerido en su aplicación para su uso. Puede instalarlo a través del terminal escribiendo:

Command Line
`npm install <package>`

En el caso de React sería:

Command Line
`npm install react --save`

El paquete instalado aparecerá automáticamente en una carpeta llamada node_modules/. Pero ten cuidado. Siempre que instales un paquete local no debes olvidarte de la bandera --save:

No todas las carpetas de proyecto vienen con un package. json. Hay un comando npm para inicializar un proyecto npm y por lo tanto un archivo package. json. Sólo cuando tenga ese archivo, podrá instalar nuevos paquetes locales a través de npm.

Command Line
`npm init -y`

Una palabra más sobre el package.json. El archivo le permite compartir su proyecto con otros desarrolladores sin compartir todos los paquetes de node. El archivo tiene todas las referencias de los paquetes de nodos utilizados en su proyecto. Estos paquetes se denominan relaciones. Todo el mundo puede copiar su proyecto sin las dependencias. Las dependencias son referencias en el package.json. Alguien que copia su proyecto puede instalar todos los paquetes usando `npm install` en la línea de comandos.


