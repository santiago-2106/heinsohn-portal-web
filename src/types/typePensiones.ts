import React from "react";

export interface HighlightCorporativo {
  icon?: React.ReactNode;
  value: string;
  suffix?: string;
  description: string;
}

export interface MetricItem {
  icon?: React.ReactNode;
  id: string;
  value?: string;
  suffix?: string;
  description: React.ReactNode;
}

export interface ResultsCorporativoData {
  title?: string;
  highlight: HighlightCorporativo;
  metrics: MetricItem[];
}

export interface ResultsCorporativoProps {
  data: ResultsCorporativoData;
}

export interface FaqAnswer {
  descriptions: string; //Luego quitarlo o dejarlo
  listsItems?: string[];
}

export interface FaqItem {
  question: string;
  answer: FaqAnswer; //Mirar luego cambiar por string para algo
}

export interface FaqSection {
  title: string;
  items: FaqItem[];
}