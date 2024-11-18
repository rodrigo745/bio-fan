"use client";
import { useState, useEffect, useRef } from "react"
import Image from "next/image";
import PrecargaImagenes from "../preCarga";

export default function Header() {

    const informacion = [
        {titulo: "VENTILADOR INDUSTRIAL", descripcion: "Esenciales para la circulación del aire en grandes espacios industriales.", img: "/inicio/slider/01.png", frase: ["30%","Ahorro de consumo energético"]},
        {titulo: "VENTILADOR MOVIL", descripcion: "Está construido sobre un cuerpo de acero resistente y viene con ruedas omnidireccionales para transportarlo prácticamente a cualquier lugar.", img: "/inicio/slider/02.png", frase: ""},
        {titulo: "VENTILADOR MOVIL 45°", descripcion: "Grande y resistente con ajuste de 45º, hacia arriba y abajo.", img: "/inicio/slider/03.png", frase: "" },
        {titulo: "VENTILADOR PARED", descripcion: "Resuelve entornos complejos con espacios de ventilación limitados.", img: "/inicio/slider/04.png", frase: ""},
        {titulo: "VENTILADOR VERTICAL", descripcion: "Potente flujo de aire, de funcionamiento silencioso, posicionamiento estratégico, durabilidad y eficiencia energética.", img: "/inicio/slider/05.png", frase: ""},
        {titulo: "EVAPORATIVOS", descripcion: "Dos presentaciones de Evaporativos Industrial y Comercial, ambas se basan en el principio físico del enfriamiento adiabático.", img: "/inicio/slider/06.png", frase: ""},
        {titulo: "RECUBRIMIENTO SUPERIOR SOLAR", descripcion: "Pintura térmica solución innovadora en el sector industrial, para gestionar el calor.", img: "/inicio/slider/07.png", frase: ""}
    ]

    const [ver, setVer] = useState(informacion[0]);
    const contRef = useRef(0);
    const [flash, setFlash] = useState("");
    const [ animacionTexto, setAnimacionTexto ] = useState("");
    let flashTimer;
    let aniText;
    const [ vista, setVista ] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            avanzarImagen();
        }, 2000);

        // Función para limpiar el temporizador de destello
        const clearFlashTimer = () => {
            clearTimeout(flashTimer);
        };
        const clearAniTextTimer = () => {
            clearTimeout(aniText);
        };
        // Temporizador de destello inicial

        return () => {
            clearInterval(intervalId);
            clearFlashTimer();
            clearAniTextTimer();
        };
    }, [flashTimer, informacion, aniText]);

    const avanzarImagen = () => {
        const nextIndex = (contRef.current + 1) % informacion.length;
        setVista(nextIndex);
        contRef.current = nextIndex;

        // // Iniciar temporizador de destello
        setFlash("tran");
        setTimeout(() => {
            setFlash("");
        }, 1500);
        setAnimacionTexto("animacion-texto");
        setTimeout(() => {
            setAnimacionTexto("");
        }, 1000);
    };

    const cambiar = (e) => {
        const btn = e.target.id;

        if (btn === "1") {
            const prevIndex = (contRef.current - 1 + informacion.length) % informacion.length;
            setVista(prevIndex);
            contRef.current = prevIndex;
            setFlash("tran");
        setTimeout(() => {
            setFlash("");
        }, 2000);
        setAnimacionTexto("animacion-texto");
        setTimeout(() => {
            setAnimacionTexto("");
        }, 1000);
        } else if (btn === "2") {
            avanzarImagen();
        }
    };
    return (
        <div className="w-full overflow-hidden h-[72vh] lg:h-[90vh] text-blue-900 lg:text-white "> 
           
            <PrecargaImagenes/>
            {
                informacion.map((e, index)=> (
                    
                        (index === vista) &&
                        <div key={index} >
                    <div className={`relative`}>
                            <Image 
                                priority
                                
                                loading="eager"
                                src={e.img} 
                                width={1000} 
                                height={1000} 
                                alt="imagen slider" 
                                className={` absolute w-full top-0 transition slide-in-left ${flash}`}
                            />
                        </div>
                        <div className="hoverBlack">
                            <div className="">
                                <p className="text-6xl font-bold">{e.frase[0]}</p>
                                <p className="mt-2 text-xl font-bold w-[10.8vw]">{e.frase[1]}</p>

                            </div>
                        </div>
                        <div className="w-full h-full relative" >
                            {/*<button onClick={cambiar} id="1" className={`text-7xl absolute top-[33vh]`}>{"<"}</button>*/}
                            <div className={`absolute top-[38vh] ml-12 lg:ml-28 mb-10 w-[550px] ${animacionTexto}`}>
                                <h1 className="lg:text-[5.5rem] font-bold serie" style={{lineHeight: 1}}>HDS</h1>
                                <h2 className={`text-2xl w-[60%] lg:w-[150%] lg:text-[5.5rem] font-bold `} style={{lineHeight: 1}}>{e.titulo}</h2>
                                <h5 className="text-md w-[50%] lg:w-[130%] text-justify lg:text-2xl font-medium mt-2">{e.descripcion}</h5>
                                <button className="p-1 px-3 font-medium mt-4 rounded-lg bg-[#eb5347]">Aprender más</button>
                            </div>
                            {/*<button  onClick={cambiar} id="2" className="text-7xl right-0 absolute top-[33vh] z-20">{">"}</button>*/}
                        </div>
                    </div>
                    
                    
                ))
            }
            

        </div>
    )
}