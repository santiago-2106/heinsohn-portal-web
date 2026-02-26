// src/app/page.tsx
import Navbar from "@/src/components/layout/navbar/Navbar";
import Footer from "@/src/components/layout/footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>Bienvenido al Portal Heinsohn</h1>
      <Footer />
    </main>
  );
}