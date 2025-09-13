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

## 3. Mostrar carta

- En el HTML añadimos un _img_ que contiene la imagen boca abajo de la carta. Esta imagen cambia cada vez que pedimos una nueva carta adaptandose a cada uno de los casos declarados en el _switch_.
- Creamos la funcion `const mostrarCarta = (carta: number) : void;`, donde en primer lugar definimos la variable `const elementoImagen` que almacena el src de la imagen creada anteriormente con el `ìd=carta-img`. Siempre que se lea ese id se desarrollarán los casos recogidos en el _switch_.
- Por último, volvemos a la función `dameCarta`para poner en marcha `mostrarCarta` y que el número aleatorio generado se segine a un número de carta que se corresponderá con un caso y a su vez con una imagen de carta.

```const dameCarta = () => {
  const numeroGenerado = generarNumeroAleatorio();
  const numeroCarta = generarNumeroCarta(numeroGenerado);
  mostrarCarta(numeroCarta);
};
```

## 4. Sumar puntuación

- Comprobamos que ya tenemos creado el `let puntuacion = 0`.
- Creamos la funcion `asignarPuntuacion` donde indicamos que cuando la carta sea mayor de 7 se sume 0,5 y si no lo es se sume el valor de la carta.
- Al comprobarlo cada vez que pulsamos el botón _Dame una carta_ se va sumando la puntuación indefinidamente.

## 5. Game Over

- Creamos la funcion `const gameOver' donde indicamos que si la puntuación es mayor que 7,5 aparece en el marcador el mensaje GAME OVER y el botón se desactiva:

```const gameOver = () => {
  if (puntuacion > 7.5) {
    if (elementoPuntuacion) {
      elementoPuntuacion.innerHTML = "GAME OVER";
    }
    if (dameCartaBoton && dameCartaBoton instanceof HTMLButtonElement) {
      dameCartaBoton.disabled = true;
    }
  }
};
```

## 6. Me planto

- En el HTML añadimos un botón de _Me planto_ y un div \*id="me-planto-button" para mostrar el mensaje que corresponde cuando se pulsa el botón.
- Creamos la función `const mensajePuntuacion` para asignar un mensaje según la puntuación y después una que desactive el botón _Dame una carta_
- Por último, ponemos en marcha las funciones al pulsar el botón _Me planto_

```if (mePlantoBoton && mePlantoBoton instanceof HTMLButtonElement) {
  mePlantoBoton.addEventListener("click", mePlanto);
}
```

## 7. Nueva partida

- Creamos el botón _Nueva partida_ en el HTLM y le asignamos el estado **disabled**.
- Para que el botón se active cuando se produce _GAME OVER_ o cuando el usuario pulsa _Me planto_, definimos la función `activarNuevaPartida`

```
const activarNuevaPartida = () => {
  if (nuevaPartidaBoton) {
    nuevaPartidaBoton.disabled = false;
  }
};
```

- Hacemos que esta función se ejecute en la `const gameOver` y en `const mePlanto`.
- Damos funcionalidad al botón para que al pulsarlo se reinicie el juego.
- Este botón activa la función `nuevaPartida`donde hemos indicado el estado al que deben volver cada una de las variables, su estado inicial. Así reseteamos la imagen, la puntuación y mensaje de puntuación, así como el estado de los botones, pasando los desactivados a activados y al contrario.

## 8. Estilo CSS

- Mediante la aplicación de estilos maquetamos el visual del juego.

## 9. Ajustes Typescript

- Revisamos algunas de las funciones y hacemos los cambios necesarios para que el juego funcione correctamente. Por ejemplo, cuando pulsamos el botón Me planto, además del mensaje debemos deshabilitar el botón para que la unica opción de continuar sea mediante el botón _Nueva partida_.

- Además del GAME OVER que aparece en el apartado de puntuación, enviamos un nuevo mensaje indicando al usuario que ha sobrepasado la suma de 7,5.

## 10. EXTRA: mostrar futuro

- Creamos un nuevo botón que deshabilitamos en el CSS con `display: none` y que activaremos cuando ponemos en marcha la función `mePlanto`.

- El botón desata la funcion `mostrarFuturo`al hacer click.

- Indicamos los pasos a seguir al activar el botón mediante la siguiente función:

```
const mostrarFuturo = () => {
  if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
    const numeroGenerado = generarNumeroAleatorio();
    const numeroCarta = generarNumeroCarta(numeroGenerado);
    mostrarCarta(numeroCarta);
    if (elementoMensaje) {
      elementoMensaje.innerHTML = "Esta hubiese sido tu carta";
    }
  }
  if (futuroBoton && futuroBoton instanceof HTMLButtonElement) {
    futuroBoton.disabled = true;
  }
};
```
