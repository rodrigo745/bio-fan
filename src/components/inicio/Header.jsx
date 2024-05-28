"use client";
import { useState, useEffect, useRef } from "react"
import Image from "next/image";

export default function Header() {

    const informacion = [
        {titulo: "VENTILADOR INDUSTRIAL", descripcion: "Esenciales para la circulación del aire en grandes espacios industriales.", img: "/inicio/slider/01.png"},
        {titulo: "VENTILADOR MOVIL", descripcion: "Está construido sobre un cuerpo de acero resistente y viene con ruedas omnidireccionales para transportarlo prácticamente a cualquier lugar.", img: "/inicio/slider/02.png"},
        {titulo: "VENTILADOR MOVIL 45°", descripcion: "Grande y resistente con ajuste de 45º, hacia arriba y abajo.", img: "/inicio/slider/03.png" },
        {titulo: "VENTILADOR PARED", descripcion: "Resuelve entornos complejos con espacios de ventilación limitados.", img: "/inicio/slider/04.png"},
        {titulo: "VENTILADOR VERTICAL", descripcion: "Potente flujo de aire, de funcionamiento silencioso, posicionamiento estratégico, durabilidad y eficiencia energética.", img: "/inicio/slider/05.png"},
        {titulo: "EVAPORATIVOS", descripcion: "Dos presentaciones de Evaporativos Industrial y Comercial, ambas se basan en el principio físico del enfriamiento adiabático.", img: "/inicio/slider/06.png"},
        {titulo: "RECUBRIMIENTO SUPERIOR SOLAR", descripcion: "Pintura térmica solución innovadora en el sector industrial, para gestionar el calor.", img: "/inicio/slider/07.png"}
    ]

    const [ver, setVer] = useState(informacion[0]);
    const contRef = useRef(0);
    const [flash, setFlash] = useState("");
    const [key, setKey] = useState(0); // Clave aleatoria para forzar la actualización de la imagen
    let flashTimer;

    useEffect(() => {
        const intervalId = setInterval(() => {
            avanzarImagen();
        }, 6000);

        // Función para limpiar el temporizador de destello
        const clearFlashTimer = () => {
            clearTimeout(flashTimer);
        };

        // Temporizador de destello inicial

        return () => {
            clearInterval(intervalId);
            clearFlashTimer();
        };
    }, [flashTimer, informacion]);

    const avanzarImagen = () => {
        const nextIndex = (contRef.current + 1) % informacion.length;
        setVer(informacion[nextIndex]);
        contRef.current = nextIndex;
        setKey(prevKey => prevKey + 1); // Incrementa la clave para forzar la actualización de la imagen

        // Iniciar temporizador de destello
        setFlash("opacity-25");
        setTimeout(() => {
            setFlash("");
        }, 100);
    };

    const cambiar = (e) => {
        const btn = e.target.id;

        if (btn === "1") {
            const prevIndex = (contRef.current - 1 + informacion.length) % informacion.length;
            setVer(informacion[prevIndex]);
            contRef.current = prevIndex;
        } else if (btn === "2") {
            avanzarImagen();
        }
    };
    return (
        <div className="w-full overflow-hidden h-[72vh] lg:h-[83vh] text-blue-900 lg:text-white "> 
            <div className="relative">
                <Image 
                    key={key} // Clave aleatoria para forzar la actualización de la imagen
                    src={ver.img} 
                    width={1000} 
                    height={1000} 
                    alt="imagen slider" 
                    className={`absolute w-full top-0 slide-in-left ${flash}`}
                />
            </div>
            <div className="w-full h-full relative">
                <button onClick={cambiar} id="1" className="text-7xl absolute top-0 bottom-0">{"<"}</button>
                <div className={`absolute bottom-0 ml-12 lg:ml-28 mb-10 w-[550px]`}>
                    <h2 className="text-2xl w-[60%] lg:w-[90%] lg:text-7xl font-bold">{ver.titulo}</h2>
                    <h5 className="text-md w-[50%] lg:w-[90%] lg:text-2xl font-bold mt-5">{ver.descripcion}</h5>
                    <button className="p-2 border-2 font-bold mt-4 rounded-lg">Aprender más</button>
                </div>
                <button onClick={cambiar} id="2" className="text-7xl right-0 absolute top-0 bottom-0 ">{">"}</button>
            </div>

        </div>
    )
}