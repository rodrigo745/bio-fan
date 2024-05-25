import Image from "next/image"

export default function MainCuatro(){

    const informacion = [
        {
            titulo: "Grandes ventiladores de techo para almacenes y fabricación.",
            descripcion: "Ventiladores de techo para almacenes: una solución rentable para mejorar la circulación del aire. Los ventiladores de techo para almacenes son una forma sencilla y eficaz de mejorar la circulación del aire y...",
            img: "/inicio/noticias/1.jpg"
        },
        {
            titulo: "¿Qué entornos son adecuados para grandes ventiladores industriales?",
            descripcion: "¿En qué zonas se pueden utilizar grandes ventiladores? Los grandes ventiladores industriales tienen excelentes efectos de enfriamiento y extracción por lo que pueden usarse en muchos...",
            img: "/inicio/noticias/2.jpg"
        },
        {
            titulo: "Una descripción general de los ventiladores de techo industriales.",
            descripcion: "Cuando desee un ventilador de techo grande para su fabrica, almacén u otro espacio, un ventilador de techo industrial es la opción lógica...",
            img: "/inicio/noticias/3.jpg"
        }
    ]


    
    return(
        <div className="w-full h-full lg:h-[85vh] px-0 lg:pt-20">
            <h2 className="text-3xl lg:text-5xl pt-20 mb-20 lg:mb-0 font-bold text-blue-900 text-center sombra-texto">Blogs y Noticias</h2>
            <div className="flex flex-col lg:flex lg:flex-row items-center lg:justify-center lg:space-x-20 lg:scale-75 px-10"> 
                {
                    informacion.map((e, index)=> (
                        <div key={index} className="hover:sacle-105 lg:hover:scale-110 transition flex flex-col w-[350px] lg:w-[400px] h-[580px] lg:h-[630px] border bg-white rounded-lg shadow-md mb-14 lg:mb-0 ">
                            <div className="h-[260px] w-full">
                                <Image src={e.img} width={400} height={300} alt="noticias" />
                            </div>
                            <div className="px-5 h-[350px]">
                                <h3 className="text-xl lg:text-2xl h-[30%] text-blue-900 font-bold text-center ">{e.titulo}</h3>
                                <p className="text-center text-md lg:text-lg h-[55%] mt-4">{e.descripcion}</p>
                                <p className="mt-4 text-lg text-orange-400 font-semibold">Leer más</p>
                            </div>
                            <p className="text-orange-400 h-[50px] text-sm mt-8 p-4 border-t-2">29 de septiembre de 2023</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}