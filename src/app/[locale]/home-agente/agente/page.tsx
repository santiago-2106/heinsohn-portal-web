import React from "react";
// Importamos el componente (Asegúrate de que la ruta sea la correcta para tu alias)
import ChatViewia from "@/src/components/sections/shared/hero/ChatViewia";

// Importamos el JSON
import agenteDataRaw from "../../../../../messages/es/agente.json";

// 1. Definimos los tipos aquí mismo para que TypeScript no se pierda
interface Message {
  id: number;
  role: "user" | "ai";
  type?: "title" | "text" | "card";
  content: string;
  description?: string;
  image?: string;
}

interface ChatData {
  sidebar: { image: string; opacity: number };
  chat: { placeholder: string; initialMessages: Message[] };
}

export default function AgentePage() {
  // 2. Forzamos el tipado usando la interfaz local
  const agenteData = agenteDataRaw as unknown as ChatData;

  if (!agenteData) {
    return <div>Cargando configuración del agente...</div>;
  }

  return (
    <main className="min-h-screen w-full">
      <ChatViewia data={agenteData} />
    </main>
  );
}