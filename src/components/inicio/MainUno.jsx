import Image from "next/image"

export default function MainUno(){
    return(
        <div className="w-full  lg:h-[100%] flex flex-col lg:flex lg:flex-row justify-between items-center px-10 xl:px-32 2xl:px-60 mt-20 lg:mt-0" >
            <div className="w-[100%] lg:w-[60%]">
                <h3 className="text-3xl lg:text-5xl font-bold text-blue-900 text-center sombra-texto">Acerca de BIO-FAN</h3>
                <p className="text-blue-900 text-justify text-md lg:pr-7 lg:text-2xl mt-6 ">Todos estos años, como profesionales del sector, nos han permitido detectar las necesidades de las empresas, brindándoles siempre soluciones con un servicio personalizado y de calidad. <br/>
                Proporcionamos confort y bienestar a las personas de manera eficiente y respetuosa con el entorno. <br/>
                Consideramos esencial, sumar la calidad de vida, el bienestar y el respeto al medio ambiente.
                </p>
            </div>
            <div className="w-[80%] lg:w-[40%] hover:scale-105 transition  text-center flex justify-center mt-12 mb-20 lg:mb-0"> 
                <Image src="/inicio/inicio_main_1.jpg" width={460} height={450} alt="imagen acerca de bio fan" className="rounded-xl shadow-lg" />
            </div>
        </div>
    )
}