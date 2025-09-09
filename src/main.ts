let puntuacion: number = 0;

const muestraPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = puntuacion.toString();
  } else {
    console.error("muestraPuntuacion: No se ha encontrado el id puntuacion");
  }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 10) + 1;

const generarNumeroCarta = (numeroAleatorio: number): number => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  } else {
    return numeroAleatorio;
  }
};

const dameCarta = () => {
  const numeroGenerado = generarNumeroAleatorio();
  const numeroCarta = generarNumeroCarta(numeroGenerado);
  mostrarCarta(numeroCarta);
  asignarPuntuacion(numeroCarta);
};

const dameCartaBoton = document.getElementById("dame-carta-button");
if (dameCartaBoton && dameCartaBoton instanceof HTMLButtonElement) {
  dameCartaBoton.addEventListener("click", dameCarta);
}

const asignarPuntuacion = (carta: number) => {
  if (carta > 7) {
    puntuacion = puntuacion + 0.5;
  } else {
    puntuacion = puntuacion + carta;
  }
  muestraPuntuacion();
};

const mostrarCarta = (carta: number): void => {
  const elementoImagen = document.getElementById(
    "carta-img"
  ) as HTMLImageElement;
  if (!elementoImagen) {
    console.error("mostrarCarta: No se ha encontrado el id carta-img");
    return;
  }
  switch (carta) {
    case 1:
      elementoImagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;

    case 2:
      elementoImagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;

    case 3:
      elementoImagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;

    case 4:
      elementoImagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;

    case 5:
      elementoImagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;

    case 6:
      elementoImagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;

    case 7:
      elementoImagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;

    case 10:
      elementoImagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;

    case 11:
      elementoImagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;

    case 12:
      elementoImagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;

    default:
      elementoImagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
      break;
  }
};
