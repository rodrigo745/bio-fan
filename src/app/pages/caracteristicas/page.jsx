"use client";
import { useState } from "react";
import Image from "next/image"

export default function Caracteristicas(){


    return(
        <div className="w-full">
            <div className="w-full h-[100%] mt-10">
                <h3 className="text-4xl lg:text-8xl text-center mt-10 lg:mt-0 sombra-texto3 text-[#1d4674] roboto">BENEFICIOS</h3>
                <div className="flex flex-col lg:flex lg:flex-row justify-around w-full mt-10 lg:space-x-0 items-center lg:space-y-0 px-20">
    
                    <Image src="/caracteristicas/1.jpg" width={700} height={1000} alt="" className="px-8 hover:scale-105 transition cursor-pointer"/>
                    <Image src="/caracteristicas/2.jpg" width={700} height={1000} alt="" className="px-8 hover:scale-105 transition cursor-pointer"/>
                    <Image src="/caracteristicas/3.jpg" width={700} height={1000} alt="" className="px-8 hover:scale-105 transition cursor-pointer"/>

                </div>
                <div className="flex flex-col lg:flex lg:flex-row justify-around w-full mt-10 lg:space-x-0 items-center lg:space-y-0 px-20 pb-10">
    
                    <Image src="/caracteristicas/4.jpg" width={700} height={1000} alt="" className="px-8 hover:scale-105 transition cursor-pointer"/>
                    <Image src="/caracteristicas/5.jpg" width={700} height={1000} alt="" className="px-8 hover:scale-105 transition cursor-pointer"/>
                    <Image src="/caracteristicas/6.jpg" width={700} height={1000} alt="" className="px-8 hover:scale-105 transition cursor-pointer"/>

                </div>

                <div className="mt-24 bg-[#f0a84d] pb-20 pt-28">
                    <h2 className="text-2xl lg:text-8xl sombra-texto3 roboto text-[#1d4674] text-center">CARACTERISTICAS</h2>
                    <div className="flex flex-col lg:flex lg:flex-row justify-around w-full mt-20 lg:space-x-0 items-center lg:space-y-0 px-20">
    
                    <Image src="/caracteristicas/11.jpg" width={700} height={1000} alt="" className="px-8 hover:scale-105 hover:rotate-2 transition cursor-pointer"/>
                    <Image src="/caracteristicas/22.jpg" width={700} height={1000} alt="" className="px-8 hover:scale-105 hover:rotate-2 transition cursor-pointer"/>
                    <Image src="/caracteristicas/33.jpg" width={700} height={1000} alt="" className="px-8 hover:scale-105 hover:rotate-2 transition cursor-pointer"/>
                    <Image src="/caracteristicas/44.jpg" width={700} height={1000} alt="" className="px-8 hover:scale-105 hover:rotate-2 transition cursor-pointer"/>

                    </div>
                </div>
                
                <div className="bg-[#1d1c23] text-white pt-20">
                    <div className="flex flex-col lg:flex-row justify-center items-center ">
                        <h4 className="relative text-6xl w-[35%] left-[90px] text-center lg:mr-44 roboto sombra-texto7 top-[-70px]">DIAGRAMA DE EXPERIENCIA CON VENTILADOR</h4> 
                        <Image src="/caracteristicas/7.jpg" className="lg:w-[600px] ml-20" width={500} height={500} alt="diagrama" />
                    </div>
                    <div className="flex flex-col lg:flex-row  ">
                        {/* Diagrama 2 */}
                        <Image src="/caracteristicas/8.jpg" className="lg:w-[1120px] ml-28 relative top-[-60px]" width={500} height={500} alt="diagrama" />
                        <h4 className="relative text-5xl font-bold top-[100px] ml-20 helvetica">Sin Ventilacion</h4>
                    </div>
                    <div className="flex flex-col lg:flex-row  ">
                        {/* Diagrama 2 */}
                        <h4 className="relative text-5xl font-bold top-[0px]  left-[440px] helvetica">Con Ventilacion</h4>
                        <div className="w-[700px] h-[500px] bg-slate-400 relative right-[-40%] top-[-200px] text-center border-t-8 pt-10">Video</div>
                    </div>
                </div>

            </div>
        </div>
    )
}