import Image from "next/image"

export default function Beneficio({params}){

    const info = [
        {titulo: "Sensación térmica", descripcion: "Los ventiladores de Bio-Fan generan una brisa que disminuye la sensación térmica hasta 6°C, creando un ambiente más agradable para trabajar o realizar actividades. Esto es especialmente importante en climas cálidos o en espacios donde la actividad física genera calor. La sensación de frescor se logra a través de la circulación constante de aire, que evapora el sudor y aumenta la tasa de convección.", img: "/caracteristicas/20.jpg"},
        {
            titulo: "Estratificación y estrés térmico", descripcion: "La estratificación térmica es un fenómeno en el cual el aire en un espacio se divide en capas con diferentes temperaturas. Generalmente, el aire caliente tiende a ascender, acumulándose en la parte superior de un espacio, mientras que el aire más frío se queda en la parte inferior. Este fenómeno es común en espacios con techos altos, como almacenes, gimnasios y naves industriales. Nuestros ventiladores están diseñados para mover grandes volúmenes de aire. Al hacerlo, crean corrientes de aire que rompen las capas de aire estancado, mezclando el aire caliente en la parte superior con el aire más fresco en la parte inferior del espacio.", img: "/caracteristicas/21.jpg"
        }, 
        {
            titulo: "Impacto positivo en el medio ambiente", descripcion: "Reducción de Emisiones de CO2. La reducción del consumo de energía se traduce en una menor emisión de gases de efecto invernadero, contribuyendo a la lucha contra el cambio climático. <br/> Al disminuir la carga energética de sistemas de calefacción y refrigeración convencionales, se reduce el consumo de combustibles fósiles o electricidad, impactando positivamente en la conservación de recursos naturales y reduciendo la huella de carbono.", img: "/caracteristicas/22.jpg"
        },
        {
            titulo: "Eficiencia energética", descripcion: "Nuestros ventiladores BIOFAN están diseñados teniendo en cuenta la eficiencia energética. Utilizan motores eficientes y están optimizados para funcionar a baja velocidad, lo que les permite consumir menos electricidad en comparación con los ventiladores de alta velocidad. Esto ayuda a reducir los costos de energía y a promover prácticas sostenibles.", img: "/caracteristicas/23.jpg"
        }
    ]


    return(
        <div className="mt-20">
        { params.id == 1 &&
            <div className="flex bg-[#fecb17] p-12 justify-around mb-[250px]"> 
                <div className="helvetica text-[#1d4674] w-[50%]">
                    <p className="text-5xl font-bold bg-white w-fit p-3 px-32 relative left-[-130px]">{info[0].titulo}</p>
                    <p className="text-4xl mt-4 text-justify">{info[0].descripcion}</p>
                </div>
                <div>
                    <Image src={info[0].img} width={800} height={400} alt="" />
                </div>
                <div className="bg-[#e6e6d4] absolute py-7 p-4 flex space-x-6 top-[76vh] justify-center ml-[300px] w-[40vw]">
                    <div className="bg-[#fe7604] text-white text-center p-4 w-[30%] ">
                        <p className="text-5xl font-bold">30%</p>
                        <p className="text-xl mt-3">Ahorro de consumo energético</p>
                    </div>
                    <div className="bg-[#fe7604] text-white text-center p-4 w-[30%]">
                        <p className="text-5xl font-bold">-6°C</p>
                        <p className="text-xl mt-3">Hasta 6º menos en verano</p>
                    </div>
                    <div className="bg-[#fe7604] text-white text-center p-4 w-[30%]">
                        <p className="text-5xl font-bold">20%</p>
                        <p className="text-xl mt-3">Más de aire fresco</p>
                    </div>
                </div>
            </div>
        }
        { params.id == 2 &&
            <div className="flex bg-[#e6e6d4] p-12 justify-around mb-[120px]"> 
                <div className="helvetica text-[#1d4674] w-[50%]">
                    <p className="text-4xl font-bold bg-white w-fit p-3 px-32 relative left-[-130px]">{info[1].titulo}</p>
                    <p className="text-3xl mt-4 text-justify pr-20" style={{lineHeight: 1.4}}>{info[1].descripcion}</p>
                </div>
                <div>
                    <Image src={info[1].img} width={860} height={400} alt="" />
                </div>
            </div>
        }
        { params.id == 3 &&
            <div className="flex flex-col bg-[#6dae51] p-12 pb-[340px] justify-around mb-[320px]"> 
                <div className="helvetica text-[#1d4674] w-[100%]">
                    <p className="text-4xl font-bold bg-white w-fit p-3 px-32 relative left-[-130px]">{info[2].titulo}</p>
                    <p className="text-3xl text-white mt-4 text-justify pr-20" style={{lineHeight: 1.4}} dangerouslySetInnerHTML={{__html: info[1].descripcion}}></p>
                </div>
                <div className="absolute mt-[96vh] ml-[24vw]">
                    <Image src={info[2].img} width={860} height={400} alt="" />
                </div>
            </div>
        }
        { params.id == 4 &&
            <div className="flex bg-[#faefe8] p-12 justify-around mb-[120px]"> 
                <div className="helvetica text-[#1d4674] w-[50%]">
                    <p className="text-5xl font-bold bg-[#fecb17]  w-fit p-3 px-32 relative left-[-130px]">{info[3].titulo}</p>
                    <p className="text-4xl mt-9 text-justify pr-20" style={{lineHeight: 1.4}}>{info[3].descripcion}</p>
                </div>
                <div>
                    <Image src={info[3].img} width={860} height={400} alt="" />
                </div>
            </div>
        }
            </div>
    )
}