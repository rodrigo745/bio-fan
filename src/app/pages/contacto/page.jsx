import { IoCall } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function Contacto(){
    return(
        <div>
            <div className="flex flex-col items-center h-full  w-full mt-10">
                <div className="bg-slate-700 w-[340px] lg:w-[600px] h-[540px] lg:h-[510px] rounded-xl opacity-75 text-white px-4">
                    <h2 className="text-4xl text-center pt-5">Contacto</h2>
                    <input type="text" placeholder="Nombre *" 
                        className="p-2 w-full rounded-xl mt-5 px-4 bg-blue-950 text-white border"/>
                    <input type="text" placeholder="Email *" 
                        className="p-2 w-full rounded-xl mt-5 px-4 bg-blue-950 text-white border"/>
                    <input type="text" placeholder="Teléfono" 
                        className="p-2 w-full rounded-xl mt-5 px-4 bg-blue-950 text-white border"/>
                    <textarea placeholder="Mensaje *" className="p-2 w-full rounded-xl mt-5 px-4 bg-blue-950 text-white border resize-none h-[100px] overflow-auto"/>
                    <div className="mt-5">
                        <input type="checkbox" className="scale-110"/>
                        <label className="ml-4">
                            Acepto el <span className="text-blue-500 cursor-pointer">Aviso legal </span>
                            y la <span className="text-blue-500 cursor-pointer">Política de privacidad</span>
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <button className="p-2 px-6 rounded-lg mt-6 bg-orange-700">Enviar</button>
                    </div>
                </div>
            <div className="w-full flex flex-col lg:flex lg:flex-row justify-center mt-10 items-center lg:space-x-20 mb-20 lg:mb-5">
                <div className="text-center hover:scale-125 transition p-2 rounded-lg flex flex-col items-center w-[300px]">
                    <IoCall className="text-orange-500 text-6xl"/>
                    <h3 className="text-2xl font-bold mb-2">Llámanos</h3>
                    <p>633175711</p>
                </div>
                <div className="text-center hover:scale-125 transition p-2 rounded-lg flex flex-col items-center w-[300px]">
                    <TbMailFilled className="text-orange-500 text-6xl"/>
                    <h3 className="text-2xl font-bold mb-2">Escríbenos</h3>
                    <p>info@bio-fan.com</p>
                </div>
                <div className="text-center hover:scale-125 transition p-2 rounded-lg flex flex-col items-center w-[300px]">
                    <FaMapMarkedAlt className="text-orange-500 text-6xl"/>
                    <h3 className="text-2xl font-bold mb-2">Localización</h3>
                    <p>C/ Univercitat de Girona - 17005 - Girona - GIRONA</p>
                </div>
            </div>
            </div>
            <div className="w-full h-[70vh]">
            <iframe className="w-full h-[95%]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d379802.0321565998!2d2.665800923517707!3d41.952966505365396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bae132e7b077a5%3A0x669c6f196a39dac1!2sCarrer%20Universitat%20de%20Girona%2C%2017003%20Girona%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sar!4v1716622678145!5m2!1ses!2sar" width="100" height="450"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}