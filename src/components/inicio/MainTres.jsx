import Image from "next/image"

export default function MainTres(){
    return(
        <div className="w-full mb-4 lg:mb-0 lg:h-[100%]flex flex-col-reverse lg:flex lg:flex-row lg:justify-between lg:items-center px-10 xl:px-32 2xl:px-60 mt-20 lg:mt-10">
            <div className="w-[100%] lg:w-[70%] hover:scale-105 transition">
               <Image loading="lazy" className="pt-5" src="/inicio/inicio_main_3.png" width={800} height={300} alt="imagen sobre nuestra experiencia" />
            </div>
            <div className="w-[100%]  z-30 lg:w-[40%]  justify-center mt-12  mb-10 lg:mb-0">
                <h3 className="text-3xl lg:text-5xl font-bold text-blue-900 text-center sombra-texto px-3">Nuestra experiencia</h3>
                <p className="text-blue-900 text-md text-justify lg:text-2xl mt-6">En Bio-Fan, nuestra experiencia nos ha enseñado que la ventilación eficiente es crucial para el bienestar de las personas, el rendimiento óptimo de la maquinaria y el cumplimiento de normativas de seguridad y medioambientales.</p>
            </div>
        </div>
    )
}