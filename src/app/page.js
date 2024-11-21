
// componentes
import Header from "@/components/inicio/Header";
import MainUno from "@/components/inicio/MainUno";
import MainDos from "@/components/inicio/MainDos";
import MainTres from "@/components/inicio/MainTres";
import MainCuatro from "@/components/inicio/MainCuatro";

export default function Home() {
  return (
    <main className="">
        <Header/> {/* Cambio de imagenes */}
        <div className="absolute top-[90vh]" id="main"></div>
        <MainUno/>
        
        <MainDos/>
        <MainTres/>
        <MainCuatro/>
    </main>
  );
}
