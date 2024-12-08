"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Aplicaciones(){

    const [ pestaña, setPestaña ] = useState(false);

    const titulosIndustriales = [
        {text: "Logística de Almacén", img: "/industrial/in_1.jpg"},
        {text: "Industria Manufacturada", img: "/industrial/in_2.jpg"},
        {text: "Automotriz", img: "/industrial/in_3.jpg"},
        {text: "Sector Ganadero y Agricultura", img: "/industrial/in_4.jpg"},
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
    const informacion = [
        {
            titulo: "Grandes ventiladores de techo para almacenes y fabricación.",
            descripcion: "Ventiladores de techo para almacenes: una solución rentable para mejorar la circulación del aire. Los ventiladores de techo para almacenes son una forma sencilla y eficaz de mejorar la circulación del aire y...",
            img: "/inicio/noticias/1.jpg",
            direccion: "/pages/noticias"
        },
        {
            titulo: "¿Qué entornos son adecuados para grandes ventiladores industriales?",
            descripcion: "¿En qué zonas se pueden utilizar grandes ventiladores? Los grandes ventiladores industriales tienen excelentes efectos de enfriamiento y extracción por lo que pueden usarse en muchos...",
            img: "/inicio/noticias/2.jpg",
            direccion: "/pages/noticias"

        },
        {
            titulo: "Una descripción general de los ventiladores de techo industriales.",
            descripcion: "Cuando desee un ventilador de techo grande para su fabrica, almacén u otro espacio, un ventilador de techo industrial es la opción lógica...",
            img: "/inicio/noticias/3.jpg",
            direccion: "/pages/noticias"

        }
    ]
    const mostrarPestaña = (e)=>{
        e.target.id === "0" ? setPestaña(false) : setPestaña(true);
    }

    const cambioDePestañasBtn = `w-full text-center cursor-pointer border-b-4 transition lg:text-3xl hover:border-b-4 hover:border-red-500 `;

    // Modal
    const [ modal, setModal ] = useState(false);
    const [ numero, setNumero ] = useState(0);

    const showModal = (propNumero)=> {
        setNumero(propNumero);
        modal ? setModal(false) : setModal(true);
    }



    return(
        <div className="w-full mb-20">
            <div className="w-full flex flex-col items-center justify-center pt-10 ">
                <h2 className="text-[#1d4674] text-2xl md:text-7xl font-medium mb-8">ÁREA DE APLICACIÓN</h2>
                <div className="w-[90%] md:w-[75%] flex justify-between text-md md:text-2xl mt-3 text-[#1d4674] font-bold ">
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
                        <div className="w-[90%] grid lg:grid-cols-2 xl:grid-cols-3 gap-6 text-white open">

                        {
                            titulosIndustriales.map((e, index) => (
                                <div  key={index} className="relative w-[100%] h-[250px] md:h-[300px] bg-slate-300 cursor-pointer" onClick={()=> showModal(index)}>
                                    {/* Imagen */}
                                    {
                                        e.img !== "" &&
                                        <Image src={e.img} width={900} height={900} alt="imagen comercial" className="h-full w-full"/>
                                    }
                                    {/* div con hover y texto */}
                                    <div className="absolute left-0 top-0 w-full h-full bg-transparent hover:transparent transition-colors duration-300">
                                        <div className="absolute left-0 bottom-0 w-full h-[100%] opacity-0 hover:opacity-100 transition-opacity duration-0">
                                            <div className="w-full h-14 absolute bottom-0 bg-[#1d4674] opacity-100"></div>
                                        </div>
                                        <p className="absolute hover:bg-[#1d4674] bottom-0 w-full h-14 p-3 text-left cursor-pointer text-sm lg:text-xl">{e.text}</p>
                                    </div>
                                    
                                </div>
                            ))
                        }

                        </div>
                        :
                        /* Comerciales */
                        <div className="w-[90%] grid lg:grid-cols-2 xl:grid-cols-3 gap-6 text-white open">
                        {
                            titulosComerciales.map((e, index) => (
                                <div key={index} className="relative w-[100%] h-[250px] md:h-[300px] bg-slate-300 cursor-pointer" onClick={()=> showModal(index+10)}>
                                    {/* Imagen */}
                                    {
                                        e.img !== "" &&
                                        <Image src={e.img} width={300} height={300} alt="imagen comercial" className="h-full w-full"/>
                                    }
                                    {/* div con hover y texto */}
                                    <div className="absolute left-0 top-0 w-full h-full bg-transparent hover:transparent transition-colors duration-30 0">
                                        <div className="absolute left-0 bottom-0 w-full h-[100%] opacity-0 hover:opacity-100 transition-opacity duration-0">
                                            <div className="w-full h-10 md:h-14 absolute bottom-0 bg-[#1d4674] opacity-100"></div>
                                        </div>
                                        <p className="absolute hover:bg-[#1d4674] bottom-0 w-full h-14 p-3 text-left cursor-pointer text-sm lg:text-xl">{e.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                           
                        </div>
                    }
                    <div className="absolute bg-[#eb5347] w-full h-[40%] z-[-10]"></div>
                </div>
            </div>
            {/* MODAL */}
            {modal && <div className="modalBlur" ></div>}
                                    {
                                        modal &&
                                        <div onClick={()=> showModal(0)} className="contModalAplicaciones cursor-pointer space-x-3">
                                            <button className="btnModal w-2 h-2"></button>
                                            <button className="btnModal w-3 h-3"></button>
                                            <button className="btnModal w-4 h-4"></button>
                                            <div className="modalAplicaciones relative ">
                                                <p className="relative text-center top-[-40px] text-4xl text-white text-shadow mt-[-40px] font-bold">{
                                                numero <= 6 ?
                                                    titulosIndustriales[numero].text
                                                :
                                                    titulosComerciales[numero-10].text
                                                }
                                                </p>
                                                <Image  src={`${numero <=6 ? titulosIndustriales[numero].img :  titulosComerciales[numero-10].img}`} width={800} height={800} alt="" className="w-full" />
                                            </div>
                                            <button className="btnModal w-4 h-4"></button>
                                            <button className="btnModal w-3 h-3"></button>
                                            <button className="btnModal w-2 h-2"></button>
                                        </div>
                                    }

            {/* NOTICIAS */}
            <div className="mt-20">
                <h2 className="text-[#1d4674] text-center text-2xl md:text-6xl font-normal sombra-texto3 mb-14">BLOG Y NOTICIAS</h2>
                <div className="flex flex-col lg:flex-row justify-center space-x-4 ">
                    {
                        informacion.map((e, index)=> (
                        <Link href={`/pages/noticias/${index}`} key={index} className="flex flex-col justify-center items-center lg:w-[20%] hover:border transition hover:scale-105 hover:cursor-pointer p-4">
                            <Image className="" src={e.img} width={300} height={200} alt="" />
                            <p className={`bg-[#1d4674] rounded-sm ${index == 1 && "bg-[#f0a84d]"} ${index == 2 && "bg-[#eb5347]"} text-white relative bottom-5 w-[230px] h-[90px] text-center p-2`}>{e.titulo}</p>
                            <p className="h-[190px] w-[90%] text-center">{e.descripcion}</p>
                            <button className=" border-b-2 border-[#1d4674]">Leer más</button>
                        </Link>

                         ) )
                    }
                </div>
            </div>
        </div>
    )
}

