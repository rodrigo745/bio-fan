import { Poppins } from "next/font/google";
import "./globals.css";

// Componentes
import Nav from "@/components/nav";
import Footer from "@/components/footer";


const inter = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600","700", "900"] });

export const metadata = {
  title: "Bio Fan",
  description: "Web de bio-fan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Nav/>
        <div className="pt-40">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
