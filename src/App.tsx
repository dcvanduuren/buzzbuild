import React, { useState } from 'react';
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

function App() {
  const [lang, setLang] = useState<SupportedLang>('nl');
  const t = translations[lang];

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
        <SchemaManager />
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
    </div>
  );
}

export default App;
