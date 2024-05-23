"use client";
import { useState } from "react";

export default function Aplicaciones(){

    const [ pestaña, setPestaña ] = useState(false);
    const titulosIndustriales = [
        {text: "Logística de Almacén", img: ""},
        {text: "Industria Manufacturada", img: ""},
        {text: "Automotriz", img: ""},
        {text: "Sector ganadero y Agricultura", img: ""},
        {text: "Industria Electrónica", img: ""},
        {text: "Logística Industrial", img: ""}
    ]

    const mostrarPestaña = (e)=>{
        e.target.id === "0" ? setPestaña(false) : setPestaña(true);
    }

    return(
        <div>
            <div className="w-screen flex flex-col items-center justify-center pt-10">
                <h2 className="text-blue-900 text-2xl md:text-4xl font-bold">Área de Aplicación</h2>
                <div className="w-[90%] md:w-[75%] flex justify-between text-md md:text-2xl mt-3 text-blue-900 font-bold ">
                    <p onClick={mostrarPestaña} id="0" className={cambioDePestañasBtn}>Escenarios industriales</p>
                    <p onClick={mostrarPestaña} id="1" className={cambioDePestañasBtn}>Escenarios comerciales</p>
                </div>
            </div>

            {/* Contenido de las pestañas */}
            <div className="w-screen flex justify-center mt-6">
                <div className="w-[90%] md:w-[80%] flex justify-center items-center text-xl ">
                    {
                        !pestaña ? 
                        /* Industriales */
                        <div className="w-[90%] grid lg:grid-cols-2 xl:grid-cols-3 gap-6 text-white font-bold">

                            {
                                titulosIndustriales.map((e, index)=> (
                                    <div key={index} className="flex border-b-[50px] border-slate-300 hover:border-red-400 items-end w-[100%] h-[280px] bg-slate-300">
                                        <p className="w-fit p-3 transition absolute mb-[-47px] lg:mb-[-52px]
                                            text-sm lg:text-lg">{e.text}</p>
                                        {/* Imagen */}
                                    </div>
                                ))
                            }
                           
                        </div>
                        :
                        /* Comerciales */
                        <div>
                            <p>Comerciales</p>
                            
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

const cambioDePestañasBtn = "w-full text-center cursor-pointer border-b-2 transition hover:border-b-4 hover:border-red-500";