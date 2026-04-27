// src/pages/Locations.jsx
import PageHero from '../components/shared/PageHero';
import Button from '../components/shared/Buttons';
import Cta from '../components/home/Cta';

export default function Locations() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans text-dim-grey">
      {/* Page Hero */}
      <PageHero 
        title="Locations" 
        bgImage="/assets/images/about-hero-desktop.png" 
      />

      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-8 mb-16 lg:mb-24">
        {/* Map Image */}
        <img 
          src="/assets/images/map.png" 
          alt="Map showing Scoot locations in New York, London, Yokohama, and Jakarta" 
          className="w-full h-auto mb-20 lg:mb-32"
        />

        {/* Your City Not Listed Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8 lg:gap-12">
          <h2 className="max-w-[350px] m-0">Your City Not Listed?</h2>
          <p className="max-w-[450px] m-0">
            If you'd like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.
          </p>
          <div className="flex-shrink-0">
            <Button>Message Us</Button>
          </div>
        </div>
      </section>

      {/* Cta Section */}
      <Cta />
    </div>
  );
}