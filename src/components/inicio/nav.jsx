// Iconos
import { HiOutlineMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";


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

            <div className="bg-white flex justify-between py-9 px-10 text-2xl"> {/* Nav Desktop */}
                <div>
                    <div>
                        LOGO
                    </div>
                </div>

                <div>
                    <div className="flex space-x-10 text-blue-900 font-bold">
                        <p>Inicio</p>
                        <p>Aplicaciones</p>
                        <p>Beneficios</p>
                        <p>Productos</p>
                        <p>Catalogo</p>
                        <p>Contacto</p>
                        <p className="flex">Tienda
                            <TiShoppingCart/>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}