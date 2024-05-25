"use client";
import { useState } from "react"


export default function Header() {

    const informacion = [
        {titulo: "VENTILADOR INDUSTRIAL", descripcion: "Esenciales para la circulación del aire en grandes espacios industriales."},
        {titulo: "VENTILADOR MOVIL", descripcion: "Está construido sobre un cuerpo de acero resistente y viene con ruedas omnidireccionales para transportarlo prácticamente a cualquier lugar." },
        {titulo: "VENTILADOR MOVIL 45°", descripcion: "Grande y resistente con ajuste de 45º, hacia arriba y abajo." },
        {titulo: "VENTILADOR PARED", descripcion: "Resuelve entornos complejos con espacios de ventilación limitados."},
        {titulo: "VENTILADOR VERTICAL", descripcion: "Potente flujo de aire, de funcionamiento silencioso, posicionamiento estratégico, durabilidad y eficiencia energética."},
        {titulo: "EVAPORATIVOs", descripcion: "Dos presentaciones de Evaporativos Industrial y Comercial, ambas se basan en el principio físico del enfriamiento adiabático."},
        {titulo: "RECUBRIMIENTO SUPERIOR SOLAR", descripcion: "Pintura térmica solución innovadora en el sector industrial, para gestionar el calor."}
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
        <div className="w-full h-[80vh]">
            <div></div>
            <div className="w-full h-full relative">
                <button onClick={cambiar} id="1" className="text-7xl absolute top-0 bottom-0">{"<"}</button>
                <div className={`absolute bottom-0 ml-20 ${animationClass}`}>
                    <h2 className="text-5xl">{ver.titulo}</h2>
                    <h5 className="text-xl">{ver.descripcion}</h5>
                    <button>Aprender más</button>
                </div>
                <button onClick={cambiar} id="2" className="text-7xl right-0 absolute top-0 bottom-0">{">"}</button>
            </div>

        </div>
    )
}