import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageSlider = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [sliderWidth, setSliderWidth] = useState(50); // Empieza con 50% del ancho

    // Función para manejar el arrastre
    const handleMouseDown = (e) => {
        setIsDragging(true);
        document.body.style.cursor = 'ew-resize';
        e.preventDefault(); // Evitar que se seleccione texto accidentalmente
    };

    // Función para manejar el movimiento del ratón
    const handleMouseMove = (e) => {
        if (isDragging) {
            // Intentamos encontrar el contenedor
            const contenedor = e.target.closest('.contenedor');
            if (contenedor) {
                // Obtener la posición del ratón dentro del contenedor
                let left = e.clientX - contenedor.getBoundingClientRect().left;
                if (left < 0) left = 0;
                if (left > contenedor.offsetWidth) left = contenedor.offsetWidth;

                setSliderWidth((left / contenedor.offsetWidth) * 100); // Calcular el ancho del slider en porcentaje
            }
        }
    };

    // Función para cuando se suelta el ratón
    const handleMouseUp = () => {
        setIsDragging(false);
        document.body.style.cursor = 'auto';
    };

    // UseEffect para agregar los eventListeners globales
    useEffect(() => {
        // Escuchar los eventos globales de mousemove y mouseup
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('mouseleave', handleMouseUp); // Asegura que si el mouse sale, se detenga el arrastre
        }

        // Limpiar los eventListeners cuando no estamos arrastrando
        return () => {
            if (isDragging) {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
                document.removeEventListener('mouseleave', handleMouseUp);
            }
        };
    }, [isDragging]); // Solo se ejecuta cuando `isDragging` cambia

    return (
        <div
            className="contenedor"
            style={{
                position: 'relative',
                width: '40vw',
                height: '440px',
                overflow: 'hidden',
                margin: '0 auto',
                border: '2px solid #ccc',
            }}
        >
            {/* Imagen 1 (capa superior) */}
            <Image
                src="/productos/10/22.jpg"
                alt="Imagen 1"
                className="imagen"
                width={400}
                height={400}
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'width 0.5s ease',
                    clipPath: `inset(0 0 0 ${sliderWidth}%)`,
                }}
            />
            {/* Imagen 2 (capa inferior) */}
            <Image
                src="/productos/10/23.jpg"
                alt="Imagen 2"
                className="imagen"
                width={400}
                height={400}
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'width 0.5s ease',
                    clipPath: `inset(0 ${100 - sliderWidth}% 0 0)`,
                }}
            />
            
            {/* Línea divisoria que se moverá */}
            <div
                className="linea"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: `${sliderWidth}%`,
                    width: '6px',
                    height: '100%',
                    backgroundColor: '#fff',
                    cursor: 'ew-resize',
                    zIndex: '10',
                    outline: 'none',  // Eliminar borde de enfoque
                    userSelect: 'none',  // Evitar que se seleccione el texto de la línea
                }}
                onMouseDown={handleMouseDown}
            >
                {/* Botón en el medio de la línea divisoria */}
                <button
                    className="boton-slider"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '30px',
                        height: '30px',
                        backgroundColor: '#fff',
                        border: '2px solid #1d4674',
                        borderRadius: '50%',
                        cursor: 'ew-resize',
                        outline: 'none',
                        userSelect: 'none',
                    }}
                    onMouseDown={handleMouseDown}
                ></button>
            </div>

            {/* Slider que cubre la imagen superior */}
            <div
                className="slider"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: `${sliderWidth}%`,
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.0)',
                    transition: 'left 0.3s ease',
                }}
            ></div>
        </div>
    );
};

export default ImageSlider;
