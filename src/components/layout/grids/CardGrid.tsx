import React from "react";

interface CardGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
}

/**
 * Wrapper reutilizable de grid para Cards.
 * Centraliza la lógica de columnas responsivas — las vistas NO deben definir grillas propias.
 */
export default function CardGrid({ children, columns = 2 }: CardGridProps) {
  const gridCols = {
    1: "grid-cols-1 max-w-5xl mx-auto gap-10 p-4 sm:p-6 sm:py-12 mb-6 mt-1",
    2: "grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12",
  };

  return <section className={`grid ${gridCols[columns]}`}>{children}</section>;
}
