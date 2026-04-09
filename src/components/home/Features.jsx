// src/components/home/Features.jsx
import FeatureRow from '../shared/FeatureRow';

const featuresData = [
  {
    id: 1,
    title: "Easy to use riding telemetry",
    description: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
    image: "/assets/images/telemetry.png", 
    pattern: "/assets/patterns/left-downward-arrow.svg",
    // Fix: Using absolute pixel widths instead of 50%
    patternPositionClasses: "bottom-[100px] right-[0%] w-[730px] max-w-none",
    isReversed: false,
    useOuterPattern: true, // Outer pattern
  },
  {
    id: 2,
    title: "Coming to a city near you",
    description: "Scoot is constantly expanding our reach. We’re working hard to get more scooters on the street, into more cities, to help move you where you need to go. Use the app to find your nearest scooter.",
    image: "/assets/images/city.png",
    pattern: "/assets/patterns/right-arrow.svg",
    // Fix: Pinned relative to the inner image wrapper
    patternPositionClasses: "top-[20px] left-[-150px] w-[350px] max-w-none",
    isReversed: true, 
    useOuterPattern: false, // Make this an INNER pattern so it stays glued to the image
  },
  {
    id: 3,
    title: "Zero hassle payments",
    description: "Our payment is as easy as one two three. We accept most major credit cards and debit cards. You can also link your PayPal account inside the app. It's safe, secure, and convenient.",
    image: "/assets/images/wallet.png",
    pattern: "/assets/patterns/left-downward-arrow.svg",
    // Fix: Using absolute pixel widths
    patternPositionClasses: "top-[150px] right-[-17%] w-[600px] max-w-none",
    isReversed: false,
    useOuterPattern: true, // Outer pattern
  }
];

export default function Features() {
  return (
    <section className="py-24 space-y-24">
      {featuresData.map((feature) => (
        <FeatureRow key={feature.id} {...feature} />
      ))}
    </section>
  );
}