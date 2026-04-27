// src/pages/About.jsx
import PageHero from '../components/shared/PageHero';
import FeatureRow from '../components/shared/FeatureRow';
import Values from '../components/about/Values';
import Faqs from '../components/about/Faqs';
import Cta from '../components/home/Cta';

// Define the data for the two Feature Rows on the About page
const aboutFeaturesData = [
  {
    id: 1,
    title: "Mobility for the digital era",
    description: "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
    image: "/assets/images/about-digital-era.png", 
    pattern: "/assets/patterns/left-upward-arrow.svg",
    patternPositionClasses: "w-[90.6vw] top-[33.6vh] left-[-9.8vw] md:w-[280px] md:top-[-12px] md:left-[0px] lg:w-[50vw] lg:top-[33.6vh] lg:left-[-10.4vw] max-w-none",
    isReversed: false,
    useOuterPattern: false,
    patternVisibleOnMobile: true,
  },
  {
    id: 2,
    title: "Better urban living",
    description: "We're helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
    image: "/assets/images/about-urban-living.png",
    pattern: "/assets/patterns/right-arrow.svg",
    patternPositionClasses: "top-[20px] left-[-150px] w-[350px] max-w-none",
    isReversed: true,
    useOuterPattern: false,
  }
];

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans text-dim-grey">
      {/* Reusable Page Hero */}
      <PageHero 
        title="About" 
        bgImage="/assets/images/about-hero-desktop.png" 
      />

      {/* Reusable Feature Rows */}
      <section className="py-24 space-y-16">
        {aboutFeaturesData.map((feature) => (
          <FeatureRow
            key={feature.id}
            {...feature}
            hideButton
            textAlignment="text-left"
            paragraphAlignment="text-left"
          />
        ))}
      </section>

      {/* Our Values Component */}
      <Values />

      {/* FAQs component */}
      <Faqs />

      <Cta />
    </div>
  );
}