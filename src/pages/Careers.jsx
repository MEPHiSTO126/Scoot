// src/pages/Careers.jsx
import PageHero from '../components/shared/PageHero';
import FeatureRow from '../components/shared/FeatureRow';
import Values from '../components/about/Values';
import JobList from '../components/careers/JobList';
import Cta from '../components/home/Cta';

export default function Careers() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans text-dim-grey">
      {/* Page Hero */}
      <PageHero 
        title="Careers" 
        bgImage="/assets/images/about-hero-desktop.png" 
      />

      {/* Feature Row for "Care to join our mission?" */}
      <section className="py-24">
        <FeatureRow
          title="Care to join our mission?"
          description="We're always looking for ambitious individuals to help us on our journey. If you're passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
          image="/assets/images/mission.png"
          pattern="/assets/patterns/left-downward-arrow.svg"
          patternPositionClasses="w-[90.6vw] top-[33.6vh] left-[-9.8vw] md:w-[280px] md:top-[-12px] md:left-[0px] lg:w-[50vw] lg:top-[33.6vh] lg:left-[-10.4vw] max-w-none"
          isReversed={false}
          useOuterPattern={false}
          patternVisibleOnMobile={true}
          buttonText="Say Hello"
          textAlignment="text-center lg:text-left"
        />
      </section>

      {/* Values section with different title */}
      <Values title="Why join us?" />

      {/* Open Positions List */}
      <JobList />

      {/* Cta section */}
      <Cta />
    </div>
  );
}