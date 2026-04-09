// src/components/home/Hero.jsx
import Button from '../shared/Buttons';

export default function Hero() {
  return (
    <section className="relative w-full h-[650px] bg-dark-navy overflow-hidden">
      {/* Background Image */}
      <img 
        src="/assets/images/home-hero-desktop.png" 
        alt="Person riding scoot" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* FIX: Left Line (Path 2) */}
      {/* Pinned left, locked to 15px height so it doesn't get thick */}
      <img 
        src="/assets/patterns/path-2.svg" 
        alt="" 
        className="hidden xl:block absolute left-[-5vw] top-[54%] h-[15px] w-auto z-10" 
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex flex-col justify-center">
        
        <h1 className="text-white mb-10 max-w-lg relative z-20">
          Scooter sharing made simple
        </h1>
        
        {/* We use relative here so the right arrow can attach to it */}
        <div className="relative ml-0 md:ml-24 max-w-md z-20">
          <p className="text-white mb-10">
            Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient 
            locations in each of our cities. Use our app to untether the ride and off you go!
          </p>
          <Button>Get Scootin</Button>

          {/* FIX: Right Arrow Container (Path 4 + Path 3) */}
          {/* left-[100%] pushes it exactly to the right edge of the text above */}
          <div className="hidden lg:flex absolute top-4 left-[100%] ml-8 items-end w-[400px]">
            <img src="/assets/patterns/path-4.svg" alt="" className="h-[140px] w-auto" />
            <img src="/assets/patterns/path-3.svg" alt="" className="mb-[-16px] ml-[-33px]" />
          </div>
        </div>
      </div>

      {/* FIX: The Three Little Circles (Pushed closer to the right edge) */}
      <div className="hidden md:flex absolute bottom-8 right-[-20px] lg:right-[8%] gap-6 z-10 overflow-visible">
        <div className="w-16 h-16 rounded-full border-[3px] border-white"></div>
        <div className="w-16 h-16 rounded-full border-[3px] border-white"></div>
        <div className="w-16 h-16 rounded-full bg-white"></div>
      </div>
    </section>
  );
}