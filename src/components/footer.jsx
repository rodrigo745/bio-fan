import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="w-full bg-blue-900 h-full lg:h-[300px] text-white flex flex-col lg:flex lg:flex-row justify-between px-10 lg:px-56 lg:pt-10">
            <div className="mt-20 w-[300px] lg:w-[400px]">
                <Image src="/logo-bio-azul.jpg" width={400} height={300} alt="logo footer" />
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-0 justify-between w-[60%] mr-20">
                <div className="space-y-2 flex flex-col">
                    <h5 className="font-bold mb-2">MENÚ DE NAVEGACIÓN</h5>
                    <Link href="/">Inicio</Link>
                    <Link href="/pages/aplicaciones">Aplicaciones</Link>
                    <Link href="/pages/caracteristicas">Caracteristicas</Link>
                    <Link href="/pages/productos">Productos</Link>
                    <Link href="/pages/catalogo">Catálogo</Link>
                    <Link href="/pages/contacto">Contacto</Link>
                </div>
                <div className="flex flex-col space-y-2 mt-10 lg:mt-0 ">
                    <h5 className="font-bold mb-2">CATÁLOGO DE PRODUCTOS</h5>
                    <Link target="_blank" href="https://bio-fan.aflip.in/Catalogo-General.html">Catálogo General</Link>
                    <Link target="_blank" href="https://bio-fan.aflip.in/03-CATALOGO-RESUMEN.html">Catálogo Resumen</Link>
                    <Link target="_blank" href="https://bio-fan.aflip.in/02-CATALOGO-EVAPORATIVOS.html">Catálogo Evaporativos</Link>
                </div>
                <div >
                    <h5 className="font-bold lg:mb-2 mt-10 lg:mt-0 mb-10">CONTÁCTENOS</h5>

                </div>
            </div>
            
        </div>
    )
}