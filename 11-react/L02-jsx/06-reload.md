# Anexo: Hot Module Reloading

Hay una cosa que puedes hacer en el archivo `src/index.js` para mejorar tu experiencia como desarrollador.

En `create-react-app` ya es una ventaja que el navegador actualice automáticamente la página cuando cambie su código fuente. Inténtalo cambiando la variable helloWorld en tu archivo src/App. js. El navegador debería actualizar la página. 

Pero puedes hacerlo mejor. `Hot Module Reloading (HMR)` es una herramienta para recargar su aplicación en el navegador. El navegador no realiza una actualización de página. Puede activarlo fácilmente en `create-react-app`. En tu `src/index.js` - tu punto de entrada a React - tienes que añadir una pequeña configuración.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// new code !
if (module.hot) {
  module.hot.accept()
}
```
HMR viene con múltiples ventajas: Imagine que está depurando su código con sentencias console. log (). Estas declaraciones permanecerán en la consola del desarrollador, aunque cambie su código, porque el navegador ya no actualiza la página. Esto puede ser conveniente para propósitos de depuración.

En una aplicación en crecimiento, la actualización de una página retrasa su productividad. Tienes que esperar hasta que se cargue la página. Una recarga de página puede tardar varios segundos en una aplicación grande. HMR elimina esta desventaja.

