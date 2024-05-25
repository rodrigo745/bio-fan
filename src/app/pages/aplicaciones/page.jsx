"use client";
import { useState } from "react";
import Image from "next/image";

export default function Aplicaciones(){

    const [ pestaña, setPestaña ] = useState(false);

    const titulosIndustriales = [
        {text: "Logística de Almacén", img: "/industrial/in_1.jpg"},
        {text: "Industria Manufacturada", img: "/industrial/in_2.jpg"},
        {text: "Automotriz", img: "/industrial/in_3.jpg"},
        {text: "Sector ganadero y Agricultura", img: "/industrial/in_4.jpg"},
        {text: "Industria Electrónica", img: "/industrial/in_5.jpg"},
        {text: "Logística Industrial", img: "/industrial/in_6.jpg"}
    ]
    const titulosComerciales = [
        {text: "Gimnasios", img: "/comercial/co_1.jpg"},
        {text: "Estaciones de Tren y Autobuses", img: "/comercial/co_2.jpg"},
        {text: "Centros Deportivos", img: "/comercial/co_3.jpg"},
        {text: "Sala de Espera", img: "/comercial/co_4.jpg"},
        {text: "Recintos Feriales y de Exposición", img: "/comercial/co_5.jpg"},
        {text: "Escuelas", img: "/comercial/co_6.jpg"}
    ]

    const mostrarPestaña = (e)=>{
        e.target.id === "0" ? setPestaña(false) : setPestaña(true);
    }

    const cambioDePestañasBtn = `w-full text-center cursor-pointer border-b-2 transition hover:border-b-4 hover:border-red-500 `;

    return(
        <div className="w-full mb-32">
            <div className="w-full flex flex-col items-center justify-center pt-10">
                <h2 className="text-blue-900 text-2xl md:text-4xl font-bold">Área de Aplicación</h2>
                <div className="w-[90%] md:w-[75%] flex justify-between text-md md:text-2xl mt-3 text-blue-900 font-bold ">
                    <p onClick={mostrarPestaña} id="0" className={!pestaña ? `${cambioDePestañasBtn} border-b-4 border-red-500` : `${cambioDePestañasBtn}` }>Escenarios industriales</p>
                    <p onClick={mostrarPestaña} id="1" className={pestaña ? `${cambioDePestañasBtn} border-b-4 border-red-500` : `${cambioDePestañasBtn}` }>Escenarios comerciales</p>
                </div>
            </div>

            {/* Contenido de las pestañas */}
            <div className="w-full flex justify-center mt-6 ">
                <div className="w-[90%] md:w-[80%] flex justify-center items-center text-xl ">
                    {
                        !pestaña ? 
                        /* Industriales */
                        <div className="w-[90%] grid lg:grid-cols-2 xl:grid-cols-3 gap-6 text-white font-bold">

                        {
                            titulosIndustriales.map((e, index) => (
                                <div key={index} className="relative w-[100%] h-[250px] md:h-[280px] bg-slate-300">
                                    {/* Imagen */}
                                    {
                                        e.img !== "" &&
                                        <Image src={e.img} width={300} height={300} alt="imagen comercial" className="h-full w-full"/>
                                    }
                                    {/* div con hover y texto */}
                                    <div className="absolute left-0 top-0 w-full h-full bg-transparent hover:transparent transition-colors duration-300">
                                        <div className="absolute left-0 bottom-0 w-full h-[100%] opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-full h-10 md:h-14 absolute bottom-0 bg-orange-400 opacity-100"></div>
                                        </div>
                                        <p className="absolute bottom-0 w-full p-3 text-left text-sm lg:text-lg">{e.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                           
                        </div>
                        :
                        /* Comerciales */
                        <div className="w-[90%] grid lg:grid-cols-2 xl:grid-cols-3 gap-6 text-white font-bold">
                        {
                            titulosComerciales.map((e, index) => (
                                <div key={index} className="relative w-[100%] h-[250px] md:h-[280px] bg-slate-300">
                                    {/* Imagen */}
                                    {
                                        e.img !== "" &&
                                        <Image src={e.img} width={300} height={300} alt="imagen comercial" className="h-full w-full"/>
                                    }
                                    {/* div con hover y texto */}
                                    <div className="absolute left-0 top-0 w-full h-full bg-transparent hover:transparent transition-colors duration-300">
                                        <div className="absolute left-0 bottom-0 w-full h-[100%] opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-full h-10 md:h-14 absolute bottom-0 bg-orange-400 opacity-100"></div>
                                        </div>
                                        <p className="absolute bottom-0 w-full p-3 text-left text-sm lg:text-lg">{e.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                           
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

