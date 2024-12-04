import Image from "next/image"

export default function MainCuatro(){

    return(
        <div className="w-full h-full lg:h-[100%] bg-[#f0a84d]">
            <Image src="/inicio/noticias/fondo.jpg" width={1300} height={300} 
            alt="" className="w-full h-[700px]"/>
            <div className="flex justify-end relative lg:right-32 bottom-32">

                <div className="bg-white lg:w-[38.5%] p-6 px-8 pt-10 pl-12 flex lg:space-x-9">
                    <div className="hidden lg:block">
                        <Image src="/inicio/noticias/logo.jpg" width={100} height={100} alt=""  className="w-[140px] mt-6"/>
                    </div>
                    <div className="text-[#1d4674] roboto w-[100%] pr-10 mb-8">
                        <p className="text-4xl font-medium sombra-texto4 mt-5 mb-5">Solicita un estudio de forma totalmente gratuita</p>
                        <p className="text-xl text-justify">Nuestro equipo técnico se desplazará hasta tus instalaciones para realizar estudios de confort térmico y de eficiencia energética gratuitos y ofrecerte así, la mejor solución de ventilación industrial.</p>
                        <div className="w-full pl-14 mt-5 px-8 py-4 bg-[#1d4674] flex text-white text-xl font-semibold cursor-pointer hover:bg-blue-900">SOLICITAR ESTUDIO AHORA 
                            <p className="relative left-5 mr-3 top-[1px] lineaSol"></p>
                            <p className=" relative scale-150 mt-[6px] lg:mt-0">{">"}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}