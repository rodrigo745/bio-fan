export default function Contacto(){
    return(
        <div>
            <div className="flex justify-center w-full h-[80vh] mt-10">
                <div className="bg-black w-[600px] h-[600px] rounded-xl opacity-75 text-white px-4">
                    <h2 className="text-4xl text-center pt-10">Contacto</h2>
                    <input type="text" placeholder="Nombre *" 
                        className="p-2 w-full rounded-xl mt-5 px-4 bg-blue-950 text-white border"/>
                    <input type="text" placeholder="Email *" 
                        className="p-2 w-full rounded-xl mt-5 px-4 bg-blue-950 text-white border"/>
                    <input type="text" placeholder="Teléfono" 
                        className="p-2 w-full rounded-xl mt-5 px-4 bg-blue-950 text-white border"/>
                    <textarea placeholder="Mensaje *" className="p-2 w-full rounded-xl mt-5 px-4 bg-blue-950 text-white border resize-none h-[100px] overflow-auto"/>
                    <div className="mt-2">
                        <input type="checkbox" className="scale-110"/>
                        <label className="ml-4">
                            Acepto el <span className="text-blue-500">Aviso legal </span>
                            y la <span className="text-blue-500">Política de privacidad</span>
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <button className="p-2 px-6 rounded-lg mt-4 bg-orange-700">Enviar</button>

                    </div>
                </div>
            </div>

        </div>
    )
}