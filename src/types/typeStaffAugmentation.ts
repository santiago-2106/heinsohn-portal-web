import { ReactNode } from "react";

interface propInfoStaffArgumentation {
  fase?: string;
  indicador?: string;
  title: ReactNode;
  description: string;
}

interface staffArgumentationProps {
  information: propInfoStaffArgumentation[];
}


//INTERFACE PARA LA LINEA TIMELINE DE LA LANDING PRODUCTOS DE SOFTWARE
interface TimeLineSoftware {
  title: ReactNode
  description: ReactNode
  icon:ReactNode
}

export interface IconsTimeLineProps {
  informationLandingSoftware: TimeLineSoftware[]
}


//INTERFACE LANDIGN PRODUCTOS DE SOFTWARE SLIDER
export interface TestimonialItem {
  companyLogo: string
  companyName: string
  name: string
  role: string
  text: string
}