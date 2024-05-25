import Image from "next/image"

export default function Footer(){
    return(
        <div className="w-full bg-blue-900 h-[300px] text-white flex justify-between px-56 pt-10">
            <div className="h-full mt-20">
                <Image src="/logo-bio.jpg" width={400} height={300} alt="logo footer" />
            </div>
            <div className="flex justify-between w-[60%] mr-20">
                <div className="space-y-2">
                    <h5 className="font-bold mb-2">MENÚ DE NAVEGACIÓN</h5>
                    <p>Inicio</p>
                    <p>Aplicaciones</p>
                    <p>Caracteristicas</p>
                    <p>Productos</p>
                    <p>Catálogo</p>
                    <p>Contacto</p>
                </div>
                <div className="space-y-2">
                    <h5 className="font-bold mb-2">CATÁLOGO DE PRODUCTOS</h5>
                    <p>Catálogo General</p>
                    <p>Catálogo Resumen</p>
                    <p>Catálogo Evaporativos</p>
                </div>
                <div>
                    <h5 className="font-bold mb-2">CATÁLOGO DE PRODUCTOS</h5>

                </div>
            </div>
        </div>
    )
}