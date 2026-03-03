import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // 1. Importamos Montserrat
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";

// 2. Configuramos la fuente Montserrat
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Pesos de fuente disponibles
  variable: "--font-montserrat", // 3. Creamos la variable que lee el globals.css
});

export const metadata: Metadata = {
  title: "Heinsohn Portal",
  description: "Soluciones tecnológicas líderes en LATAM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* INYECTAMOS MATERIAL SYMBOLS ROUNDED AQUÍ (Esto es lo único nuevo) */}
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
        />
      </head>
      {/* 4. Inyectamos la fuente en el <body> para que afecte a TODAS las vistas */}
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}