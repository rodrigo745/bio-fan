import Image from "next/image"
import Link from "next/link"

export default function Evaporativos(){
    return(
        <div className="grid grid-cols-6 mx-auto w-[85vw] justify-center  items-center h-[80vh] mb-20">
            <Link href="/pages/productos/8" className="cursor-pointer hover:scale-105 transition">
                <Image src="/productos/7/6.jpg" className="mt-6 " width={260} height={200} alt="" />
                <div className="w-full ">
                    <p className=" m-auto ml-16 relative mt-[20px] rounded-md font-bold text-white w-fit bg-[#1d4674] p-1 px-2">Modelo - 335L</p>
                </div>
            </Link>
           
            <div className="cursor-pointer hover:scale-105 transition">
                <Image src="/productos/7/8.jpg" className="mt-9 " width={270} height={200} alt="" />

                <div className="w-full relative mt-[-34px]">
                    <p className=" m-auto mt-3 rounded-md font-bold text-white w-fit bg-[#1d4674] p-1 px-3">120L</p>
                    <p className=" m-auto mt-3 relative bottom-4 rounded-md font-bold text-white w-fit bg-[#1d4674] p-1 px-2">Cool Military</p>
                </div>
            </div>
            <Link  href="/pages/productos/10" className="cursor-pointer hover:scale-105 transition">
                <Image src="/productos/7/1.jpg" width={270} height={200} alt="" className="mt-10" />
                <div className="w-full relative mt-[-23px]">
                    <p className=" m-auto mt-3 rounded-md font-bold text-white w-fit bg-[#1d4674] p-1 px-3">150L</p>
                    <p className=" m-auto mt-3 relative bottom-4 rounded-md font-bold text-white w-fit bg-[#1d4674] p-1 px-2">Cool Military</p>
                </div>
            </Link>
            <div className="cursor-pointer hover:scale-105 transition">
                <Image src="/productos/7/5.jpg" width={270} height={200} alt="" className="mt-10" />
                <div className="w-full relative mt-[-40px]">
                    <p className=" m-auto mt-3 rounded-md font-bold text-white w-fit bg-[#1d4674] p-1 px-3">260L</p>
                    <p className=" m-auto mt-3 relative bottom-4 rounded-md font-bold text-white w-fit bg-[#1d4674] p-1 px-2">Cool Military</p>
                </div>
            </div>
            <div className="cursor-pointer hover:scale-105 transition">
                <Image src="/productos/7/3.jpg" width={270} height={200} alt="" className="mt-10" />
                <div className="w-full relative mt-[-23px]">
                    <p className=" m-auto mt-3 rounded-md font-bold text-white w-fit bg-[#1d4674] p-1 px-3">130L</p>
                    <p className=" m-auto mt-3 relative bottom-4 rounded-md font-bold text-white w-fit bg-[#1d4674] p-1 px-2">Senapati</p>
                </div>
            </div>
            <div className="ml-10 cursor-pointer hover:scale-105 transition" >
                <Image src="/productos/7/4.jpg" width={300} height={200} alt="" className="mt-16 scale-125" />
                <div className="w-full relative mt-[28px]">
                    
                    <p className=" m-auto mt-16 relative bottom-4 rounded-md font-bold text-white w-fit bg-[#1d4674] p-1 px-2">OFS PRO</p>
                </div>
            </div>
        </div>
    )
}