
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
          <MainUno/>
        
        <MainDos/>
        <MainTres/>
        <MainCuatro/>
      <div className="fixed z-[-1] w-screen top-0 left-0 h-screen bg-[url('/inicio/fondo_main_1.svg')]  bg-cover"></div>
    </main>
  );
}
