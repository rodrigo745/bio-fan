"use client";
import { useState } from "react";
import Image from "next/image"

export default function Caracteristicas(){

    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = (e) => {
      // Mantener la vista en la parte superior del contenedor
      setScrollTop(0);
    };


    const informacion = [
        {titulo: "Motor Brushless", descripcion: "Nuevo motor de rotor externo de desarrollo propio.", img: "/caracteristicas/1.jpg"},
        {titulo: "Control inteligente", descripcion: "4 botones de fácil operación.", img: "/caracteristicas/2.jpg"},
        {titulo: "Bajo nivel de ruido", descripcion: " Funcionamiento súper silencioso 38dB.", img: "/caracteristicas/3.jpg"}
    ]
    const informacion2 = [
        {titulo: "Diseño único", descripcion: "Diámetro de las palas de 2,4 ~ 7,3 m.", img: "/caracteristicas/4.jpg"},
        {titulo: "Eficiencia", descripcion: "Más rendimiento, con menos Kw de fuerza.", img: "/caracteristicas/5.jpg"},
        {titulo: "Servicio", descripcion: " Creamos proyectos según tus necesidades.", img: "/caracteristicas/6.jpg"},
    ]
    const infoBeneficios = [
        {titulo: "Sensación térmica", descripcion: "Disminuye la sensación térmica hasta 6°C", img: "/caracteristicas/beneficios/1.jpg"},
        {titulo: "Estratificación y estrés térmico", descripcion: "Adiós a los molestos puntos calientes o fríos", img: "/caracteristicas/beneficios/2.jpg"},
        {titulo: "Eficiencia", descripcion: "Minimizan la necesidad de depender en exceso de sistemas de calefacción y refrigeración", img: "/caracteristicas/beneficios/3.jpg"},
        {titulo: "Mantenimiento y rentabilidad", descripcion: "Mantenimiento mínimo, retorno de inversión tangible tanto a corto como a largo plazo", img: "/caracteristicas/beneficios/4.jpg"},
        {titulo: "Impacto positivo en el medio ambiente", descripcion: "Reducción de Emisiones de CO2", img: "/caracteristicas/beneficios/5.jpg"}
    ]

    return(
        <div className="w-full">
            <div className="w-full h-[100%]">
                <h1 className="text-4xl lg:text-5xl font-bold text-center mt-8 text-blue-900 sombra-texto">Caracteristicas</h1>
                <div className="flex flex-col lg:flex lg:flex-row justify-center w-full mt-5 lg:space-x-10 items-center space-y-10 lg:space-y-0">
                    {
                        informacion.map((e, index)=> (
                            <div key={index} className="w-[260px] h-[300px] border-4 border-red-600 rounded-lg text-blue-900 text-center hover:scale-110 transition ">
                                <div className="h-[50%] flex justify-center">
                                    <Image src={e.img} width={150} height={140} alt="imagen" />
                                </div>
                                <h4 className="text-2xl font-bold h-[15%]">{e.titulo}</h4>
                                <p className="h-[20%]">{e.descripcion}</p>
                                <button className="h-[15%] font-bold hover:scale-125 transition">Aprender más</button>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col lg:flex lg:flex-row justify-center w-full mt-10 lg:space-x-10 items-center space-y-10 lg:space-y-0">
                    {
                        informacion2.map((e, index)=> (
                            <div key={index} className="w-[260px] h-[300px] border-4 border-red-600 rounded-lg text-blue-900 text-center hover:scale-105 transition">
                                <div className="h-[50%] flex justify-center">
                                <Image src={e.img} width={150} height={140} alt="imagen" />
                                </div>
                                <h4 className="text-2xl font-bold h-[15%]">{e.titulo}</h4>
                                <p className="h-[20%]">{e.descripcion}</p>
                                <button className="h-[15%] font-bold hover:scale-125 transition">Aprender más</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full h-[100%] mt-10">
                <h3 className="text-4xl lg:text-5xl font-bold text-center mt-10 lg:mt-0 sombra-texto text-blue-900">Beneficios</h3>
                <div className="flex flex-col lg:flex lg:flex-row justify-center w-full mt-10 lg:space-x-10 items-center space-y-10 lg:space-y-0">
                        {
                            infoBeneficios.map((e, index)=> (
                                <div key={index} className="w-[260px] h-[350px] border-4 border-red-600 rounded-lg text-blue-900 text-center hover:scale-110 transition">
                                    <div className="h-[43%] flex justify-center">
                                        <Image src={e.img} width={150} height={140} alt="imagen" />
                                    </div>
                                    <h4 className="text-2xl font-bold h-[20%]">{e.titulo}</h4>
                                    <p className="h-[27%]">{e.descripcion}</p>
                                    <button className="h-[10%] font-bold hover:scale-125 transition">Aprender más</button>
                                </div>
                            ))
                        }
                    </div>
                <div className="flex flex-col lg:flex h-[400px] lg:flex-row justify-center mt-20 ">
                    <div className="text-center w-full lg:w-[500px] lg:mt-10">
                        <h4 className="text-blue-900 sombra-texto font-bold text-4xl lg:text-5xl">Eso y mucho más</h4>
                        <p className="text-blue-900 px-10 mt-5 text-xl">Ponte en contacto con nosotros sin nungún tipo de compromiso.</p>
                    </div>
                
                    <div className="px-10 lg:px-0 mt-10 lg:mt-0 lg:h-[300px] text-blue-900 font-bold overflow-y-scroll flex flex-col items-center lg:w-[30%] relative contenedor">
  <div className="sticky top-0 w-full bg-white z-10">
    {/* Contenido fijo aquí */}
    <p className="border-4 p-2 px-4 border-red-500 bg-white rounded-lg w-[360px] lg:w-[500px] bar top-0">Control de humedad</p>
    <p className="border-4 p-2 px-4 border-red-500 bg-white rounded-lg w-[360px] lg:w-[500px] top-9 bar bar2">Olores y contaminantes</p>
    <p className="border-4 p-2 px-4 border-red-500 bg-white rounded-lg w-[360px] lg:w-[500px] bar top-[72px] bar3">Enfriamiento y calefacción zonificados</p>
    <p className="border-4 p-2 px-4 border-red-500 bg-white rounded-lg w-[360px] lg:w-[500px] top-[110px] bar bar4">Diseño de eficiencia energética</p>
    <p className="border-4 p-2 px-4 border-red-500 bg-white rounded-lg w-[360px] lg:w-[500px] top-[150px] bar bar5">Prevención de la corrosión</p>
  </div>
  {/* Contenido scrollable */}
  <div>
    {/* Aquí puedes añadir el contenido scrollable */}
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</div>

                </div>
            </div>
        </div>
    )
}