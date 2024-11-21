import Image from "next/image"

export default function MainCuatro(){

    return(
        <div className="w-full h-full lg:h-[100%] px-0 bg-[#f0a84d]">
            <Image src="/inicio/noticias/fondo.jpg" width={300} height={300} 
            alt="" className="w-full"/>
            <div className="flex justify-end relative lg:right-32 h-full mt-7">

                <div className="bg-white lg:w-[35%] p-6 px-8 flex lg:space-x-9">
                    <div className="hidden lg:block">
                        <Image src="/inicio/noticias/logo.jpg" width={100} height={100} alt=""  className="w-[250px] h-[70px]"/>
                    </div>
                    <div className="text-[#1d4674]">
                        <p className="text-2xl font-bold">Solicita un estudio de forma totalmente gratuita</p>
                        <p className="text-lg">Nuestro equipo técnico se desplazará hasta tus instalaciones para realizar estudios de confort térmico y de eficiencia energética gratuitos y ofrecerte así, la mejor solución de ventilación industrial.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}