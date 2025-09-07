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

## 2. Pedir carta

- En el HTML incluimos el botón **Dame una carta** (`id=dame-carta-button`).
- La función `const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 10) + 1;` nos devuelve un número aleatorio entre 1 y 10.
- Después creamos la función `const generarNumeroCarta` donde pasamos el _numeroAleatorio_ para asignarle los valores de las cartas que van del 1 al 12 excluyendo el 8 y el 9. Para esto lo que hacemos es sumar +2 siempre que `numeroAleatorio > 7`.
- La función `dameCarta` es la que reoge la orden de asignar a cada numero aleatorio (`const numeroGenerado`) su número de carta correspondiente (`numeroCarta`). Este número se muestra al hacer click en el botón que hemos creado al principio.
