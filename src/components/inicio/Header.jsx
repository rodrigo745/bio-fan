"use client";
import { useState, useEffect, useRef } from "react"
import Image from "next/image";
import PrecargaImagenes from "../preCarga";
import styles from "@/components/inicio/Circulos.module.css";

export default function Header() {

    const informacion = [
        {titulo: "VENTILADOR INDUSTRIAL", descripcion: "Estándares de ahorro energético de alta eficiencia. BIOFAN puede crear su microclima ideal, utilizando la frescura y la ligereza del aire y aprovechando su movimiento.", img: "/inicio/slider/01.png", frase: ["",""], serie: ""},
        {titulo: "VENTILADOR DE TECHO INDUSTRIAL", descripcion: "Esenciales para la circulación del aire en grandes espacios industriales.", img: "/inicio/slider/02.png", frase: ["30%","Ahorro de consumo energético"], serie: "HDS"},
        {titulo: "VENTILADOR COMERCIAL", descripcion: "Equipo especialmente desarrollado para mejorar la comodidad del entorno de trabajo.", img: "/inicio/slider/03.png", frase: ["-6°C","Hasta 6° menos en verano"], serie: "HDS"},
        {titulo: "VENTILADOR MOVIL", descripcion: "Está construido sobre un cuerpo de acero resistente y viene con ruedas omnidireccionales para transportarlo prácticamente a cualquier lugar.", img: "/inicio/slider/04.png", frase: ["0","Distribución uniforme del aire", "/inicio/ventilador.png"], serie: "HDY"},
        {titulo: "VENTILADOR MOVIL 45°", descripcion: "La solución portátil de acción rápida para el calor extremo.", serie: "HDY", img: "/inicio/slider/05.png", frase: ["30%","Ahorro de consumo energético"] },
        {titulo: "VENTILADOR PARED", descripcion: "Resuelve entornos complejos con espacios de ventilación limitados.", serie: "HDB", img: "/inicio/slider/06.png", frase: ["-6°C","Hasta 6° menos en verano"]},
        {titulo: "VENTILADOR VERTICAL", descripcion: "Potente flujo de aire, de funcionamiento silencioso, posicionamiento estratégico, durabilidad y eficiencia energética.", serie: "HDS/L SERIE", img: "/inicio/slider/07.png", frase: ["20%","Más de aire fresco"]},
        {titulo: "EVAPORATIVOS", descripcion: "Dos presentaciones de Evaporativos Industrial y Comercial, ambas se basan en el principio físico del enfriamiento adiabático.", img: "/inicio/slider/08.png", frase: ["1","Climatización \n agradable y ecológica","/inicio/aire.png"]},
        {titulo: "RECUBRIMIENTO SUPERIOR SOLAR", descripcion: "Pintura térmica solución innovadora en el sector industrial, para gestionar el calor.", img: "/inicio/slider/09.png", frase: ""}
    ]

    const [ver, setVer] = useState(informacion[0]);
    const contRef = useRef(0);
    const [flash, setFlash] = useState("");
    const [ animacionTexto, setAnimacionTexto ] = useState("");
    let flashTimer;
    let aniText;
    const [ vista, setVista ] = useState(0);

    const [currentIndex, setCurrentIndex] = useState(0); // Indice del botón activo

    // Función que maneja la animación secuencial
    const iniciarAnimacion = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 9); // Aumenta el índice, reinicia al llegar al último
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            avanzarImagen();
            
        }, 6000);
        const intervalo = setInterval(iniciarAnimacion, 6000); // Llamar cada 6 segundos
        
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
            clearInterval(intervalo);
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
        //setAnimacionTexto("animacion-texto");
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
        }, 1000);
        setAnimacionTexto("animacion-texto");
        setTimeout(() => {
            setAnimacionTexto("");
        }, 2000);
        } else if (btn === "2") {
            avanzarImagen();
        }
        
        
    };
    // Función para manejar clics en los botones
    const handleClick = (index) => {
      setCurrentIndex(index); // Cambia el índice al botón clickeado
    };



    return (
        <div className="w-full overflow-hidden h-[72vh] lg:h-[98vh] text-blue-900 lg:text-white"> 
           
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
                                width={1800} 
                                height={1200} 
                                alt="imagen slider" 
                                className={` absolute w-full top-0 transition  
                                    ${flash} slide-in-left`}
                            />
                        </div>
                        <div className={`animacion-texto2 ${e.titulo !== "EVAPORATIVOS" ? "hoverBlack" : "hoverEvapo"} hidden lg:block mr-5 mt-5 helvetica
                        ${e.titulo == "VENTILADOR COMERCIAL" && "mr-[-45px] mt-[-30px]"}
                        ${e.titulo == "VENTILADOR MOVIL 45°" && "mr-[40px]"}
                        ${e.titulo == "VENTILADOR PARED" && "mr-[-170px] "}
                        ${e.titulo == "VENTILADOR VERTICAL" && "mt-[-80px] "}
                        ${e.titulo === "VENTILADOR DE TECHO INDUSTRIAL" && "mt-[-20px] mr-[-100px]"}
                        
                        `}>
                            <div className={`${e.titulo == "VENTILADOR MOVIL" && "mt-[-70px]"}
                            ${e.titulo == "VENTILADOR MOVIL 45°" && "mt-[-50px]"}
                             
                            `}>
                                {
                                    e.frase[0] == "0" ?
                                        <Image src={e.frase[2]} width={130} height={100} alt="Foto icono" className="ml-[-12px] animate-spin"/>
                                    :
                                    e.frase[0] === "1" ?
                                        <div className="flex justify-end">
                                            <Image src={e.frase[2]} width={90} height={100} alt="Foto icono" className=" absolute mt-[-30px] mr-2"/>
                                            <div className="mt-0 absolute mr-40">
                                                <p className="text-xl w-[14vw]
                                                absolute text-right" style={{lineHeight: 1.2}}>{`Climatización`}</p>
                                                <br />
                                                <p className="text-xl w-[14vw] ml-1 absolute text-right mt-3" style={{lineHeight: 1.2}}>{`agradable y ecológica`}</p>
                                            </div>
                                        </div>
                                    :
                                        <p className={`text-7xl font-semibold ml-20
                                            ${e.titulo == "VENTILADOR COMERCIAL" && "ml-24"}
                                            ${e.titulo == "VENTILADOR MOVIL 45°" && "ml-[32px]"}
                                            ${e.titulo == "VENTILADOR PARED" && "ml-[97px]"}
                                            ${e.titulo == "VENTILADOR VERTICAL" && ""}
                                        `}>{e.frase[0]}</p>
                                    }
                                {
                                    e.titulo !== "EVAPORATIVOS" &&
                                    <p className={`text-[1.6rem] w-[15.4vw] helvetica
                                        ${e.titulo == "VENTILADOR COMERCIAL" && "px-10 ml-8"}
                                        ${e.titulo == "VENTILADOR MOVIL 45°" && " ml-[-15px]"}
                                        ${e.titulo == "VENTILADOR MOVIL" && "px-6 ml-[-90px]"}
                                        ${e.titulo == "VENTILADOR PARED" && "px-10 ml-6"}
                                        
                                        `} style={{lineHeight: 1.2}}>{e.frase[1]}</p>
                                }

                            </div>
                        </div>
                        <div className={`w-full h-full animacion-texto
                            relative
                            ${e.titulo == "VENTILADOR INDUSTRIAL" && "top-[16%]"}
                            ${e.titulo == "VENTILADOR DE TECHO INDUSTRIAL" && "mt-[-5%] "}
                            ${e.titulo == "VENTILADOR VERTICAL" && "top-[1%]"}
                            ${e.titulo == "EVAPORATIVOS" && "top-[3%]"}
                            ${e.titulo == "VENTILADOR DE TECHO INDUSTRIAL" && "top-[18%]"}
                            ${e.titulo == "RECUBRIMIENTO SUPERIOR SOLAR" && "top-[3%]"}`} >
                            {/*<button onClick={cambiar} id="1" className={`text-7xl absolute top-[33vh]`}>{"<"}</button>*/}
                            <div className={`absolute top-[44vh] ml-20 mb-10 w-[550px] ${animacionTexto} 
                            `}>
                                <h1 className="text-[2.2rem] lg:text-[6.7rem] top-[-50px] lg:top-[-120px] absolute font-bold serie w-[80vw] lg:w-[40vw]" style={{lineHeight: 1}}>{e.serie}</h1>
                                {
                                    e.titulo === "RECUBRIMIENTO SUPERIOR SOLAR" ?
                                    <h2 className={`text-2xl w-[60%] lg:w-[180%] lg:text-[5.5rem] font-bold `} style={{lineHeight: 1}}>{e.titulo}</h2>
                                    :
                                    <h2 className={`text-2xl w-[60%] lg:w-[90%] lg:text-[5.5rem] font-bold 
                                        ${e.titulo === "VENTILADOR DE TECHO INDUSTRIAL" && "lg:w-[190%]"}`} style={{lineHeight: 1}}>{e.titulo}</h2>

                                }
                                <h5 className={`text-md w-[50%] lg:w-[132%] text-justify lg:text-3xl font-medium mt-2 helvetica ${e.titulo == "VENTILADOR MOVIL 45°" && "lg:w-[150%]"}
                                ${e.titulo == "RECUBRIMIENTO SUPERIOR SOLAR" && "lg:w-[150%]"}
                                ${e.titulo == "VENTILADOR INDUSTRIAL" && "lg:w-[170%]"}
                                `}>{e.descripcion}</h5>
                                <button className="p-1 px-3 font-medium mt-4 rounded-lg bg-[#eb5347] text-white">Aprende más</button>
                            </div>
                            {/*<button  onClick={cambiar} id="2" className="text-7xl right-0 absolute top-[33vh] z-20">{">"}</button>*/}
                            
                            
                        </div>
                    </div>
                    
                    
                ))
            }
            <div className="hidden lg:block">

            <div className={styles.contCirculo}>
            {Array.from({ length: 8 }).map((_, index) => (
                <button
                key={index}
                className={`${styles.circulo} ${currentIndex === index ? styles.active : ""}`}
                onClick={() => handleClick(index)} // Cambia el índice con el clic
                />
            ))}
            </div>
            </div>
        </div>
    )
}