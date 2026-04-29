import { useState } from 'react';

const CITIES = [
  { name: 'New York', top: '26.94%', left: '24.02%' },
  { name: 'London', top: '19.40%', left: '44.77%' },
  { name: 'Jakarta', top: '62.46%', left: '78.60%' },
  { name: 'Yokohama', top: '31.90%', left: '85.72%' },
];

export default function LocationsMap() {
  const [activeCity, setActiveCity] = useState(null);

  return (
    <div className="mb-20 lg:mb-32 cursor-default" onClick={() => setActiveCity(null)}>
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="relative w-full max-w-[311px] mx-auto mb-10">
          <img 
            src="/assets/images/mobile-map.png" 
            alt="World map" 
            className="w-full h-auto object-contain"
          />
          {CITIES.map((city) => (
            <div
              key={city.name}
              className={`absolute w-8 h-8 rounded-full bg-scoot-yellow transform -translate-x-1/2 -translate-y-1/2 transition-all duration-[600ms] ${
                activeCity === city.name ? 'opacity-100 shadow-[0_0_15px_8px_rgba(252,183,43,0.5)]' : 'opacity-0'
              }`}
              style={{ top: city.top, left: city.left }}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {CITIES.map((city) => (
            <button
              key={city.name}
              onClick={(e) => {
                e.stopPropagation();
                setActiveCity(activeCity === city.name ? null : city.name);
              }}
              className={`py-5 text-center font-mono text-[24px] tracking-[-1.07px] leading-[28px] transition-colors duration-300 ${
                activeCity === city.name 
                  ? 'bg-scoot-yellow text-white' 
                  : 'bg-light-yellow text-dark-navy hover:bg-scoot-yellow hover:text-white'
              }`}
            >
              {city.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tablet/Desktop Layout */}
      <div className="hidden md:block relative w-full">
        <img 
          src="/assets/images/map.png" 
          alt="World map" 
          className="w-full h-auto"
        />
        {/* We can also map the cities here if needed, but for now just the map */}
      </div>
    </div>
  );
}
