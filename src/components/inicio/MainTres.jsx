import Image from "next/image"

export default function MainTres(){
    return(
        <div className="w-full mb-4 lg:mb-0 lg:h-[100%] flex flex-col-reverse lg:flex lg:flex-row  lg:items-center px-10 xl:pl-40 mt-20 lg:mt-10">
            <div className="w-[100%]  z-30 lg:w-[37%] justify-center mt-12  mb-10 lg:mb-0 lg:ml-32">
                
                <p className="text-[#1d4674] text-md roboto text-center lg:text-4xl lg:mt-72 sombra-texto4 font-normal relative lg:left-[100px]">Los ventiladores industriales BIOFAN,
                se pueden <span className="font-semibold sombra-texto3">instalar en cualquier espacio
                </span> con techos de más de 4 metros de altura.
                </p>
            </div>
            <div className="w-[100%] lg:w-[120%] hover:scale-105 transition">
               <Image loading="lazy" className="pt-5" src="/inicio/inicio_main_3.png" width={1200} height={800} alt="imagen sobre nuestra experiencia" />
            </div>
        </div>
    )
}