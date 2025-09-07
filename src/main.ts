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
