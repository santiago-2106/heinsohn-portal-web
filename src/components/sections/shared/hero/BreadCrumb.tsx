"use client";

import React from "react";
import { Link } from "@/src/i18n/navigation";
import { BreadcrumbItem } from "@/src/types/typeHero";



interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {

  //Condicinal en caso de que los hero no tengan sus breadCrumbs
  if(!items || items.length === 0) return null

  return (
    <>
      {/* BreadCrumb Moviles */}
      <nav className="flex md:hidden items-start gap-2 text-sm text-text-body mb-6 w-full">
        <button
          onClick={() => window.history.back()}
          className="text-brand-accent flex shrink-0"
          aria-label="Volver"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <span className="block w-full break-word leading-snug">
          {items[items.length - 1]?.label}
        </span>
      </nav>

      {/*BreadCrumb Desktop*/}
      <nav
        aria-label="Miga de pan"
        className="hidden md:flex items-center gap-2 text-sm text-text-body mb-8"
      >
        <Link
          href="/home-agente/homee"
          className="flex items-center gap-1 hover:text-brand-accent transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Home</span>
        </Link>

        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ChevronRight />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-brand-accent transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-text-title">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}

function ChevronRight() {
  return (
    <svg
      className="w-3 h-3 text-brand-accent"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
    >
      <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}