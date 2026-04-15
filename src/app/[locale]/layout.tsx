import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../globals.css";
import Navbar from "@/src/components/layout/navbar/Navbar";
import Footer from "@/src/components/layout/footer/Footer";
import FooterBottom from "@/src/components/layout/footer/FooterBottom";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

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
  },
  other: {
    google:"notranslate"
  }
};

//INTERNALIZACION PARA TRADUCIR LAS VISTAS
type Props = {
  children:React.ReactNode;
  params: Promise<{locale: string}>
}

export default async function RootLayout ({children, params} : Props){
  const { locale } = await params

  if(!hasLocale(routing.locales, locale)) return notFound()

    const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
        />
      </head>
      {/* Mantenemos tu clase y variable de fuente intacta */}
      <body className={`${montserrat.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          <FooterBottom />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}