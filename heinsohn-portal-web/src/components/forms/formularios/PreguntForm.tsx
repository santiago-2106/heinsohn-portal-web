'use client'; // <--- ESTA LÍNEA ES LA SOLUCIÓN

import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// Ajusta la ruta de importación según dónde tengas tu archivo de datos
import { FaqItem } from '../../data/financiera/DataFinanciera'

// --- SUB-COMPONENTE INTERNO (Acordeón) ---
const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        {/* Pregunta */}
        <span className={`text-lg sm:text-xl font-light pr-8 transition-colors duration-300 ${isOpen ? 'text-[#E30613]' : 'text-gray-600 group-hover:text-gray-900'}`}>
          {question}
        </span>
        
        {/* Flecha Roja */}
        <span className={`text-[#E30613] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
           <KeyboardArrowDownIcon sx={{ fontSize: 30 }} />
        </span>
      </button>

      {/* Respuesta */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-500 text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL EXPORTADO ---
interface PreguntasFortProps {
  title: string;
  items: FaqItem[]; 
}

export default function PreguntasFort({ title, items }: PreguntasFortProps) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Título Principal */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-center text-gray-900 mb-16 leading-tight">
          {title}
        </h2>

        {/* Lista de Preguntas */}
        <div className="border-t border-gray-200">
            {items.map((item, index) => (
                <AccordionItem 
                    key={index} 
                    question={item.question} 
                    answer={item.answer} 
                />
            ))}
        </div>

      </div>
    </section>
  )
}