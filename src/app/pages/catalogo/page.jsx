import Image from "next/image"
import Link from "next/link"

export default function Catalogo(){

    const informacion = [
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
            <h2 className="text-[#1d4674] z-10 relative text-3xl lg:text-7xl font-bold text-center mt-20 roboto">CATÁLOGOS</h2>

            <div className="flex relative flex-col lg:flex z-10 lg:flex-row justify-center w-[100%] h-full lg:h-[72vh] mt-10 lg:mt-20 lg:px-36">
                 <div className="w-full lg:w[30%] flex flex-col items-center mb-14 lg:mb-0 text-center">
                    <h3 className="text-[#1d4674] text-3xl lg:text-4xl font-semibold helvetica mb-8 text-center px-40">Catálogo General</h3>
                    <Link target="_blank" href="https://bio-fan.aflip.in/001-CATALOGO-GENERAL-BIO-FAN-2024.html">
                        <Image src="/catalogo/1.jpg" width={300} height={300} alt="catalogo" 
                        className="hover:scale-110 transition rounded-lg shadow-md" />
                    </Link>
                    
                 </div>
                 <div className="w-full lg:w[30%] flex flex-col items-center mb-14 lg:mb-0">
                    <h3 className="text-[#1d4674] text-3xl lg:text-4xl font-semibold helvetica mb-8  px-28 ml-7 text-center">Catálogo Resumen</h3>
                    <Link target="_blank" href="https://bio-fan.aflip.in/003-CATALOGO-RESUMEN-BIO-FAN-2024.html">
                        <Image src="/catalogo/2.jpg" width={300} height={300} alt="catalogo"
                            className="ml-7 hover:scale-110 transition rounded-lg shadow-md" />
                    </Link>
                 </div>
                 <div className="w-full lg:w[20%] flex flex-col items-center mb-14 lg:mb-0 ">
                    <h3 className="text-[#1d4674] text-3xl lg:text-4xl font-semibold helvetica mb-8  px-44 text-center">Catálogo Evaporativo</h3>
                    <Link target="_blank" href="https://bio-fan.aflip.in/002-CATALOGO-EVAPORATIVOS-BIO-FAN-2024.html">
                        <Image src="/catalogo/3.jpg" width={300} height={300} alt="catalogo" 
                            className="hover:scale-110 transition rounded-lg shadow-md" />
                    </Link>

                 </div>
            </div>
            <div className="w-[99vw] z-0 h-[66vh] bg-[#f0c50b] absolute top-0 left-0"></div>

            {/* Catalogo */}
            <div className="w-full h-full flex bg-[#e6e6d4] flex-col items-center mb-20 lg:mt-0 lg:mb-20 lg:pb-20">
                <h2 className="text-[#1d4674] roboto text-3xl lg:text-5xl font-bold mt-20 mb-10">CATÁLOGOS EQUIPO</h2>
                <div className="flex justify-around w-[90vw] lg:space-x-10">
                    <div className="hover:scale-105 hover:cursor-pointer transition">
                        <Image src="/productos/1/1.png" width={640} height={400} alt="" />
                        <p className="text-center mx-auto relative left-[140px] bg-[#1d4674] p-2 w-fit text-white px-5 rounded-lg text-lg font-bold">INDUSTRIAL HDS</p>
                    </div>
                    <div className="hover:scale-105 hover:cursor-pointer transition pr-20">
                        <Image src="/productos/2/1.png" width={530} height={400} alt="" />
                        <p className="text-center mx-auto relative left-[50px] bg-[#1d4674] p-2 w-fit text-white px-5 rounded-lg text-lg font-bold">COMERCIAL HDS</p>
                    </div>

                </div>
            </div>
            <div className="flex w-full justify-center items-center pb-20">
            <div className="mt-8 h-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-36 gap-y-10">
                    
                    {
                        informacion.map((e, index)=> (
                            <div key={index} className="flex flex-col items-center hover:scale-125 transition cursor-pointer">
                                <div className="w-full h-full mb-4">
                                    <Image src={e.img} width={200} height={200} alt="" className={`
                                    ${index === 1 && "pt-4 "}
                                    ${index === 2 && "pt-4 "}
                                    ${index === 3 && "pt-5 scale-150"}
                                    ${index === 4 && "pt-7"}
                                    ${index === 5 && "pt-4"}
                                    ${index === 7 && "scale-110 mt-12"}
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