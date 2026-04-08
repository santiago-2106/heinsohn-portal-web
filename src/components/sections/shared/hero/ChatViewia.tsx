"use client";

import React from "react";
import Image from "next/image";

export interface Message {
  id: number;
  role: "user" | "ai";
  type?: "title" | "text" | "card";
  content: string;
  description?: string;
  image?: string;
}

export interface ChatProps {
  data: {
    sidebar: { image: string; opacity: number };
    chat: { placeholder: string; initialMessages: Message[] };
  };
}

export default function ChatViewia({ data }: ChatProps) {
  const messages = data.chat.initialMessages;

  return (
    <div className="w-full px-4 flex justify-center bg-transparent">
      <section className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto my-8 h-[90vh] min-h-[850px] bg-bg-main overflow-hidden border border-border-ui shadow-sm">
        
        {/* =========================================
            LADO IZQUIERDO: Columna sin borde derecho (se quitó border-r)
        ========================================= */}
        <div className="hidden md:block md:w-[45%] h-full shrink-0 bg-white">
          
          <div className="relative w-full h-[550px] lg:h-[890px]">
            <Image
              src={data.sidebar.image}
              alt="Diseño decorativo"
              fill
              className="object-cover object-top opacity-100" 
              priority
            />
            <button 
              onClick={() => window.history.back()}
              className="absolute top-10 right-10 w-11 h-11 bg-black rounded-full flex items-center justify-center text-white z-10 hover:bg-black/80 transition-colors"
            >
              <span className="material-symbols-rounded font-light">arrow_back</span>
            </button>
          </div>
          
        </div>

        {/* =========================================
            LADO DERECHO: Contenido con Scroll
        ========================================= */}
        <div className="flex-1 flex flex-col h-full bg-white relative">
          
          <div className="flex-1 overflow-y-auto p-6 md:p-10 flex justify-center w-full scroll-smooth">
            
            <div className="flex flex-col gap-8 w-full max-w-[550px] mx-auto pb-10 mt-4 md:mt-10">
              
              {messages.map((msg) => (
                <div key={msg.id} className="flex w-full">
                  
                  {/* TÍTULO DE IA */}
                  {msg.type === "title" && msg.role === "ai" && (
                    <div className="w-full max-w-[480px] border border-border-ui bg-white p-8 md:p-10 ml-auto shadow-sm">
                      <h2 className="text-3xl md:text-[32px] text-text-title font-light text-right leading-[1.2] whitespace-pre-line">
                        {msg.content}
                      </h2>
                    </div>
                  )}

                  {/* TEXTO DE IA */}
                  {msg.type === "text" && msg.role === "ai" && (
                    <p className="text-[13px] md:text-[14px] text-text-body font-light leading-relaxed w-full whitespace-pre-line">
                      {msg.content}
                    </p>
                  )}

                  {/* CARD DE NOTICIA DE IA */}
                  {msg.type === "card" && msg.role === "ai" && (
                    <div className="w-full border border-border-ui bg-white flex flex-col sm:flex-row overflow-hidden shadow-sm">
                      <div className="relative w-full sm:w-[40%] h-40 sm:h-auto border-b sm:border-b-0 sm:border-r border-border-ui">
                        <Image src={msg.image || ""} alt="Noticia" fill className="object-cover" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="material-symbols-rounded text-gray-500 text-[18px]">auto_awesome</span>
                          <h4 className="text-[14px] font-medium text-text-title">{msg.content}</h4>
                        </div>
                        <p className="text-[12px] text-text-body font-light leading-snug">{msg.description}</p>
                      </div>
                    </div>
                  )}

                  {/* MENSAJE DEL USUARIO */}
                  {msg.role === "user" && (
                    <div className="w-full max-w-[450px] border border-border-ui bg-white p-6 md:p-8 ml-auto flex justify-end shadow-sm mt-4">
                      <p className="text-2xl md:text-[28px] text-text-title font-light text-right leading-[1.2] whitespace-pre-line">
                        {msg.content}
                      </p>
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>

          {/* Barra de Input Estática (Se quitó border-t para eliminar la línea de arriba) */}
          <div className="w-full p-6 md:p-10 flex justify-center bg-white shrink-0">
            <div className="w-full max-w-[550px] mx-auto">
              <div className="w-full flex items-center gap-3 border border-border-ui rounded-full px-5 py-2.5 bg-white shadow-sm">
                <span className="material-symbols-rounded text-gray-400 font-light text-[18px]">auto_awesome</span>
                <input 
                  type="text" 
                  placeholder={data.chat.placeholder} 
                  className="flex-1 bg-transparent border-none focus:outline-none text-text-body text-[14px]"
                  readOnly 
                />
                <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white shrink-0 cursor-default">
                  <span className="material-symbols-rounded text-[18px]">arrow_upward</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}