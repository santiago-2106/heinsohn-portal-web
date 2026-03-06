import { IconsTimeLineProps } from "@/src/types/typeStaffAugmentation";
import React from "react";

export default function TimeLineLandingHgs({ informationLandingSoftware }: IconsTimeLineProps) {
  return (
    <section className="w-full py-12 bg-bg-main">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col">
          {informationLandingSoftware.map((info, index) => {
            const isLast = index === informationLandingSoftware.length - 1;

            return (
              <div key={index} className="flex gap-8">
                <div className="flex flex-col items-center shrink-0">
                 <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full border border-border-ui bg-bg-card-2 text-text-title">
                    <div className="flex items-center justify-center text-[24px]">
                        {info.icon}
                    </div>
                </div>
                  
                  {!isLast && (
                    <div className="w-px h-full bg-border-ui my-2" />
                  )}
                </div>

                <div className={`${!isLast ? 'pb-16' : 'pb-4'}`}>
                  <h3 className="text-2xl md:text-3xl lg:text-5xl font-medium text-text-title mb-3 leading-tight">
                    {info.title}
                  </h3>
                  <p className="text-text-body leading-relaxed text-sm md:text-base lg:text-[20px] font-light">
                    {info.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}