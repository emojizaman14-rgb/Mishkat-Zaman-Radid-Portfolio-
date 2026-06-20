import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Loader from './components/Loader';
import CyberBackground from './components/CyberBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLightMode, setIsLightMode] = useState(false);
  
  // Prefill content management
  const [prefillSubject, setPrefillSubject] = useState('');
  const [prefillMessage, setPrefillMessage] = useState('');

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  const handleHireMeClick = () => {
    setPrefillSubject('Hiring Proposal - UI/UX Collaboration');
    setPrefillMessage(
      "Hey Mishkat,\n\nI visited your premium portfolio and would love to hire you for an upcoming web design or interface proposal!"
    );
    
    // Smooth scroll down to contact form
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const top = contactEl.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const top = contactEl.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Startup Boot Loader */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Primary Container Shell */}
      <div
        className={`min-h-screen relative overflow-x-hidden selection:bg-brand-cyan/20 select-none ${
          isLightMode
            ? 'bg-[#f8fafc] text-[#0f172a] font-sans'
            : 'bg-[#030712] text-white font-sans'
        }`}
      >
        {/* 2. Custom Background (Cursor Spotlight / Floating Blobs) */}
        {!isLightMode && <CyberBackground />}

        {/* 3. Sticky Glassmorphism Header */}
        <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />

        {/* 4. Active Main Portfolios sections */}
        <main className="relative z-10">
          
          {/* Hero segment */}
          <Hero
            isLightMode={isLightMode}
            onHireClick={handleHireMeClick}
            onContactClick={handleContactClick}
          />

          {/* Stats metrics countdown segment */}
          <Stats isLightMode={isLightMode} />

          {/* Biography and History Milestone segment */}
          <About isLightMode={isLightMode} />

          {/* Interactive Skills Tool Grid segment */}
          <Skills isLightMode={isLightMode} />

          {/* Offerings and Services segment */}
          <Services isLightMode={isLightMode} />

          {/* Sorting portfolio showcase segment */}
          <Portfolio isLightMode={isLightMode} />

          {/* Form verified contact proposal segment */}
          <Contact
            isLightMode={isLightMode}
            prefillSubject={prefillSubject}
            prefillMessage={prefillMessage}
            clearPrefills={() => {
              setPrefillSubject('');
              setPrefillMessage('');
            }}
          />
        </main>

        {/* 5. Minimal footer brand signature */}
        <Footer isLightMode={isLightMode} />
      </div>
    </>
  );
}
