// src/App.jsx
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import HowItWorks from './components/home/HowItWorks';
import Features from './components/home/Features';
import Cta from './components/home/Cta';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
