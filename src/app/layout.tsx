import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";
import FooterBottom from "../components/layout/footer/FooterBottom";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"], 
  variable: "--font-montserrat",
  // Añadimos display swap: No cambia el color/fuente, pero acelera la carga para Web Vitals
  display: "swap", 
});

// SEO: Agregamos campos que no afectan el diseño pero ayudan a Google
export const metadata: Metadata = {
  title: "Nuevo Portal Heinsohn",
  description: "Soluciones tecnológicas líderes en LATAM",
  // Esto ayuda a que el buscador sepa que el sitio es indexable
  robots: {
    index: true,
    follow: true,
  },
  // Metadatos para redes sociales (Open Graph)
  openGraph: {
    title: "Nuevo Portal Heinsohn",
    description: "Soluciones tecnológicas líderes en LATAM",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
        />
      </head>
      {/* Mantenemos tu clase y variable de fuente intacta */}
      <body className={`${montserrat.variable} antialiased`}>
        <div className="flex flex-col min-h-screen bg-bg-main">
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          <FooterBottom />
        </div>
        
      </body>
    </html>
  );
}