import Image from "next/image"

export default function MainUno(){
    return(
        <div className="w-full h-screen flex flex-col lg:flex lg:flex-row justify-between items-center px-10 lg:px-60 mt-20 lg:mt-0">
            <div className="w-[100%] lg:w-[50%]">
                <h3 className="text-3xl lg:text-4xl font-bold text-blue-900 text-center">Acerca de BIO-FAN</h3>
                <p className="text-blue-900 text-md lg:text-lg mt-6 font-medium">Todos estos años, como profesionales del sector, nos han permitido detectar las necesidades de las empresas, brindándoles siempre soluciones con un servicio personalizado y de calidad. <br/>
                Proporcionamos confort y bienestar a las personas de manera eficiente y respetuosa con el entorno. <br/>
                Consideramos esencial, sumar la calidad de vida, el bienestar y el respeto al medio ambiente.
                </p>
            </div>
            <div className="w-[100%] lg:w-[50%] text-center flex justify-center mb-44 lg:mb-0">
                <Image src="/inicio_main_1.jpg" width={500} height={500} alt="imagen acerca de bio fan" className="rounded-xl shadow-lg" />
            </div>
        </div>
    )
}