import Image from "next/image"

export default function Productos(){

    const informacion = [
        {titulo: "", descripcion: ""},
        {titulo: "", descripcion: ""},
        {titulo: "", descripcion: ""},
        {titulo: "", descripcion: ""},
    ]

    return(
        <div className="w-full ">
            <div className="w-full h-[83vh] flex space-x-5">
                {
                    informacion.map((e, index)=> (
                        <div key={index} className={`w-[25%] h-full 
                        ${index == 0  && "bg-black "}
                        ${index == 1 && "bg-red-400"}
                        ${index == 2 && "bg-blue-400"}
                        ${index == 3 && "bg-green-400"}
                        flex items-end justify-center pb-10`}>
                            <div className="p-3 text-center bg-orange-400 text-white rounded-lg">
                                <h4 className="text-3xl">Ventildor</h4>
                                <p className="text-lg">Ventilador de soporte</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="w-full h-[83vh] flex space-x-5 mt-10">
                {
                    informacion.map((e, index)=> (
                        <div key={index} className="w-[25%] h-full bg-slate-300 flex items-end justify-center pb-10">
                            <div className="p-3 text-center bg-orange-400 text-white rounded-lg">
                                <h4 className="text-3xl">Ventilador</h4>
                                <p className="text-lg">Ventilador de soporte</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}