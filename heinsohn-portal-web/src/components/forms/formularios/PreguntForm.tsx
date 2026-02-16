import React, { useState } from 'react';
// Usamos un ícono de flecha (asegúrate de tener instalado MUI Icons o usa un svg/texto)
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        {/* Pregunta */}
        <span className={`text-lg sm:text-xl font-light transition-colors duration-300 pr-8 ${isOpen ? 'text-[#E30613]' : 'text-gray-600 group-hover:text-gray-900'}`}>
          {question}
        </span>
        
        {/* Flecha (Rota al abrirse) */}
        <span className={`text-[#E30613] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
           <KeyboardArrowDownIcon sx={{ fontSize: 30 }} />
        </span>
      </button>

      {/* Respuesta (Lógica de despliegue) */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-500 text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}