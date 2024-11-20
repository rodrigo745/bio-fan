import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="w-full bg-[#e6e6d4] h-full lg:h-[300px] text-[#1d4674] flex flex-col lg:flex lg:flex-row justify-between px-10 lg:px-56 lg:pt-10">
            <div className="mt-14 w-[300px] lg:w-[400px]">
                <Image src="/logo-bio-azul.jpg" width={400} height={300} alt="logo footer" />
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-0 justify-between w-[60%] mr-10">
                <div className="space-y-2 flex flex-col font-semibold">
                    <h5 className="font-bold mb-2">MENÚ DE NAVEGACIÓN</h5>
                    <Link href="/">Inicio</Link>
                    <Link href="/pages/aplicaciones">Aplicaciones</Link>
                    <Link href="/pages/caracteristicas">Beneficios</Link>
                    <Link href="/pages/productos">Equipos</Link>
                    <Link href="/pages/catalogo">Catálogo</Link>
                    <Link href="/pages/contacto">Contacto</Link>
                </div>
                <div className="flex flex-col space-y-2 mt-10 lg:mt-0 ">
                    <h5 className="font-bold mb-2">CATÁLOGO DE EQUIPOS</h5>
                    <p className="font-semibold">Solicitud</p>
                    <Link className="font-semibold" target="_blank" href="https://bio-fan.aflip.in/Catalogo-General.html">Catálogo General</Link>
                    <Link className="font-semibold" target="_blank" href="https://bio-fan.aflip.in/03-CATALOGO-RESUMEN.html">Catálogo Resumen</Link>
                    <Link className="font-semibold" target="_blank" href="https://bio-fan.aflip.in/02-CATALOGO-EVAPORATIVOS.html">Catálogo Evaporativos</Link>
                </div>
                <div className="space-y-2">
                    <h5 className="font-bold lg:mb-2 mt-10 lg:mt-0 mb-10">CONTÁCTENOS</h5>
                    <div className="flex font-semibold">
                        <Image className="w-6 h-6 ml-1" src="/log1.jpg" width={24} height={20} alt=""/>
                        <p className="ml-2 mr-9">Mobil</p>
                        <p>: +34 619 28 33 74</p>
                    </div>
                    <div className="flex font-semibold">
                        <Image className="w-7 h-6" src="/log2.jpg" width={24} height={20} alt=""/>
                        <p className="ml-2 mr-1">Contacto</p>
                        <p>: info@bio-fan.com</p>
                    </div>
                    <div className="flex font-semibold">
                        <Image src="/log3.jpg" className="w-7 h-6" width={24} height={20} alt=""/>
                        <p className="ml-2 mr-1">Dirección</p>
                        <p>: Vip Centro de Negocios. {<br></br>} C/Josep M. Gironella, 1-3. 17005 Girona.</p>

                    </div>
                </div>
            </div>
            
        </div>
    )
}