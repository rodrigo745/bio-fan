// Iconos
import { HiOutlineMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";

import Image from "next/image";

export default function Nav(){
    return(
        <div>
            <div className="w-screen flex justify-between px-10 py-4 bg-blue-900 text-white font-medium text-sm"> {/* Contactos - parte superior */}
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
                <div> {/* Derecha */}
                    <p>Banderas</p>
                </div>
            </div>

            {/* ------------------------------------------------- */}

            <div className="bg-white flex justify-between py-6 px-10 text-2xl"> {/* Nav Desktop */}
                <div>
                    <div>
                        <Image src="/logo-bio.png" width={240} height={200} alt="Logo de bio-fan" />
                    </div>
                </div>

                <div>
                    <div className="flex space-x-10 text-blue-900 font-bold">
                        <p className={estiloHoverSecciones} >Inicio</p>
                        <p className={estiloHoverSecciones}>Aplicaciones</p>
                        <p className={estiloHoverSecciones}>Beneficios</p>
                        <p className={estiloHoverSecciones}>Productos</p>
                        <p className={estiloHoverSecciones}>Catalogo</p>
                        <p className={estiloHoverSecciones}>Contacto</p>
                        <div className={`flex pr-5 ${estiloHoverSecciones}`}>Tienda
                            <div className="scale-150">
                                <TiShoppingCart className="scale-150 mt-1 ml-3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const estiloHoverSecciones = "p-2 border-4 border-white hover:border-red-500 transition hover:transition hover:rounded-md cursor-pointer";
