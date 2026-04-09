// src/components/layout/Navbar.jsx
import { NAV_LINKS } from '../../constants/navigation';
import Button from '../shared/Buttons';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      {/* Left Section: Logo + Desktop Links */}
      <div className="flex items-center gap-14">
        {/* Logo as an Image */}
        <a href="/" className="block">
          <img 
            src="/assets/logo/logo.svg" 
            alt="Scoot Logo" 
            className="h-7 w-auto" // Adjust height to match Figma precisely
          />
        </a>
        
        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8">
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

      {/* Right Section: CTA Button (Desktop Only) */}
      <div className="hidden md:block">
        <Button>Get Scootin</Button>
      </div>

      {/* Mobile Hamburger Menu (Icon only for now) */}
      <div className="md:hidden">
        <img 
          src="/assets/icons/hamburger.svg" 
          alt="Open Menu" 
          className="w-5 h-4 cursor-pointer"
        />
      </div>
    </nav>
  );
}