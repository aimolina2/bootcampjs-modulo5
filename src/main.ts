let puntuacion: number = 0;
let mensaje: string = "";
const dameCartaBoton = document.getElementById("dame-carta-button");
const elementoPuntuacion = document.getElementById("puntuacion");
const elementoImagen = document.getElementById("carta-img") as HTMLImageElement;
const elementoMensaje = document.getElementById("mensaje");
const mePlantoBoton = document.getElementById("me-planto-button");
const nuevaPartidaBoton = document.getElementById("nueva-partida-button");
const futuroBoton = document.getElementById("futuro-button");

const muestraPuntuacion = () => {
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

const mostrarCarta = (carta: number): void => {
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

const asignarPuntuacion = (carta: number) => {
  if (carta > 7) {
    puntuacion = puntuacion + 0.5;
  } else {
    puntuacion = puntuacion + carta;
  }
  muestraPuntuacion();
};

const gameOver = () => {
  if (puntuacion > 7.5) {
    if (elementoPuntuacion) {
      elementoPuntuacion.innerHTML = "GAME OVER";
    }
    if (elementoMensaje && elementoMensaje instanceof HTMLElement) {
      elementoMensaje.innerHTML = "☠️☠️☠️ Te has pasado ☠️☠️☠️";
    }
    if (dameCartaBoton && dameCartaBoton instanceof HTMLButtonElement) {
      dameCartaBoton.disabled = true;
    }
    activarNuevaPartida();
  }
};

const mensajePuntuacion = () => {
  if (elementoMensaje) {
    if (puntuacion <= 4) {
      elementoMensaje.innerHTML = "Has sido muy conservador";
    }
    if (puntuacion === 5) {
      elementoMensaje.innerHTML = "Te ha entrado el canguelo, eh? 😏";
    }
    if (puntuacion === 6 || puntuacion === 7) {
      elementoMensaje.innerHTML = "Casi casi...";
    }
    if (puntuacion === 7.5) {
      elementoMensaje.innerHTML = "¡Lo has clavado! ¡Enhorabuena! 🎉";
    }
    if (puntuacion > 7.5) {
      elementoMensaje.innerHTML = "☠️☠️☠️ Te has pasado ☠️☠️☠️";
    }
  }
};

const mePlanto = () => {
  mensajePuntuacion();
  if (dameCartaBoton && dameCartaBoton instanceof HTMLButtonElement) {
    dameCartaBoton.disabled = true;
  }
  activarNuevaPartida();
  if (mePlantoBoton && mePlantoBoton instanceof HTMLButtonElement) {
    mePlantoBoton.disabled = true;
  }
  activarFuturoBoton();
};

const activarNuevaPartida = () => {
  if (nuevaPartidaBoton && nuevaPartidaBoton instanceof HTMLButtonElement) {
    nuevaPartidaBoton.disabled = false;
  }
};

const activarFuturoBoton = () => {
  if (futuroBoton && futuroBoton instanceof HTMLButtonElement) {
    futuroBoton.style.display = "inline-block";
  }
};

const dameCarta = () => {
  const numeroGenerado = generarNumeroAleatorio();
  const numeroCarta = generarNumeroCarta(numeroGenerado);
  mostrarCarta(numeroCarta);
  asignarPuntuacion(numeroCarta);
  gameOver();
};

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

const reiniciarPartida = () => {
  mensaje = "";
  puntuacion = 0;
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = "0";
  }
  if (elementoMensaje) {
    elementoMensaje.innerHTML = "";
  }
  if (elementoImagen) {
    elementoImagen.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
  if (dameCartaBoton && dameCartaBoton instanceof HTMLButtonElement) {
    dameCartaBoton.disabled = false;
  }
  if (mePlantoBoton && mePlantoBoton instanceof HTMLButtonElement) {
    mePlantoBoton.disabled = false;
  }
  if (nuevaPartidaBoton && nuevaPartidaBoton instanceof HTMLButtonElement) {
    nuevaPartidaBoton.disabled = true;
  }
  if (futuroBoton && futuroBoton instanceof HTMLButtonElement) {
    futuroBoton.style.display = "none";
    futuroBoton.disabled = false;
  }
};

if (dameCartaBoton && dameCartaBoton instanceof HTMLButtonElement) {
  dameCartaBoton.addEventListener("click", dameCarta);
}
if (mePlantoBoton && mePlantoBoton instanceof HTMLButtonElement) {
  mePlantoBoton.addEventListener("click", mePlanto);
}

if (nuevaPartidaBoton && nuevaPartidaBoton instanceof HTMLButtonElement) {
  nuevaPartidaBoton.addEventListener("click", reiniciarPartida);
}

if (futuroBoton && futuroBoton instanceof HTMLButtonElement) {
  futuroBoton.addEventListener("click", mostrarFuturo);
}
