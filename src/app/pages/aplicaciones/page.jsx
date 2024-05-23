"use client";
import { useState } from "react";

export default function Aplicaciones(){

    const [ pestaña, setPestaña ] = useState(false);

    const mostrarPestaña = (e)=>{
        e.target.id === "0" ? setPestaña(false) : setPestaña(true);
    }

    return(
        <div>
            <div className="w-screen flex flex-col items-center justify-center pt-10">
                <h2 className="text-blue-900 text-2xl md:text-4xl font-bold">Área de Aplicación</h2>
                <div className="w-[90%] md:w-[80%] flex justify-between text-md md:text-2xl mt-3 text-blue-900 font-bold ">
                    <p onClick={mostrarPestaña} id="0" className={cambioDePestañasBtn}>Escenarios industriales</p>
                    <p onClick={mostrarPestaña} id="1" className={cambioDePestañasBtn}>Escenarios comerciales</p>
                </div>
            </div>

            {/* Contenido de las pestañas */}
            <div className="w-screen flex justify-center mt-2">
                <div className="w-[90%] md:w-[80%] flex justify-center items-center text-xl bg-white">
                    {
                        !pestaña ? 
                        <p>Industriales</p>
                        :
                        <p>Comerciales</p>
                    }
                </div>
            </div>

        </div>
    )
}

const cambioDePestañasBtn = "w-full text-center cursor-pointer border-b-2 transition hover:border-b-4 hover:border-red-500";