import Image from "next/image"
import Link from "next/link"

export default function Catalogo(){

    const informacion = [
        {titulo: "INDUSTRIAL HDS", estilo:"bg-blue-900", img: "/catalogo/items/1.jpg"},
        {titulo: "COMERCIAL HDS", estilo:"bg-blue-900", img: "/catalogo/items/2.jpg"},
        {titulo: "MOVIL HDY", estilo:"bg-red-500", img: "/catalogo/items/3.jpg"},
        {titulo: "MOVIL 45º HDY", estilo:"bg-red-500", img: "/catalogo/items/4.jpg"},
        {titulo: "PARED HDB", estilo:"bg-orange-400", img: "/catalogo/items/5.jpg"},
        {titulo: "VERTICAL HDS/L", estilo:"bg-neutral-700", img: "/catalogo/items/6.jpg"},
        {titulo: "MODELO - 335L", estilo:"bg-blue-900", img: "/catalogo/items/7.jpg"},
        {titulo: "COOL MILITARY", estilo:"bg-blue-900", img: "/catalogo/items/8.jpg"},
        {titulo: "SENAPATI", estilo:"bg-blue-900", img: "/catalogo/items/9.jpg"},
        {titulo: "OFS PRO", estilo:"bg-blue-900", img: "/catalogo/items/10.jpg"}
    ]
    
    return(
        <div className="">
            <div className="flex flex-col lg:flex lg:flex-row justify-center lg:space-x-28 items-center w-full h-full lg:h-[80vh] mt-10 lg:mt-0 lg:pl-10">
                 <div className="lg:w[30%] flex flex-col items-center mb-14 lg:mb-0">
                    <h3 className="text-blue-900 text-4xl font-bold mb-8 sombra-texto">CATÁLOGO GENERAL</h3>
                    <Link target="_blank" href="https://bio-fan.aflip.in/Catalogo-General.html">
                        <Image src="/catalogo/1.jpg" width={300} height={300} alt="catalogo" 
                        className="hover:scale-110 transition rounded-lg shadow-md" />
                    </Link>
                    
                 </div>
                 <div className=" lg:w[30%] flex flex-col items-center mb-14 lg:mb-0">
                    <h3 className="text-blue-900 text-4xl font-bold mb-8 sombra-texto">CATÁLOGO RESUMEN</h3>
                    <Link target="_blank" href="https://bio-fan.aflip.in/03-CATALOGO-RESUMEN.html">
                        <Image src="/catalogo/2.jpg" width={300} height={300} alt="catalogo"
                            className="hover:scale-110 transition rounded-lg shadow-md" />
                    </Link>
                 </div>
                 <div className="lg:w[20%] flex flex-col items-center mb-14 lg:mb-0 ">
                    <h3 className="text-blue-900 text-4xl font-bold mb-8 sombra-texto">CATÁLOGO EVAPORATIVO</h3>
                    <Link target="_blank" href="https://bio-fan.aflip.in/02-CATALOGO-EVAPORATIVOS.html">
                        <Image src="/catalogo/3.jpg" width={300} height={300} alt="catalogo" 
                            className="hover:scale-110 transition rounded-lg shadow-md" />
                    </Link>

                 </div>
            </div>

            {/* Catalogo */}
            <div className="w-full h-full flex flex-col items-center lg:mt-10 lg:mb-20">
                <h2 className="text-blue-900 text-5xl sombra-texto font-bold">CATÁLOGOS</h2>
                <div className="mt-14 h-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-14">
                    
                    {
                        informacion.map((e, index)=> (
                            <div key={index} className="flex flex-col items-center hover:scale-110 transition">
                                <div className="w-full h-full mb-4">
                                    <Image src={e.img} width={200} height={200} alt="" className={`${index === 5 && "pt-8 scale-125"}
                                    ${index === 6 && "pt-6"}
                                    ${index === 9 && "pt-6"}
                                    `} />
                                </div>
                                <p className={`p-2 text-white font-bold px-4 rounded-xl shadow-lg ${e.estilo}`}>{e.titulo}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}