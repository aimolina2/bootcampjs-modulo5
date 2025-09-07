# Laboratorio módulo 5 - Condicionales. Juego siete y medio

Para desarrollar este proyecto partimos de los archivos del sandbox de TypeScript.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

## 1. Mostrar puntuación

- Creamos una variable iniciaizada en "0" para almacenar la puntuación: `let puntuacion = 0`.
- En el index.html creamos el `<div id=puntuacion> </div>` donde mostraremos al usuario la puntuación almacenada a través de una función.
- Creamos la función `const muestraPuntuacion` para recoger los datos de puntuación y posteriormente mostrarlos.
- La función se invoca en cuanto está disponible en el DOM con `document.addEventListener("DOMContentLoaded", muestraPuntuacion);`
