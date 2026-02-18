import React from 'react';
import Navbar from '../layout/navbar/Navbar';
import Hero from '../sections/Hero';
import CardAnuncies from '../ui/cardsSolutions/CardAnuncies'
import Footer from '../layout/footer/Footer';
import FooterBottom from '../layout/footer/FooterBottom';
import { dataSAP } from '../data/dataSap/DataSap';

export default function SolucionesSAP() {
  return (
    <div>
      <Navbar />
      
      {/* SECCIÓN HERO */}
      <Hero 
        title={dataSAP.hero.title}
        description={dataSAP.hero.description}
        buttonText={dataSAP.hero.buttonText}
        breadcrumb={dataSAP.hero.breadcrumb}
      />

      {/* SECCIÓN CARDS IA */}
      <CardAnuncies 
        title={dataSAP.aiSection.title}
        cards={dataSAP.aiSection.cards}
        cols={2}
      />
      
      <Footer />
      <FooterBottom />
    </div>
  );
}