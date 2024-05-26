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

    return(
        <div className="w-full">
            <div className="w-full h-full lg:h-[90vh]">
                <h1 className="text-5xl font-bold text-center mt-8 text-blue-900">Caracteristicas</h1>
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
                <div className="w-full h-[80vh]">

                </div>
        </div>
    )
}