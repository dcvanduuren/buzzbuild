import React from 'react';
import { TranslationData } from '../../translations';
import { TrustBadges } from '../Conversion/TrustBadges';
import { DownArrow } from '../UI/Icons';

interface HeroProps {
  t: TranslationData;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, target: string) => void;
}

export const Hero = ({ t, handleNavClick }: HeroProps) => (
  <section id="hero" className="hero-padding" style={{ height: '100vh', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', paddingBottom: '4vh', overflow: 'hidden' }}>
    <div className="container hero-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* Stylized Logo Title */}
      <div className="hero-title-wrapper" style={{ marginBottom: '24px' }}>
        <div className="title-font hero-title" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <span style={{ color: 'var(--accent-primary)' }}>Buzz</span>
          <span style={{ color: 'var(--text-main)' }}>build</span>
        </div>
      </div>

      <h1 className="hero-h1" style={{ color: 'var(--text-main)', fontWeight: '600', maxWidth: '800px', margin: '0 0 16px 0', lineHeight: '1.5' }}>
        {t.hero.title}
      </h1>

      <p className="hero-subtitle" style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 0 40px 0', lineHeight: '1.6', opacity: 0.8 }}>
        {t.hero.subtitle}
      </p>

      <div className="hero-buttons">
        <a href="#diensten" onClick={(e) => handleNavClick(e, 'diensten')} className="btn btn-primary">
          {t.hero.btnServices}
        </a>
        <a href="#projecten" onClick={(e) => handleNavClick(e, 'projecten')} className="btn btn-outline">
          {t.hero.btnWork}
        </a>
      </div>

      <TrustBadges t={t} />

    </div>

    <div style={{ 
      position: 'absolute', 
      bottom: '40px', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      display: 'flex', 
      justifyContent: 'center' 
    }}>
      <a href="#missie" onClick={(e) => handleNavClick(e, 'missie')} className="animate-bounce">
        <DownArrow />
      </a>
    </div>
  </section>
);
