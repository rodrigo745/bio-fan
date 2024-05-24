import Image from "next/image"

export default function MainDos(){

    const informacion = [
        {
            titulo: "Comodidad térmica", id: "1",
            descripcion: "Brindan un mayor confort térmico para la industria, el comercio minorista y la agroindustria.", 
            img: "/inicio/iconos_eleccion/ico_1.svg"},
        {
            titulo: "Productividad", id: "2",
            descripcion: "Cuenta con tecnología innovadora de alto flujo y baja velocidad (HVLS).", 
            img: "/inicio/iconos_eleccion/ico_2.svg"},
        {
            titulo: "Económico", id: "3",
            descripcion: "Reduzca el consumo de energía de su industria, comercio minorista o agronegocio.", 
            img: "/inicio/iconos_eleccion/ico_3.svg"},
        
            {titulo: "Tecnología", id: "4",
            descripcion: "Ventiladores industriales HVLS de alta tecnología. Productos fabricados y adaptados a su entorno.", 
            img: "/inicio/iconos_eleccion/ico_4.svg"},
        {
            titulo: "Servicio", id: "5",
            descripcion: "Servicio de atención al cliente, antes, durante y después de la compra.", 
            img: "/inicio/iconos_eleccion/ico_5.svg"},
    ]

    return(
        <div className="w-full h-screen flex flex-col lg:flex lg:flex-row justify-between items-center px-10 lg:px-60 space-x-20">
            <div className="lg:w-[30%] ">
                <h3 className="text-3xl lg:text-5xl font-bold text-blue-900 text-center">¿Por qué elegir BIO-FAN?</h3>
                <p className="text-blue-900 text-md lg:text-2xl mt-6 ">En Bio-Fan, nuestra misión es entregar productos y servicios de la más alta calidad sin compromisos. <br/> 
                Nos enorgullece mantener un compromiso inquebrantable con la seguridad en todas nuestras operaciones. </p>
            </div>
            <div className="w-full lg:w-[70%] ">
                <div className="lg:flex lg:flex-wrap justify-center">
                    {
                        informacion.map((e, index)=> (
                            <div key={index} className={`w-[230px] h-[240px] rounded-2xl p-4 flex flex-col items-center px-3  shadow-[0_5px_10px_2px_rgba(0,0,0,0.3)] border mt-12 mb-10 ml-12 text-sm
                            ${e.id === "2" || e.id === "4" ?
                            "text-white bg-blue-900"
                            :
                            " bg-white"
                            }`}>
                                <Image src={e.img} width={100} height={100} alt="icono de eleccion" className="rounded-full" />
                                <p className="text-lg font-bold text-center">{e.titulo}</p>
                                <p>{e.descripcion}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}