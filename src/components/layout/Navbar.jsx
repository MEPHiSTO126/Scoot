import { useState } from 'react';
import { NAV_LINKS } from '../../constants/navigation';
import Button from '../shared/Buttons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <button
          type="button"
          className="sm:hidden"
          aria-label="Open Menu"
          onClick={() => setIsOpen(true)}
        >
          <img
            src="/assets/icons/hamburger.svg"
            alt="Open Menu"
            className="w-5 h-4 cursor-pointer"
          />
        </button>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:static sm:translate-x-0 sm:translate-y-0">
          <a href="/" className="block">
            <img
              src="/assets/logo/logo.svg"
              alt="Scoot Logo"
              className="h-7 w-auto"
            />
          </a>
        </div>

        <div className="hidden sm:flex items-center gap-14">
          <ul className="flex gap-8">
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
          <Button>Get Scootin</Button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative z-10 h-full w-[80vw] max-w-xs bg-[#29313f] text-white px-6 py-6">
            <div className="flex items-center justify-between mb-12">
              <button
                type="button"
                aria-label="Close Menu"
                className="transition-transform hover:scale-110"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src="/assets/icons/ham-close.svg"
                  alt="Close menu"
                  className="w-6 h-6"
                />
              </button>
              <a href="/" className="block">
                <img
                  src="/assets/logo/logo.svg"
                  alt="Scoot Logo"
                  className="h-7 w-auto"
                />
              </a>
              <div className="w-6" />
            </div>

            <nav className="space-y-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block font-mono text-xl font-bold text-white hover:text-scoot-yellow transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-12">
              <Button className="w-full">Get Scootin</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
