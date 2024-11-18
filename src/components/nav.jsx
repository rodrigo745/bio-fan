"use client";
import { useState } from "react";
import Link from "next/link";

// Iconos
import { HiOutlineMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";

import Image from "next/image";

export default function Nav(){

    const [ menu, setMenu ] = useState(false);

    const mostrarMenu = ()=>{
        menu ? setMenu(false) : setMenu(true);
    }

    return(
        <div className="fixed w-full z-50">
            <div className="w-full flex justify-between  px-4 md:px-10 py-4 bg-[#1d4674] text-white font-medium text-sm"> {/* Contactos - parte superior */}
                <div className="flex space-x-3 md:space-x-5 "> {/* Izquierda */}
                    <div className="flex">
                        <HiOutlineMail className="m-1 scale-125 mr-2"/>
                        <p>CONSULTA</p>
                    </div>
                    <p>|</p>
                    <div className="flex">
                        <IoCall className="m-1 scale-125 mr-2"/>
                        <p>633175711</p>
                    </div>
                    <p>|</p>
                </div>
                
            </div>

            {/* ------------------------------------------------- */}

            <div className="bg-white border-b-2 shadow-md flex px-5 justify-between py-1"> {/* Nav Desktop */}
                <Link href="/">
                    <div className="h-full w-fit flex justify-center content-center items-center">
                        <Image className="w-[180px] lg:w-[300px] pl-4" src="/logo-bio.png" width={300} height={200} alt="Logo de bio-fan" />
                    </div>
                </Link>
                {/* Escritorio */}
                <div className="text-sm sm:text-sm  md:text-md lg:text-lg xl:text-xl 2xl:text-2xl hidden md:block">
                    <div className="flex text-[#1d4674] font-semibold
                                    sm:space-x-1 md:space-x-3 lg:space-x-2 xl:space-x-3 2xl:space-x-5 pt-2">
                        <Link href="/#main" className={estiloHoverSecciones} >Inicio</Link>
                        <Link href="/pages/aplicaciones" className={estiloHoverSecciones}>Aplicaciones</Link>
                        <Link href="/pages/caracteristicas" className={estiloHoverSecciones}>Beneficios</Link>
                        <div className="dropdown">
                            <Link href="/pages/productos" className={`flex ${estiloHoverSecciones}`}> Equipos
                            <p className="rotate-90 ml-1 ">{`>`}</p>
                            </Link>
                            <div className="dropdown-content cursor-pointer">
                                <Link href="/pages/productos" className="enlace">Ventilador Industrial</Link>
                                <Link href="/pages/productos" className="enlace">Ventilador Comercial</Link>
                                <Link href="/pages/productos" className="enlace">Ventilador Movil</Link>
                                <Link href="/pages/productos" className="enlace">Ventilador Movil 45º</Link>
                                <Link href="/pages/productos" className="enlace">Ventilador de Pared</Link>
                                <Link href="/pages/productos" className="enlace">Ventilador Vertical</Link>
                                <Link href="/pages/productos" className="enlace">Industrial Comercial</Link>
                                <Link href="/pages/productos" className="enlace">Recubrimiento Solar</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Link href="/pages/catalogo" className={`flex ${estiloHoverSecciones}`}> Catalogo
                            <p className="rotate-90 ml-1 ">{`>`}</p>
                            </Link>
                            <div className="dropdown-content">
                                <Link target="_blank" className="enlace" href="https://bio-fan.aflip.in/Catalogo-General.html">Catálogo General</Link>
                                <Link target="_blank" className="enlace" href="https://bio-fan.aflip.in/03-CATALOGO-RESUMEN.html">Catálogo Resumen</Link>
                                <Link target="_blank" className="enlace" href="https://bio-fan.aflip.in/02-CATALOGO-EVAPORATIVOS.html">Catálogo Evaporativos</Link>
                            </div>
                        </div>
                        <Link href="/pages/contacto" className={estiloHoverSecciones}>Contacto</Link>
                        <div className={`flex pr-5 ${estiloHoverSecciones}`}>
                            <Link href="/">Tienda</Link>
                            <div className="scale-150">
                                <TiShoppingCart className="scale-125 mt-1 ml-3"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Movil */}
                <div className="block md:hidden">
                    <div onClick={mostrarMenu} className="rotate-90 text-3xl font-bold mt-1 cursor-pointer">|||</div>
                    {
                        menu &&
                        <div className={`${menu ? "menuOn" : "menuOff"}`}>
                            <div className="flex flex-col p-14 pt-20 space-y-10 text-xl font-bold text-blue-900 ">
                                <Link onClick={mostrarMenu} href="/" className={estiloHoverSecciones} >Inicio</Link>
                                <Link onClick={mostrarMenu} href="/pages/aplicaciones" className={estiloHoverSecciones}>Aplicaciones</Link>
                                <Link onClick={mostrarMenu} href="/pages/caracteristicas" className={estiloHoverSecciones}>Caracteristicas</Link>
                                <Link onClick={mostrarMenu} href="/pages/productos" className={estiloHoverSecciones}>Productos</Link>
                                <Link onClick={mostrarMenu} href="/pages/catalogo" className={estiloHoverSecciones}>Catalogo</Link>
                                <Link onClick={mostrarMenu} href="/pages/contacto" className={estiloHoverSecciones}>Contacto</Link>
                                <Link onClick={mostrarMenu} href="/" className={estiloHoverSecciones}>Tienda</Link>
                                <p onClick={mostrarMenu} className="absolute top-0 right-10 text-3xl cursor-pointer">x</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

const estiloHoverSecciones = "p-2 border-4 border-white hover:border-red-500 transition hover:transition hover:rounded-md cursor-pointer";
