export default function Caracteristicas(){

    const informacion = [
        {titulo: "Motor Brushless", descripcion: "Nuevo motor de rotor externo de desarrollo propio.", img: ""},
        {titulo: "Control inteligente", descripcion: "4 botones de fácil operación.", img: ""},
        {titulo: "Bajo nivel de ruido", descripcion: " Funcionamiento súper silencioso 38dB.", img: ""}
    ]
    const informacion2 = [
        {titulo: "Diseño único", descripcion: "Diámetro de las palas de 2,4 ~ 7,3 m.", img: ""},
        {titulo: "Eficiencia", descripcion: "Más rendimiento, con menos Kw de fuerza.", img: ""},
        {titulo: "Servicio", descripcion: " Creamos proyectos según tus necesidades.", img: ""},
    ]
    const infoBeneficios = [
        {titulo: "Sensación térmica", descripcion: "Disminuye la sensación térmica hasta 6°C", img: ""},
        {titulo: "Estratificación y estrés térmico", descripcion: "Adiós a los molestos puntos calientes o fríos", img: ""},
        {titulo: "Eficiencia", descripcion: "Minimizan la necesidad de depender en exceso de sistemas de calefacción y refrigeración", img: ""},
        {titulo: "Mantenimiento y rentabilidad", descripcion: "Mantenimiento mínimo, retorno de inversión tangible tanto a corto como a largo plazo", img: ""},
        {titulo: "Impacto positivo en el medio ambiente", descripcion: "Reducción de Emisiones de CO2", img: ""}
    ]

    return(
        <div className="w-full">
            <div className="w-full h-full lg:h-[90vh]">
                <h1 className="text-5xl font-bold text-center mt-8 text-blue-900 sombra-texto">Caracteristicas</h1>
                <div className="flex flex-col lg:flex lg:flex-row justify-center w-full mt-5 lg:space-x-10 items-center space-y-10 lg:space-y-0">
                    {
                        informacion.map((e, index)=> (
                            <div key={index} className="w-[260px] h-[300px] border-4 border-red-600 rounded-lg text-blue-900 text-center hover:scale-105 transition">
                                <div className="h-[50%] "></div>
                                <h4 className="text-2xl font-bold h-[15%]">{e.titulo}</h4>
                                <p className="h-[20%]">{e.descripcion}</p>
                                <button className="h-[15%] font-bold">Aprender más</button>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col lg:flex lg:flex-row justify-center w-full mt-10 lg:space-x-10 items-center space-y-10 lg:space-y-0">
                    {
                        informacion2.map((e, index)=> (
                            <div key={index} className="w-[260px] h-[300px] border-4 border-red-600 rounded-lg text-blue-900 text-center hover:scale-105 transition">
                                <div className="h-[50%] "></div>
                                <h4 className="text-2xl font-bold h-[15%]">{e.titulo}</h4>
                                <p className="h-[20%]">{e.descripcion}</p>
                                <button className="h-[15%] font-bold">Aprender más</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full lg:h-[90vh]">
                <h3 className="text-5xl font-bold text-center mt-10 lg:mt-0 sombra-texto text-blue-900">Beneficios</h3>
                <div className="flex flex-col lg:flex lg:flex-row justify-center w-full mt-10 lg:space-x-10 items-center space-y-10 lg:space-y-0">
                        {
                            infoBeneficios.map((e, index)=> (
                                <div key={index} className="w-[260px] h-[350px] border-4 border-red-600 rounded-lg text-blue-900 text-center hover:scale-105 transition">
                                    <div className="h-[43%] "></div>
                                    <h4 className="text-2xl font-bold h-[20%]">{e.titulo}</h4>
                                    <p className="h-[27%]">{e.descripcion}</p>
                                    <button className="h-[10%] font-bold">Aprender más</button>
                                </div>
                            ))
                        }
                    </div>
                <div className="flex flex-col lg:flex lg:flex-row justify-center mt-20">
                    <div className="text-center w-[500px] lg:mt-10">
                        <h4 className="text-blue-900 sombra-texto font-bold text-5xl">Eso y mucho más</h4>
                        <p className="text-blue-900 px-10 mt-5 text-xl">Ponte en contacto con nosotros sin nungún tipo de compromiso.</p>
                    </div>
                    <div className="px-10 lg:px-0 mt-10 lg:mt-0 lg:w-[30%] lg:h-[500px] text-blue-900 font-bold  hover:scale-105 transition">
                        <p className="border-4 p-2 px-4 border-red-500 rounded-lg mb-2">Control de humedad</p>
                        <p className="border-4 p-2 px-4 border-red-500 rounded-lg mb-2">Olores y contaminantes</p>
                        <p className="border-4 p-2 px-4 border-red-500 rounded-lg mb-2">Enfriamiento y calefacción zonificados</p>
                        <p className="border-4 p-2 px-4 border-red-500 rounded-lg mb-2">Diseño de eficiencia energética</p>
                        <p className="border-4 p-2 px-4 border-red-500 rounded-lg">Prevención de la corrosión</p>
                    </div>
                </div>
            </div>
        </div>
    )
}