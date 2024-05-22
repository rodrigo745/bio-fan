"use client"
import { useState } from "react";

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
        <div>
            <div className="w-screen flex justify-between  px-4 md:px-10 py-4 bg-blue-900 text-white font-medium text-sm"> {/* Contactos - parte superior */}
                <div className="flex space-x-5 "> {/* Izquierda */}
                    <div className="flex">
                        <HiOutlineMail className="m-1 scale-125 mr-2"/>
                        <p>CONSULTA</p>
                    </div>
                    <p>|</p>
                    <div className="flex">
                        <IoCall className="m-1 scale-125 mr-2"/>
                        <p>999999999</p>
                    </div>
                    <p>|</p>
                </div>
                <div className="flex space-x-3 cursor-pointer"> {/* Derecha */}
                    <Image src="/bandera-españa.png" width={30} height={30} alt="bandera de españa" />
                    <Image src="/bandera-cataluña.png" width={30} height={30} alt="bandera de cataluña" />
                </div>
            </div>

            {/* ------------------------------------------------- */}

            <div className="bg-white flex justify-between py-6 px-4 md:px-10"> {/* Nav Desktop */}
                <div>
                    <div>
                        <Image src="/logo-bio.png" width={240} height={200} alt="Logo de bio-fan" />
                    </div>
                </div>
                {/* Escritorio */}
                <div className="text-sm  md:text-lg xl:text-xl 2xl:text-2xl hidden md:block">
                    <div className="flex text-blue-900 font-bold
                                    space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-5 2xl:space-x-10">
                        <p className={estiloHoverSecciones} >Inicio</p>
                        <p className={estiloHoverSecciones}>Aplicaciones</p>
                        <p className={estiloHoverSecciones}>Beneficios</p>
                        <p className={estiloHoverSecciones}>Productos</p>
                        <p className={estiloHoverSecciones}>Catalogo</p>
                        <p className={estiloHoverSecciones}>Contacto</p>
                        <div className={`flex pr-5 ${estiloHoverSecciones}`}>Tienda
                            <div className="scale-150">
                                <TiShoppingCart className="scale-150 mt-1 ml-3 scale-x-[-1.3]"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Movil */}
                <div className="block md:hidden">
                    <div onClick={mostrarMenu} className="rotate-90 text-4xl font-bold mt-1 cursor-pointer transition">|||</div>
                    {
                        menu &&
                        <div className="bg-white w-screen h-screen absolute top-0 left-0 transition">
                            <div className="p-10 space-y-10 text-xl font-bold text-blue-900">
                                <p className="mt-2" >Inicio</p>
                                <p className="">Aplicaciones</p>
                                <p className="">Beneficios</p>
                                <p className="">Productos</p>
                                <p className="">Catalogo</p>
                                <p className="">Contacto</p>
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
