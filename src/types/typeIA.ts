import { ReactNode } from "react";

export interface IAListSection {
  title?: string;
  type: "bullet" | "number";
  variant?: "normal" | "highlighted"; 
  items: (string | ReactNode)[];
}

export interface IACardProps {
  id: number;
  icon: ReactNode;
  title: string;
  description: ReactNode;
  lists?: IAListSection[];
  footerText?: ReactNode;
  btnText: string;
  btnHref?: string;
  btnHasBorder?: boolean; 
}