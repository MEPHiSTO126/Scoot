// src/components/home/HowItWorks.jsx
import { STEPS_DATA } from '../../constants/stepsData';

export default function HowItWorks() {
  return (
    // We added relative here to trap the absolute grey line to this section
    <section className="relative py-24 w-full overflow-hidden">
      
      {/* FIX: The Grey Path Line */}
      {/* left-0 makes it touch the monitor edge. w-[75vw] spans it to the 3rd column */}
      {/* Horizontal Line for Desktop */}
      <div 
        className="hidden lg:block absolute top-[144px] left-0 w-[80vw] lg:w-[75vw] xl:w-[70vw] h-[15px] bg-light-grey z-0"
        style={{ 
          WebkitMaskImage: "url('/assets/patterns/path-2.svg')",
          maskImage: "url('/assets/patterns/path-2.svg')",
          WebkitMaskRepeat: "repeat-x",
          maskRepeat: "repeat-x",
        }}
      />

      {/* Vertical Line for Tablet */}
      <div 
        className="hidden md:block lg:hidden absolute top-0 bottom-[150px] left-[73px] w-[15px] bg-light-grey z-0"
      />

      {/* Grid Container (z-10 keeps it above the line) */}
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 lg:gap-10">
          {STEPS_DATA.map((step) => (
            <div key={step.id} className="flex flex-col md:flex-row lg:flex-col items-center md:items-start text-center md:text-left gap-8 md:gap-12 lg:gap-8">
              
              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full flex-shrink-0 bg-scoot-yellow flex items-center justify-center mb-8 md:mb-0 lg:mb-8 relative z-20">
                <img src={step.icon} alt={step.title} className="w-18 h-18" />
              </div>
              
              <div className="md:pt-4 lg:pt-0">
                <h4 className="text-dark-navy mb-4">
                  {step.title}
                </h4>
                <p className="text-dim-grey font-sans font-normal text-[15px] leading-[25px] text-center md:text-left md:pr-4">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}