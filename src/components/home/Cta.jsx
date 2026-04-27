// src/components/home/Cta.jsx

export default function Cta() {
  return (
    <section className="relative w-full bg-dark-navy overflow-hidden py-24">
      
      {/* Decorative Overlapping Rings drawn with CSS */}
      <div className="absolute right-[-75px] md:right-[-250px] bottom-[-150px] md:bottom-[-200px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full border-[15px] border-white/10 bg-white/10 z-0"></div>
      <div className="absolute right-[240px] md:right-[200px] bottom-[-150px] md:bottom-[-200px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full border-[15px] border-white/10 z-0"></div>
      <div className="absolute right-[555px] md:right-[650px] bottom-[-150px] md:bottom-[-200px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full border-[15px] border-white/10 z-0"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between z-10 gap-10">
        
        <h2 className="text-white font-mono font-bold text-[32px] md:text-[48px] leading-[32px] md:leading-[48px] tracking-[-1.43px] md:tracking-[-2.14px] text-center lg:text-left w-full lg:max-w-md">
          Sign up and Scoot off today
        </h2>
        
        {/* App Store Buttons */}
        <div className="flex flex-row gap-4">
          <a href="#" className="transition-transform hover:scale-105">
            <img src="/assets/icons/AppStore.svg" alt="Available on the App Store" className="h-14" />
          </a>
          <a href="#" className="transition-transform hover:scale-105">
            <img src="/assets/icons/GooglePlay.svg" alt="Get it on Google Play" className="h-14" />
          </a>
        </div>
        
      </div>
    </section>
  );
}