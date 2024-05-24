
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
    </main>
  );
}
