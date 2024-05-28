import Image from "next/image"

export default function Productos(){

    const informacion = [
        {titulo: "SERIE HDS", descripcion: "VENTILADOR INDUSTRIAL", img: "/productos/1.png"},
        {titulo: "SERIE HDS", descripcion: "VENTILADOR COMERCIAL",  img: "/productos/2.png"},
        {titulo: "SERIE HDY", descripcion: "VENTILADOR MOVIL",  img: "/productos/3.jpg"},
        {titulo: "SERIE HDY", descripcion: "VENTILADOR MOVIL 45°",  img: "/productos/4.png"}
    ]
    const informacion2 = [
        {titulo: "SERIE HDB", descripcion: "VENTILADOR DE PARED", img: "/productos/5.png"},
        {titulo: "SERIE HDS/L", descripcion: "VENTILADOR VERTICAL",  img: "/productos/6.jpg"},
        {titulo: "EVAPORATIVOS", descripcion: "INDUSTRIAL-COMERCIAL",  img: "/productos/7.png"},
        {titulo: "RECUBRIMIENTO SOLAR", descripcion: "",  img: "/productos/8.png"}
    ]

    return(
        <div className="w-full ">
            <div className="w-full h-[260vh] lg:h-[77vh] flex flex-col lg:flex lg:flex-row  lg:space-x-5 mt-6 px-4" >
                {
                    informacion.map((e, index)=> (
                        <div key={index} className={`w-[100%] lg:w-[25%] h-full 
                        flex items-end justify-center mb-5 lg:mb-0 relative hover:scale-105 transition cursor-pointer`}>
                            <Image src={e.img} width={400} height={400} alt="producto" className="absolute w-full h-full" />
                            <div className={`p-3 text-center text-white         
                                rounded-lg z-30 mb-10
                                ${index >= 2 ? "bg-red-600" : "bg-blue-800"}
                            `}>
                                <h4 className="text-2xl lg:text-4xl font-bold">{e.titulo}</h4>
                                <p className="text-xl font-bold">{e.descripcion}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="w-full h-[260vh] lg:h-[75vh] flex flex-col lg:flex lg:flex-row  lg:space-x-5 mt-10 px-4 mb-10" id="producto-2">
                {
                    informacion2.map((e, index)=> (
                        <div key={index} className={`w-[100%] lg:w-[25%] h-full 
                        flex items-end justify-center mb-5 lg:mb-0 relative hover:scale-105 transition cursor-pointer`}>
                            <Image src={e.img} width={400} height={400} alt="producto" className="absolute w-full h-full" />
                            <div className={`p-3 text-center text-white         
                                rounded-lg z-30 mb-10
                                ${index == 0 && "bg-orange-400"}
                                ${index == 1 && "bg-neutral-500"}
                                ${index > 1 && "bg-blue-800"}
                            `}>
                                <h4 className="text-2xl lg:text-4xl font-bold">{e.titulo}</h4>
                                <p className="text-xl font-bold">{e.descripcion}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}