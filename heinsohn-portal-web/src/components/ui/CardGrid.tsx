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
        1: "grid-cols-1 max-w-7xl mx-auto gap-10",
        2: "grid-cols-1 md:grid-cols-2 gap-8",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
    };

    return (
        <section className={`grid ${gridCols[columns]}`}>
            {children}
        </section>
    );
}
