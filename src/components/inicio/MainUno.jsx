import Image from "next/image"

export default function MainUno(){
    return(
        <div className="w-full  lg:h-[100%] flex flex-col lg:flex lg:flex-row justify-between items-center px-10 xl:px-32 2xl:px-60 mt-10 lg:mt-20" >
            <div className="w-[100%] lg:w-[55%]">
                <h3 className="text-3xl lg:text-8xl  text-[#1d4674]  sombra-texto">ACERCA DE BIOFAN</h3>
                <p className="text-[#1d4674] text-md lg:pr-7 lg:text-2xl mt-6 ">Como profesionales del sector, nos han permitido detectar las necesidades de las empresas, brindándoles siempre soluciones con un servicio personalizado y de calidad.
                Consideramos esencial, sumar la calidad de vida, el bienestar y el respeto al medio ambiente.
                </p>
                <button className="p-1 px-8 font-medium mt-4 rounded-lg bg-[#eb5347] text-white">Leer más</button>
            </div>
            <div className="w-[80%] lg:w-[40%] hover:scale-105 transition  text-center flex justify-center mt-12 mb-20 lg:mb-0"> 
                <Image loading="lazy" src="/inicio/inicio_main_1.jpg" width={460} height={450} alt="imagen acerca de bio fan" className="shadow-lg" />
            </div>
        </div>
    )
}