"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Uno() {
    const [currentIndex, setCurrentIndex] = useState(0); // Índice del botón activo
    const [vista, setVista] = useState(0); // Imagen visible
    const contRef = useRef(0);
    const intervalRef = useRef(null); // Referencia para almacenar el intervalo

    const handleClick = (index) => {
        setCurrentIndex(index); // Cambia el índice al botón clickeado
        setVista(index); // Cambia la imagen visible en el slider
        contRef.current = index; // Actualiza el índice del slider
        
        // Reinicia el intervalo para comenzar desde el índice tocado
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        // Configura el intervalo nuevamente desde el índice tocado
        intervalRef.current = setInterval(() => {
            setVista((prevVista) => (prevVista + 1) % informacion.length); // Cambia al siguiente índice
        }, 7000);
    };

    const informacion = [
        {titulo: "Circulación de aire suave", desc: "Nuestro ventilador de techo industrial ayuda a mantener una temperatura ambiente agradable y ayuda a reducir el consumo de energía en gran medida.", img: "/inicio/leer1/1.jpg"},
        {titulo: "Ventilador de techo industrial", desc: "Nuestros ventiladores de techo industriales HDS son producto de una tecnología revolucionaria y nuestra pasión por la perfección canalizadas para crear una solución energéticamente eficiente.", img: "/inicio/leer1/2.jpg"},
        {titulo: "Ventilador de techo comercial", desc: "Bajo nivel de ruido, pequeño volumen, peso ligero, estructura compacta y apariencia hermosa. Adecuado para restaurantes, supermercados, gimnasios, etc.", img: "/inicio/leer1/3.jpg"}
    ];

    // Cambiar la imagen cada 7 segundos (solo cuando el componente se monta)
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setVista((prevVista) => (prevVista + 1) % informacion.length); // Cambia al siguiente índice
        }, 7000);

        // Limpiar el intervalo cuando el componente se desmonte
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []); // Solo se ejecuta una vez cuando el componente se monta

    return (
        <div className="w-full">
            {
                informacion.map((e, index) => (
                    <div key={index}>
                        {
                            vista === index &&
                            <div>
                                <div className="w-[99vw] max-h-[50vh] relative overflow-hidden">
                                    <Image src={e.img} className="w-full slide-in-left" width={1900} height={1080} alt="" />
                                </div>
                                <div className={`absolute ml-32 mt-[-230px] w-[55%] text-white animacion-texto ${e.titulo === "Ventilador de techo comercial" && "right-0 pl-20"}`}>
                                    <h4 className={`text-5xl mb-2 font-bold ${e.titulo === "Ventilador de techo comercial" && "mr-20"}`}>{e.titulo}</h4>
                                    <p className={`text-2xl ${e.titulo === "Ventilador de techo comercial" && "mr-10"}`}>{e.desc}</p>
                                </div>
                            </div>
                        }
                        <div className="absolute mt-[-50px] flex justify-center items-center space-x-4 w-full">
                            {
                                informacion.map((_, index) => (
                                    <button key={index} onClick={() => handleClick(index)} className="bg-white h-3 w-3 rounded-full"></button>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            <div className="grid grid-cols-3  mx-auto w-[90%] mt-10 mb-10 pl-16 space-x-0">
                <div>
                    <p className="text-5xl font-bold w-[80%]">VENTILADORES DE TECHO</p>
                    <p className="border-b-4 w-[27%] border-[#1d4674] mt-2"></p>

                    <p className="text-2xl text-justify mt-[160px] w-[80%]">Genere un impacto inmediato en su empresa con la refrigeración energéticamente eficiente de nuestros ventiladores de techo industriales de alto volumen y baja velocidad (HVLS). <br/>
                    Estos potentes ventiladores están diseñados para convertir las condiciones duras en entornos agradables, lo que aumenta la productividad y la retención de los empleados. Refresque a su equipo durante el verano y recircule el aire caliente hacia la planta baja durante el invierno con la protección de confort durante todo el año de nuestros ventiladores HVLS. </p>
                    <button className="bg-[#fe7604] px-12 py-1 text-white rounded-lg font-bold mt-14">Solicite una cotización</button>
                </div>
                <div>
                    <p className="text-3xl font-bold">Ventilador de techo Industrial</p>
                    <p className="text-xl mt-2 mb-2">EL SIGUIENTE NIVEL DE INNOVACION</p>
                    <Image src="/catalogo/4.png" className="ml-3" width={440} height={400} alt="" />

                    <ul className="list-disc w-[80%] space-y-4 text-xl mt-5 text-justify">
                        <li>Seis cuchillas de aleación de aluminio y magnesio con restricciones de seguridad avanzadas.</li>
                        <li>Motor de rotor externo PMSM, el volumen de aire aumenta más del 30%.</li>
                        <li>Mantenimiento gratuito, más rentable.</li>
                        <li>Menos ruido, más comodidad.</li>
                        <li>La clasificación IP66 estándar para todo el ventilador lo hace ideal en entornos hostiles.</li>
                        <li>Los diámetros disponibles son de 10 a 24 pies (3 a 7,3 m).</li>
                    </ul>
                </div>
                <div>
                <div>
                    <p className="text-3xl font-bold">Ventilador de techo Comercial</p>
                    <p className="text-xl mt-2 mb-2">EL TIPO FUERTE Y SILENCIOSO</p>
                    <Image src="/catalogo/5.png" className="ml-12" width={340} height={400} alt="" />

                    <ul className="list-disc w-[80%] space-y-4 text-xl mt-8 text-justify">
                        <li>Motor de rotor externo PMSM, sin pérdidas en el rotor.</li>
                        <li>Tamaño pequeño y peso ligero. Ahorro de energía y alta eficiencia.</li>
                        <li>Mantenimiento gratuito, menor ruido, menos de 38dB, más cómodo.</li>
                        <li>Tamaño pequeño, ligero y hermoso.</li>
                        <li>IP55 puede soportar entornos hostiles de alta temperatura.</li>
                        <li>Diámetros disponibles 8-12 pies (2,4-3,7 m)</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="bg-[#e6e6d4] py-16 flex space-x-12 px-[8%] mb-10">
                <div className="w-[70%]" >
                    <p style={{lineHeight: 1.6}} className="text-[#fe7604] font-bold text-xl">YA SEA QUE TENGA UN COMPLEJO INDUSTRIAL O UNA PEQUEÑA TIENDA, NUESTROS EXPERTOS EN FLUJO DE AIRE ESTÁN AQUÍ PARA HACER SU VIDA MÁS FÁCIL, MÁS CÓMODA Y MENOS COSTOSA.</p>
                    <p style={{lineHeight: 1.6}} className="text-xl">Envíenos un correo electrónico a: <span className="text-[#1d4674] font-bold">info@bio-fan.com</span> , o solicite una cotización para obtener más información sobre la solución de confort más eficiente para usted. </p>
                </div>
                <button className="bg-[#fe7604] h-10 my-auto rounded-md font-bold px-10 py-1 text-white">Obtenga una cotización</button>
            </div>
            <div className="mb-10">
                <p className="text-[#1d4674] text-2xl font-bold text-center">CONOZCA SU NUEVO VENTILADOR INDUSTRIAL O COMERCIAL</p>
                <p className="text-2xl font-bold text-center">¿CUAL ES SU TIPO DE EDIFICIO?</p>
            </div>

            <div className="h-[40vh] w-[99vw] m-0 p-0 flex justify-center items-center ">
            <div  className="carrusel11">
                <div className="imagenes11">
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/10.jpg" alt="Imagen 1"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/11.jpg" alt="Imagen 2"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/12.jpg" alt="Imagen 3"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/13.jpg" alt="Imagen 4"/>
                    <Image class="imagen11" width={400} height={400} src="/inicio/leer1/14.jpg" alt="Imagen 5"/>
                    <Image class="imagen11" width={400} height={400} src="/inicio/leer1/10.jpg" alt="Imagen 1"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/11.jpg" alt="Imagen 2"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/12.jpg" alt="Imagen 3"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/13.jpg" alt="Imagen 4"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/14.jpg" alt="Imagen 5"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/10.jpg" alt="Imagen 1"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/11.jpg" alt="Imagen 2"/>
                </div>
            </div>
            </div>
            <div className="h-[40vh] w-[99vw] m-0 p-0 flex justify-center items-center ">
            <div  className="carrusel11">
                <div className="imagenes22">
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/15.jpg" alt="Imagen 1"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/16.jpg" alt="Imagen 2"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/17.jpg" alt="Imagen 3"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/18.jpg" alt="Imagen 4"/>
                    <Image class="imagen11" width={400} height={400} src="/inicio/leer1/19.jpg" alt="Imagen 5"/>
                    <Image class="imagen11" width={400} height={400} src="/inicio/leer1/15.jpg" alt="Imagen 1"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/16.jpg" alt="Imagen 2"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/17.jpg" alt="Imagen 3"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/18.jpg" alt="Imagen 4"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/19.jpg" alt="Imagen 5"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/15.jpg" alt="Imagen 1"/>
                    <Image className="imagen11" width={400} height={400} src="/inicio/leer1/16.jpg" alt="Imagen 2"/>
                </div>
            </div>
            </div>

            <div className="flex justify-evenly mt-10 mb-20">
                <video width="700" height="420" autoPlay loop>
                    <source src="/inicio/leer1/0.mp4" type="video/mp4"/>
                    Tu navegador no soporta el formato de video.
                </video>
                <Image className="w-[40vw] h-fit mt-5 " width={1400} height={400} src="/inicio/leer1/00.jpg" alt="Imagen"/>

            </div>
        </div> 
    )
}