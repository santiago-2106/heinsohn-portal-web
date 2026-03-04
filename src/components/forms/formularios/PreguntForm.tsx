"use client";

import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FaqItem } from "@/src/types/typePensiones";

interface PreguntasFortProps {
  title: string;
  items: FaqItem[];
}

const AccordionItem = ({ question, answer }: FaqItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-ui last:border-0 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span
          className={`text-lg sm:text-xl font-light pr-8 transition-colors duration-300 ${
            isOpen
              ? "text-brand-accent"
              : "text-text-body group-hover:text-text-title"
          }`}
        >
          {question}
        </span>

        <span
          className={`text-brand-accent transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: 30 }} />
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-text-body text-base leading-relaxed">
          {answer.descriptions}
        </p>

        {answer.listsItems && (
          <ul className="mt-4 space-y-2 list-disc list-outside pl-5 marker:text-brand-accent">
            {answer.listsItems.map((item, index) => (
              <li key={index} className="text-text-body text-base">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default function PreguntForm({ title, items }: PreguntasFortProps) {
  return (
    <section className="bg-bg-main py-16 sm:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-center text-text-title mb-16 leading-tight">
          {title}
        </h2>

        <div className="border-t border-border-ui">
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
  );
}