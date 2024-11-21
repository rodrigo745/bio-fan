import Image from "next/image"

export default function MainTres(){
    return(
        <div className="w-full mb-4 lg:mb-0 lg:h-[100%] flex flex-col-reverse lg:flex lg:flex-row lg:justify-end lg:items-center px-10 xl:px-32 2xl:px-60 mt-20 lg:mt-10">
            <div className="w-[100%]  z-30 lg:w-[25%] justify-center mt-12  mb-10 lg:mb-0 lg:ml-32">
                
                <p className="text-[#1d4674] text-md  text-center lg:text-3xl lg:mt-48 sombra-texto4 font-normal">Los ventiladores industriales BIOFAN,
                se pueden <span className="font-semibold sombra-texto3">instalar en cualquier espacio
                </span> con techos de más de 4 metros de altura.
                </p>
            </div>
            <div className="w-[100%] lg:w-[80%] hover:scale-105 transition">
               <Image loading="lazy" className="pt-5" src="/inicio/inicio_main_3.png" width={900} height={400} alt="imagen sobre nuestra experiencia" />
            </div>
        </div>
    )
}