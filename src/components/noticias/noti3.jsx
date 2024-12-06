import Image from "next/image";
import Link from "next/link";

export default function Noti3(){
    return(
        <div className="helvetica" >
            <h3 className="text-neutral-400 text-2xl font-bold ml-3">Inicio / Noticias / <span className="font-bold text-black">Una descripción general de los ventiladores de techo industriales.</span></h3>
            <div className="flex justify-around" >
                <div className="w-[45%]" >
                <h2 style={{textShadow: "0px 0px 2px #000"}} className="text-3xl font-semibold  text-center m-auto mt-10 w-[800px] mb-10 text-[#1d4674] helvetica" >Una descripción general de los ventiladores de techo industriales</h2>
                <p className="text-justify text-2xl" style={{lineHeight: 1.7}}>Cuando desea un ventilador de techo grande para su fábrica, almacén u otro espacio, un ventilador de techo industrial es la elección lógica.</p>
                <p className="text-justify text-2xl mt-7" style={{lineHeight: 1.7}}><span className="font-bold">Gran envergadura de la hoja</span> <br/>
                Los ventiladores de techo industriales tienen una gran envergadura de aspas, normalmente de entre 52 y 100 pulgadas. En comparación con otros ventiladores, que suelen estar hechos de madera o plástico fino, los ventiladores industriales suelen ser más duraderos: suelen estar hechos de acero, aluminio o plástico de calidad industrial.</p>
                <p className="text-justify text-2xl mt-7" style={{lineHeight: 1.7}}><span className="font-bold">Flujo de aire continuo</span> <br/>
                ¿Qué hace que los ventiladores industriales sean únicos? Bueno, funcionan a una velocidad menor que otros ventiladores, pero aún así proporcionan un flujo de aire continuo a espacios bastante grandes. Para ello, utilizan potentes motores que ayudan a convertir el aire caliente en aire más frío, lo que reduce la temperatura general de una habitación. Cuando los almacenes, por ejemplo, quieren reducir los costes energéticos, suelen invertir en ventiladores de techo industriales para enfriar sus grandes espacios.</p>
                </div>
                <div className="w-[45%] mt-12">
                    <Image src="/productos/1/1.jpg" width={680} height={700} alt="" className="border-4 " />
                    <div className="w-[87%]  mt-6 border-4">
                        <button className="bg-[#fe7604] p-3 w-full text-white text-2xl">Vista rápida</button>
                            <Link href="/pages/productos/1" className="hover:bg-slate-300 w-full h-full text-[#1d4674] text-2xl " >
                            <p className="text-center p-3 hover:bg-slate-200">Ventilador de techo industrial</p>
                            </Link>
                    </div>
                </div>
            </div>
            <h3  className="font-bold mt-10 text-center text-[#fe7604] text-3xl">Hecho especialmente para entornos industriales <br/>
                ¿Son los ventiladores de techo comerciales lo mismo que los ventiladores industriales? <br/>
                No exactamente</h3>
            <p className="text-justify text-2xl mt-7 px-12" style={{lineHeight: 1.7}}>Los ventiladores de techo comerciales no tienen motores tan potentes, por lo que no son tan ruidosos. Los ventiladores de techo comerciales, por su parte, funcionan junto con las unidades de aire acondicionado tradicionales para ayudar con el flujo de aire general. Cuando se adquieren ventiladores de techo industriales, normalmente son la fuente principal de refrigeración de aire de un área y, dado que se utilizan en espacios industriales, como talleres y garajes, está bien que sean un poco ruidosos.</p>
            <p className="text-justify text-2xl mt-7 px-12" style={{lineHeight: 1.7}}><span className="font-bold">¿En qué lugares se utilizan ventiladores de techo industriales? </span> <br/>
            Además de en fábricas y almacenes, se pueden encontrar en graneros, hangares de aviones, gimnasios, estadios de hockey, piscinas cubiertas, centros comerciales y más. Se utilizan para mover el aire y crear un efecto de enfriamiento de hasta 10 grados. Al hacer circular el aire, estos ventiladores fomentan la evaporación, lo que hace que las personas que se encuentran debajo se sientan más frescas y cómodas.</p>
            <p className="text-justify text-2xl mt-7 px-12" style={{lineHeight: 1.7}}><span className="font-bold">¡Los ventiladores industriales tienen una larga historia!</span> <br/>
            ¿Sabías que el concepto de ventiladores de techo se remonta a las primeras civilizaciones, hace miles de años? La gente del Imperio Romano solía utilizar ventiladores de hojas de palmera accionados por el hombre para enfriar la temperatura en palacios y lugares similares. La gente de esa época seguramente se maravillaría con los grandes ventiladores de techo industriales disponibles en la actualidad. Las aspas largas y anchas de la actualidad mueven mucho aire a mayor distancia que nunca, cubriendo más metros cuadrados de los que un ventilador accionado por el hombre podría manejar.</p>
            <p className="text-justify text-2xl mt-7 px-12" style={{lineHeight: 1.7}}><span className="font-bold">Los ventiladores industriales hacen que los trabajadores estén más cómodos.</span> <br/>
            Los ventiladores de techo industriales hacen que las personas se sientan cómodas en el trabajo. Esto puede ayudar a mejorar la productividad, la precisión y la moral de la empresa. ¿Preferirías trabajar en un entorno donde la temperatura fuera de 85 grados o de 75 grados? La mayoría prefiere trabajar a 75 grados, aunque se dice que la temperatura óptima es de 72 grados. <br/>
En lugar de depender de una serie de ventiladores más pequeños, ¿por qué no adquirir ventiladores industriales de gran tamaño? Un ventilador grande típico hace el trabajo de 34 ventiladores más pequeños.</p>
            <h3  className="font-bold mt-10 text-center text-[#fe7604] text-3xl px-16 mb-20">BIOFAN puede ayudarle a determinar qué ventilador(es) necesita para su espacio y cualquier detalle relacionado. Envíe un correo electrónico a BIOFAN a: info@bio-fan.com para obtener más información. </h3>

        </div>
    )
}