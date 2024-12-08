import Image from "next/image"
import Link from "next/link"

export default function Catalogo(){

    const informacion = [
        {titulo: "MOVIL HDY", estilo:"bg-red-500", img: "/catalogo/items/3.PNG"},
        {titulo: "MOVIL 45° HDY", estilo:"", img: "/catalogo/items/4.PNG"},
        {titulo: "PARED HDB", estilo:"bg-orange-400", img: "/catalogo/items/5.PNG"},
        {titulo: "VERTICAL HDS/L", estilo:"bg-neutral-700", img: "/productos/7/1/11.jpg"},
        {titulo: "VERTICAL COMERCIAL HDS/L", estilo:"bg-blue-900", img: "/productos/7/1/12.jpg"},
    ]
    const informacion2 = [
        {titulo: "MODELO - 335L", estilo:"bg-[#1d4674]", img: "/productos/7/1/1.jpg"},
        {titulo: "120L Cool Military", estilo:"bg-[#1d4674]", img: "/productos/7/1/2.jpg"},
        {titulo: "150L Cool Military", estilo:"bg-[#1d4674]", img: "/productos/7/1/3.jpg"},
        {titulo: "260 Cool Military", estilo:"bg-[#1d4674]", img: "/productos/7/1/4.jpg"},
        {titulo: "130L Senapati", estilo:"bg-[#1d4674]", img: "/productos/7/1/5.jpg"},
        {titulo: "OFS PRO", estilo:"bg-[#1d4674]", img: "/productos/7/1/6.jpg"}
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
                <div className="flex justify-around w-[90vw] lg:space-x-2">
                    <div className="hover:scale-110 hover:cursor-pointer transition">
                        <Image src="/catalogo/4.png" width={840} height={400} alt="" />
                        <p className="text-center mx-auto relative left-[10px] bg-[#1d4674] p-2 w-fit text-white px-5 rounded-lg text-lg font-bold">INDUSTRIAL HDS</p>
                    </div>
                    <div className="hover:scale-110 hover:cursor-pointer transition mt-7 pr-20">
                        <Image src="/catalogo/5.png" width={580} height={400} alt="" />
                        <p className="text-center mx-auto relative left-[-3px] mt-6 bg-[#1d4674] p-2 w-fit text-white px-5 rounded-lg text-lg font-bold">COMERCIAL HDS</p>
                    </div>

                </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center pb-20 mb-20">
            <div className="mt-8 h-full w-[69vw] grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-10">
                    
                    {
                        informacion.map((e, index)=> (
                            <div key={index} className="flex flex-col items-center hover:scale-125 transition cursor-pointer">
                                <div className="w-full h-full mb-4">
                                    <Image src={e.img} width={200} height={200} alt="" className={`
                                    ${index === 0 && "pt-4 scale-95"}
                                    ${index === 1 && "pt-8 scale-95"}
                                    ${index === 2 && "pt-8 scale-95"}
                                    ${index === 3 && "pt-12 scale-[1.4]"}
                                    ${index === 4 && "pt-14 ml-6 scale-[1.4]"}
                                    ${index === 5 && "pt-4 "}
                                    ${index === 7 && "scale-110 mt-12"}
                                    `} />
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="mt-8 h-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-10">
                    
                    {
                        informacion2.map((e, index)=> (
                            <div key={index} className="flex flex-col items-center hover:scale-125 transition cursor-pointer">
                                <div className="w-full h-full mb-4">
                                    <Image src={e.img} width={200} height={200} alt="" className={`
                                    ${index === 1 && "pt-2 "}
                                    ${index === 0 && "pt-4 "}
                                    ${index === 2 && "pt-2 "}
                                    ${index === 3 && "pt-0 "}
                                    ${index === 4 && "pt-0"}
                                    ${index === 5 && "pt-3"}
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