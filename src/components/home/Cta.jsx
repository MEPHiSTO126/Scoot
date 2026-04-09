// src/components/home/Cta.jsx

export default function Cta() {
  return (
    <section className="relative w-full bg-dark-navy overflow-hidden py-24">
      
      {/* Decorative Overlapping Rings drawn with CSS */}
      <div className="absolute right-[-13vw] bottom-[-33vh] w-[26vw] h-[26vw] rounded-full border-[15px] border-white/10 bg-white/10 z-0"></div>
      <div className="absolute right-[16vw] bottom-[-33vh] w-[26vw] h-[26vw] rounded-full border-[15px] border-white/10 z-0"></div>
      <div className="absolute right-[45vw] bottom-[-33vh] w-[26vw] h-[26vw] rounded-full border-[15px] border-white/10 z-0"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between z-10 gap-10">
        
        <h2 className="text-white text-center lg:text-left max-w-md tracking-tight">
          Sign up and Scoot off today
        </h2>
        
        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
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