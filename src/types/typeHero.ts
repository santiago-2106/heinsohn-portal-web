interface BreadcrumbItem {
  label?: string;
  href?: string;
}

export interface BadgeItem {
  prefix?: string;
  highlight?: string;
  text: string;
}

export interface HeroProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  subtitle?: React.ReactNode;
  buttonText?: string;
  buttonHref?:string;
  arrowHref?:string;
  breadcrumb?: BreadcrumbItem[]; // Hacemos opcional la prop entera por seguridad
  badges?: BadgeItem[];
  isUppercase?: boolean;
  showImage?: boolean; 
  booleanSVG?: boolean; 
}