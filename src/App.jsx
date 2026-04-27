import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Locations from './pages/Locations';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
