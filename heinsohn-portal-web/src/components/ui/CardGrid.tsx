import React from "react";

interface CardGridProps {
    children: React.ReactNode;
    columns?: 1 | 2 | 3;
}


export default function CardGrid({ children, columns = 2 }: CardGridProps) {
    const gridCols = {
        1: "grid-cols-1 max-w-7xl mx-auto md:gap-10",
        2: "grid-cols-1 md:grid-cols-2 gap-12 md:gap-10",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12",
    };

    return (
        <section className={`grid ${gridCols[columns]}`}>
            {children}
        </section>
    );
}
