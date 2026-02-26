import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heinsohn Portal Web",
  description: "A web portal for Heinsohn, providing access to various services and resources."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
