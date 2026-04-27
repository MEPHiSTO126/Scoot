// src/components/shared/PageHero.jsx
export default function PageHero({ title, bgImage }) {
  return (
    <section className="relative w-full h-[200px] md:h-[250px] overflow-hidden bg-dark-navy flex items-center">
      
      {/* Background Image */}
      <img 
        src={bgImage} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 w-full flex items-center justify-between">
        <h1 className="text-white text-4xl md:text-5xl tracking-tight">
          {title}
        </h1>
        
        {/* The overlapping circles decoration (Hidden on mobile, visible on tablet/desktop) */}
        <div className="hidden md:flex gap-6 relative right-[-50px]">
          <div className="w-16 h-16 rounded-full border-[3px] border-white opacity-20"></div>
          <div className="w-16 h-16 rounded-full border-[3px] border-white opacity-20"></div>
          <div className="w-16 h-16 rounded-full bg-white opacity-20"></div>
        </div>
      </div>
      
    </section>
  );
}