import SolucionesLandign from "../components/pages/SolucionesLandign";
import SolucionesFinanciero from "../components/pages/SolucionesFinanciero";
import SolucionesDigitales from "../components/pages/SolucionesDigitales";

export default function Home() {
  return (
    <>
      {/*<SolucionesLandign />*/}
      <div className="my-10 border-t border-gray-100" /> 
      <SolucionesFinanciero />
      <div className="my-10 border-t border-gray-100" /> 
      {/*<SolucionesDigitales />*/}
    </>
  );
}