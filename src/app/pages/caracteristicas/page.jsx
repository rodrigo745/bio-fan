
import Image from "next/image"

export default function Caracteristicas(){


    return(
        <div className="w-full">
            <div className="w-full h-[100%] mt-1">
                <div className="w-full bg-[#1d4674] p-10 pt-20 ">
                    <div className="flex w-[89%] m-auto space-x-12 h-[500px]">
                        <h3 className="text-4xl lg:text-7xl w-[80%] text-center pt-8 lg:mt-0 sombra-texto3 text-white roboto font-semibold ">BENEFICIOS</h3>
                        <p className="text-3xl font-medium text-white text-justify w-[100%]">Uno de los principales beneficios de los ventiladores BIOFAN es que consumen menos energía que los ventiladores tradicionales de alta velocidad debido a su menor velocidad de rotación, lo que se traduce en menores costos energéticos y una menor huella de carbono. </p>
                    </div>
                </div>


                <div className="flex flex-col lg:flex lg:flex-row justify-center w-full lg:space-x-0 items-center lg:space-y-0 px-20 absolute mt-[-290px]">
    
                    <Image src="/caracteristicas/1.jpg" width={410} height={1000} alt="" className="px-2 hover:scale-105 transition cursor-pointer"/>
                    <Image src="/caracteristicas/2.jpg" width={410} height={1000} alt="" className="px-2 hover:scale-105 transition cursor-pointer"/>
                    <Image src="/caracteristicas/3.jpg" width={410} height={1000} alt="" className="px-2 hover:scale-105 transition cursor-pointer"/>
                    <Image src="/caracteristicas/6.jpg" width={410} height={1000} alt="" className="px-2 hover:scale-105 transition cursor-pointer"/>
                </div>
                
                <div className="mt-[400px] flex w-full">
                    <div className="flex flex-col w-[30%]">
                        <div style={{lineHeight: 1.3}} className="w-[100%] ml-8 pt-40 sombra-texto4 m-auto text-5xl text-center roboto">
                        DIAGRAMA DE EXPERIENCIA CON VENTILADOR BIOFAN
                        </div>
                        <div className="text-3xl px-20 py-20 bg-[#f0c50b] text-white font-medium text-center w-[120%]  m-auto mt-[70px]">Diseñamos propuestas basadas en las proporciones y preferencias de nuestros clientes</div>
                    </div>
                    <div className="ml-20 bg-[#f0c50b] p-10 px-24">
                        <video width="1200" height="860" autoPlay loop>
                            <source src="/caracteristicas/bio.mp4" type="video/mp4"/>
                            Tu navegador no soporta el formato de video.
                        </video>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col w-[50%] bg-[#f0c50b] p-10 px-24 relative mt-[-20px]">
                        <video width="900" height="420" autoPlay loop>
                            <source src="/caracteristicas/bio2.mp4" type="video/mp4"/>
                            Tu navegador no soporta el formato de video.
                        </video>
                        <div className="mt-20 text-3xl text-[#1d4674] text-justify font-bold bg-white relative w-[113%] helvetica ml-[-110px] p-28 pl-44">
                        BIOFAN busca hacer mas que simplememte venderle ventiladores, queremos brindarle soluciones de ventilación.
                        </div>
                    </div>
                    <div className="relative ml-[-90px] bg-[#f0c50b] p-10 px-16 mt-32">
                        <video width="800" height="420" autoPlay loop>
                            <source src="/caracteristicas/bio3.mp4" type="video/mp4"/>
                        Tu navegador no soporta el formato de video.
                        </video>
                    </div>
                </div>
                <div className="w-full h-[100px] bg-white relative top-[-70px]"></div>
                <div className=" bg-[#fe7604] pb-20 pt-28 mt-[0px]">
                    <h2 className="text-2xl lg:text-7xl sombra-texto3 roboto font-bold text-white text-center">CARACTERISTICAS</h2>
                    <div className="flex flex-col lg:flex lg:flex-row justify-around w-full mt-20 lg:space-x-0 items-center lg:space-y-0 px-20">

                    <Image src="/caracteristicas/11.jpg" width={700} height={1000} alt="" className="px-8 hover:scale-105 hover:rotate-2 transition cursor-pointer"/>
                    <div className="grid grid-cols-2 gap-y-14">
                        <Image src="/caracteristicas/12.jpg" width={700} height={1000} alt="" className="px-8 hover:scale-105 hover:rotate-2 transition cursor-pointer"/>
                        <Image src="/caracteristicas/13.jpg" width={700} height={1000} alt="" className="px-8 hover:scale-105 hover:rotate-2 transition cursor-pointer"/>
                        <Image src="/caracteristicas/14.jpg" width={700} height={1000} alt="" className="px-8 hover:scale-105 hover:rotate-2 transition cursor-pointer"/>
                        <Image src="/caracteristicas/15.jpg" width={700} height={1000} alt="" className="px-8 hover:scale-105 hover:rotate-2 transition cursor-pointer"/>
                    </div>
                    <Image src="/caracteristicas/16.jpg" width={700} height={1000} alt="" className="px-8 hover:scale-105 hover:rotate-2 transition cursor-pointer"/>

                    </div>
                </div>

            </div>
        </div>
    )
}