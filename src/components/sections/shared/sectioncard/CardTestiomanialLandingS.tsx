import { TestimonialItem } from "@/src/types/typeStaffAugmentation"

interface TestimonialCardProps {
  item: TestimonialItem
}

export default function CardTestiomanialLandingS({ item }: TestimonialCardProps) {
  return (
    <div className="w-86.75 h-87.25 border border-border-ui p-12 flex flex-col justify-between bg-bg-card-2 text-center">
      <img 
        src={item.companyLogo} 
        alt={item.companyName}
        className="h-8 mx-auto object-contain"
      />

      <span className="border border-border-ui px-3 py-1 text-sm mx-auto">
        {item.companyName}
      </span>

      <div>
        <h3 className="text-xl font-light">
          {item.name}
        </h3>
        <p className="text-text-body text-sm">
          {item.role}
        </p>
      </div>

      <p className="text-sm leading-relaxed">
        "{item.text}"
      </p>

    </div>
  )
}