// src/components/layout/Footer.jsx
import { NAV_LINKS } from '../../constants/navigation';

export default function Footer() {
  return (
    <footer className="bg-[#333A44] py-8">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        
        {/* Left Section: Logo + Navigation */}
        <div className="flex flex-col md:flex-row items-center gap-14">
          
          <a href="/">
            {/* The CSS filters turn the dark SVG completely white */}
            <img 
              src="/assets/logo/logo.svg" 
              alt="Scoot Logo" 
              className="h-7 brightness-0 invert" 
            />
          </a>
          
          <ul className="flex flex-col md:flex-row gap-8 text-center md:text-left">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-mono font-bold text-dim-grey hover:text-scoot-yellow transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex gap-6 items-center">
          <a href="#" className="transition-all duration-300 hover:brightness-0 hover:invert">
            <img src="/assets/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="transition-all duration-300 hover:brightness-0 hover:invert">
            <img src="/assets/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" className="transition-all duration-300 hover:brightness-0 hover:invert">
            <img src="/assets/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
        
      </div>
    </footer>
  );
}