
// componentes
import Header from "@/components/inicio/Header";
import MainUno from "@/components/inicio/MainUno";
import MainDos from "@/components/inicio/MainDos";
import MainTres from "@/components/inicio/MainTres";

export default function Home() {
  return (
    <main className="">
      <Header/> {/* Cambio de imagenes */}
        <MainUno/>
        <MainDos/>
        <MainTres/>
      <div className="fixed z-[-1] w-screen top-0 left-0 h-screen bg-[url('/inicio/fondo_main_1.svg')]  bg-cover"></div>
    </main>
  );
}
