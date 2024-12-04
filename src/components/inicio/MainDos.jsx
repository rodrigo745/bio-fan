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
        <div className="w-full pt-14 lg:h-[100%] mt-24 pb-40 bg-[#f0a84d] px-10 xl:px-32 2xl:px-16 ">
            <div className="mb-10 ">
                <h3 className="text-3xl mt-4 lg:text-7xl font-bold roboto text-white text-center sombra-texto2">Por qué elegir BIOFAN</h3>
                
            </div>
            <div className="w-full">
                <div className="lg:flex lg:flex-wrap justify-center">
                    <Image className="w-full imgMain" src="/inicio/inicio_main_2.jpeg" width={1400} height={1400} alt="" />
                </div>
            </div>
        </div>
    )
}