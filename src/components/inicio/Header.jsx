"use client";
import { useState } from "react"
import Image from "next/image";

export default function Header() {

    const informacion = [
        {titulo: "VENTILADOR INDUSTRIAL", descripcion: "Esenciales para la circulación del aire en grandes espacios industriales.", img: "/inicio/slider/01.png"},
        {titulo: "VENTILADOR MOVIL", descripcion: "Está construido sobre un cuerpo de acero resistente y viene con ruedas omnidireccionales para transportarlo prácticamente a cualquier lugar.", img: "/inicio/slider/02.png"},
        {titulo: "VENTILADOR MOVIL 45°", descripcion: "Grande y resistente con ajuste de 45º, hacia arriba y abajo.", img: "/inicio/slider/03.png" },
        {titulo: "VENTILADOR PARED", descripcion: "Resuelve entornos complejos con espacios de ventilación limitados.", img: "/inicio/slider/04.png"},
        {titulo: "VENTILADOR VERTICAL", descripcion: "Potente flujo de aire, de funcionamiento silencioso, posicionamiento estratégico, durabilidad y eficiencia energética.", img: "/inicio/slider/05.png"},
        {titulo: "EVAPORATIVOs", descripcion: "Dos presentaciones de Evaporativos Industrial y Comercial, ambas se basan en el principio físico del enfriamiento adiabático.", img: "/inicio/slider/06.png"},
        {titulo: "RECUBRIMIENTO SUPERIOR SOLAR", descripcion: "Pintura térmica solución innovadora en el sector industrial, para gestionar el calor.", img: "/inicio/slider/07.png"}
    ]

    const [ ver, setVer ] = useState(informacion[0]);
    const [animationClass, setAnimationClass] = useState("");

    const cambiar = (e)=>{
        const btn = e.target.id;
        if (animationClass) {
            setTimeout(() => {
                setAnimationClass(""); 
            }, 10); 
            return;
        }
        if (btn === "1") {
            const currentIndex = informacion.findIndex(item => item.titulo === ver.titulo);
            if(currentIndex < 1){
                setAnimationClass("slide-in-left");
                setVer(informacion[5]);
            }else {   
                if (currentIndex > 0) {
                    setAnimationClass("slide-in-left");
                    setVer(informacion[currentIndex - 1]);
                }
            }
        } else if (btn === "2") {
            const currentIndex = informacion.findIndex(item => item.titulo === ver.titulo);
            if(currentIndex > 5){
                setAnimationClass("slide-in-left");
                setVer(informacion[0]);
            } else {
                if (currentIndex < informacion.length - 1) {
                    setAnimationClass("slide-in-left");
                    setVer(informacion[currentIndex + 1]);
                }
            }
        }
    }

    return(
        <div className="w-full overflow-hidden h-[62vh] lg:h-[83vh] text-blue-900 lg:text-white"> 
            <div className="relative ">
                <Image src={ver.img} width={1000} height={1000} alt="imagen slider" className={`absolute w-full top-0 ${animationClass}`}/>
            </div>
            <div className="w-full h-full relative">
                <button onClick={cambiar} id="1" className="text-7xl absolute top-0 bottom-0">{"<"}</button>
                <div className={`absolute bottom-0 ml-12 lg:ml-28 mb-10 w-[400px]`}>
                    <h2 className="text-4xl lg:text-5xl font-bold">{ver.titulo}</h2>
                    <h5 className="text-lg lg:text-xl font-bold mt-5">{ver.descripcion}</h5>
                    <button className="p-2 border-2 font-bold mt-4 rounded-lg">Aprender más</button>
                </div>
                <button onClick={cambiar} id="2" className="text-7xl right-0 absolute top-0 bottom-0 ">{">"}</button>
            </div>

        </div>
    )
}