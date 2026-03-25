import React from "react";

export interface HighlightCorporativo {
  icon?: React.ReactNode;
  value: React.ReactNode;
  suffix?: string;
  description: React.ReactNode;
}

export interface MetricItem {
  icon?: React.ReactNode;
  id: string;
  value?: React.ReactNode;
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
  descriptions: string;
  listsItems?: string[];
}

export interface FaqItem {
  question: string;
  answer: FaqAnswer;
}

export interface FaqSection {
  title: string;
  items: FaqItem[];
}