import Image from "next/image"
import Link from "next/link"

export default function Catalogo(){

    const informacion = [
        {titulo: "INDUSTRIAL HDS", estilo:"bg-blue-900", img: "/catalogo/items/1.PNG"},
        {titulo: "COMERCIAL HDS", estilo:"bg-blue-900", img: "/catalogo/items/2.PNG"},
        {titulo: "MOVIL HDY", estilo:"bg-red-500", img: "/catalogo/items/3.PNG"},
        {titulo: "MOVIL 45° HDY", estilo:"", img: "/catalogo/items/4.PNG"},
        {titulo: "PARED HDB", estilo:"bg-orange-400", img: "/catalogo/items/5.PNG"},
        {titulo: "VERTICAL HDS/L", estilo:"bg-neutral-700", img: "/catalogo/items/6.PNG"},
        {titulo: "MODELO - 335L", estilo:"bg-blue-900", img: "/catalogo/items/7.PNG"},
        {titulo: "COOL MILITARY", estilo:"bg-blue-900", img: "/catalogo/items/8.PNG"},
        {titulo: "SENAPATI", estilo:"bg-blue-900", img: "/catalogo/items/10.PNG"},
        {titulo: "OFS PRO", estilo:"bg-blue-900", img: "/catalogo/items/9.PNG"}
    ]
    
    return(
        <div className="">
            <div className="flex flex-col lg:flex lg:flex-row justify-center items-center w-[100%] h-full lg:h-[80vh] mt-10 lg:mt-0 lg:px-36">
                 <div className="w-full lg:w[30%] flex flex-col items-center mb-14 lg:mb-0 text-center">
                    <h3 className="text-blue-900 text-3xl lg:text-4xl font-bold mb-8 sombra-texto">CATÁLOGO GENERAL</h3>
                    <Link target="_blank" href="https://bio-fan.aflip.in/Catalogo-General.html">
                        <Image src="/catalogo/1.jpg" width={300} height={300} alt="catalogo" 
                        className="hover:scale-110 transition rounded-lg shadow-md" />
                    </Link>
                    
                 </div>
                 <div className="w-full lg:w[30%] flex flex-col items-center mb-14 lg:mb-0">
                    <h3 className="text-blue-900 text-3xl lg:text-4xl  font-bold mb-8 sombra-texto text-center">CATÁLOGO RESUMEN</h3>
                    <Link target="_blank" href="https://bio-fan.aflip.in/03-CATALOGO-RESUMEN.html">
                        <Image src="/catalogo/2.jpg" width={300} height={300} alt="catalogo"
                            className="hover:scale-110 transition rounded-lg shadow-md" />
                    </Link>
                 </div>
                 <div className="w-full lg:w[20%] flex flex-col items-center mb-14 lg:mb-0 ">
                    <h3 className="text-center text-blue-900 text-3xl lg:text-4xl  font-bold mb-8 sombra-texto">CATÁLOGO EVAPORATIVO</h3>
                    <Link target="_blank" href="https://bio-fan.aflip.in/02-CATALOGO-EVAPORATIVOS.html">
                        <Image src="/catalogo/3.jpg" width={300} height={300} alt="catalogo" 
                            className="hover:scale-110 transition rounded-lg shadow-md" />
                    </Link>

                 </div>
            </div>

            {/* Catalogo */}
            <div className="w-full h-full flex flex-col items-center lg:mt-10 lg:mb-20">
                <h2 className="text-blue-900 text-3xl lg:text-5xl  sombra-texto font-bold">CATÁLOGOS</h2>
                <div className="mt-8 h-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-20 gap-y-10" id="items-productos">
                    
                    {
                        informacion.map((e, index)=> (
                            <div key={index} className="flex flex-col items-center hover:scale-125 transition cursor-pointer">
                                <div className="w-full h-full mb-4">
                                    <Image src={e.img} width={200} height={200} alt="" className={`
                                    ${index === 0 && "pt-2 scale-110"}
                                    ${index === 3 && "pt-4 "}
                                    ${index === 4 && "pt-4 "}
                                    ${index === 5 && "pt-12 scale-150"}
                                    ${index === 6 && "pt-7"}
                                    ${index === 7 && "pt-4"}
                                    ${index === 9 && "scale-110 mt-12"}
                                    `} />
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}