import Image from "next/image";

export default function Noti1(){
    return(
        <div className="helvetica">
                <h3 className="text-neutral-400 text-2xl font-bold ml-3">Inicio / Noticias / <span className="font-bold text-black">Grandes ventiladores de techo para almacenes y fabricación</span></h3>
                <div className="flex mt-0 justify-center items-center ">
                    <Image src="/noticias/1.jpg" width={650} height={400} alt="" className="" />
                    <Image src="/noticias/2.jpg" width={700} height={700} alt="" className="relative ml-[-60px] mt-[80px] w-[750px] h-[600px] " />
                </div>
                <h2 style={{textShadow: "0px 0px 2px #000"}} className="text-3xl font-semibold  text-center m-auto mt-10 w-[800px] mb-10 text-[#1d4674] helvetica">Ventiladores de techo para almacenes: una solución rentable para mejorar la circulación del aire?</h2>
                <div className="flex justify-evenly">
                    <div className="w-[47%] text-2xl text-justify" style={{lineHeight: 1.7}}>
                        <p className=" " >Los ventiladores de techo para almacenes son una forma sencilla y eficaz de mejorar la circulación del aire y reducir la necesidad de aire acondicionado en espacios industriales. Estos ventiladores de gran tamaño y alta capacidad están diseñados específicamente para su uso en almacenes y otros entornos industriales. Pueden proporcionar diversos beneficios, como ahorro de energía, mayor comodidad de los empleados y mejores condiciones de almacenamiento de los productos.
                        Los ventiladores de alto volumen y baja velocidad (HVLS) son un tipo de ventilador de techo industrial que se caracteriza por su gran tamaño y baja velocidad de funcionamiento. Estos ventiladores pueden mover un gran volumen de aire a una velocidad más lenta, lo que puede ayudar a crear un flujo de aire cómodo y distribuido de manera uniforme en todo el almacén. Los ventiladores HVLS son particularmente eficaces para enfriar espacios grandes y abiertos con techos altos y se utilizan a menudo en almacenes, instalaciones de fabricación y otros entornos industriales.</p>
                        <p className="font-bold ">A la hora de seleccionar ventiladores de techo para un almacén, hay varios factores a tener en cuenta:</p>
                        <ul className="font-bold list-disc ml-16">
                            <li>El tamaño del almacén</li>
                            <li>La altura del techo </li>
                        </ul>
                        <p>Son factores importantes, ya que el ventilador debe ser lo suficientemente grande como para que circule el aire por todo el espacio de forma eficaz. El tipo de materiales que se almacenan en el almacén también es importante, ya que algunos materiales pueden ser sensibles a los cambios de temperatura o humedad. También es importante tener en cuenta la ubicación del almacén, ya que el clima y las condiciones meteorológicas pueden afectar el rendimiento de los ventiladores.</p>
                        <Image src="/noticias/4.jpg" width={650} height={400} alt="" className="w-full mt-10 mb-20" />
                    </div>
                    <div className="w-[44%] mt-10 text-2xl text-justify" style={{lineHeight: 1.7}}>
                        <Image src="/noticias/3.jpg" width={650} height={400} alt="" className="w-full" />
                        <p className="mt-10">El mantenimiento adecuado de los ventiladores de techo de los almacenes es fundamental para garantizar que sigan funcionando de forma eficaz y segura. Esto puede incluir la limpieza de las aspas, la comprobación de que no haya pernos sueltos y la comprobación de que el cableado eléctrico esté en buenas condiciones. También es importante seguir todas las pautas de seguridad al instalar y utilizar los ventiladores, incluido el uso del equipo de protección personal adecuado y el seguimiento de todas las instrucciones del fabricante.
El uso de ventiladores de techo en almacenes tiene muchas ventajas, como ahorro de energía, mayor comodidad para los empleados y mejores condiciones de almacenamiento de los productos. Si se selecciona cuidadosamente el tipo de ventilador adecuado y se realiza el mantenimiento adecuado, los almacenes pueden disfrutar de los beneficios de una mejor circulación del aire sin incurrir en los altos costos del aire acondicionado.
En conclusión, los ventiladores de techo para almacenes son una solución sencilla y rentable para mejorar la circulación del aire y reducir la necesidad de aire acondicionado en espacios industriales. Al seleccionar cuidadosamente el tipo correcto de ventilador y realizar el mantenimiento adecuado, los almacenes pueden disfrutar de los beneficios de una mejor circulación del aire sin incurrir en el alto costo del aire acondicionado.</p>
                    </div>
                </div>
            </div>
    )
}