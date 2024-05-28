"use client";
import { useEffect } from 'react';

function PrecargaImagenes() {
  useEffect(() => {
    const imagenes = [
        '/inicio/slider/01.png', '/inicio/slider/02.png',
        '/inicio/slider/03.png', '/inicio/slider/04.png',
        '/inicio/slider/05.png', '/inicio/slider/06.png',
        '/inicio/slider/07.png']; // Lista de rutas de imágenes
    imagenes.forEach((imagen) => {
      const img = new Image();
      img.src = imagen;
    });
  }, []);

  return null; // Este componente no renderiza nada en el DOM
}

export default PrecargaImagenes;