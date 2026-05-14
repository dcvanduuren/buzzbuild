import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { translations, SupportedLang } from './translations';
import { SchemaManager } from './components/SEO/SchemaManager';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Sections/Hero';
import { Mission } from './components/Sections/Mission';
import { Projects } from './components/Sections/Projects';
import { Values } from './components/Sections/Values';
import { Testimonials } from './components/Sections/Testimonials';
import { Services } from './components/Sections/Services';
import { FAQ } from './components/UI/FAQ';
import { Team } from './components/Sections/Team';
import { Footer } from './components/Layout/Footer';
import { BackgroundGlows } from './components/Layout/BackgroundGlows';
import './index.css';
import { WhatsAppButton } from './components/UI/WhatsAppButton';

function App() {
  const [lang, setLang] = useState<SupportedLang>(() => {
    return window.location.pathname.startsWith('/en') ? 'en' : 'nl';
  });
  const t = translations[lang];

  React.useEffect(() => {
    // Sync language state with URL
    const currentPath = window.location.pathname;
    if (lang === 'en' && !currentPath.startsWith('/en')) {
      window.history.replaceState(null, '', '/en' + window.location.hash);
    } else if (lang === 'nl' && currentPath.startsWith('/en')) {
      window.history.replaceState(null, '', '/' + window.location.hash);
    }
  }, [lang]);

  React.useEffect(() => {
    // Handle initial hash in URL
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Small delay to ensure all components are rendered
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappLink = "https://wa.link/qzldsg";
  const mailtoLink = "mailto:info@buzzbuild.nl?subject=Aanvraag%20Diensten%20-%20Website&body=Hallo,%20ik%20wil%20graag%20meer%20informatie%20over...";

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      <BackgroundGlows />
      <Header 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        whatsappLink={whatsappLink} 
        handleNavClick={handleNavClick} 
      />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <SchemaManager lang={lang} />
      <main>
        <Hero t={t} handleNavClick={handleNavClick} />
        <Mission t={t} />
        <Projects t={t} />
        <Values t={t} />
        <Testimonials t={t} />
        <Services t={t} mailtoLink={mailtoLink} />
        <FAQ t={t} />
        <Team t={t} />
      </main>
      <Footer t={t} handleNavClick={handleNavClick} />
      </div>
      <Analytics />
      <SpeedInsights />
      <WhatsAppButton />
    </div>
  );
}

export default App;
