import React from 'react';
import { TranslationData } from '../../translations';
import { TrustBadges } from '../Conversion/TrustBadges';
import { DownArrow } from '../UI/Icons';

interface HeroProps {
  t: TranslationData;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, target: string) => void;
}

export const Hero = ({ t, handleNavClick }: HeroProps) => (
  <section id="hero" className="hero-padding" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', paddingBottom: '8vh' }}>
    <div className="container hero-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* Stylized Logo Title */}
      <div className="hero-title-wrapper" style={{ marginBottom: '24px' }}>
        <div className="title-font hero-title" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <span style={{ color: 'var(--accent-primary)' }}>Buzz</span>
          <span style={{ color: 'var(--text-main)' }}>build</span>
        </div>
      </div>

      <h1 style={{ fontSize: '1.4rem', color: 'var(--text-main)', fontWeight: '600', maxWidth: '800px', margin: '0 0 16px 0', lineHeight: '1.5' }}>
        {t.hero.title}
      </h1>

      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 0 40px 0', lineHeight: '1.6', opacity: 0.8 }}>
        {t.hero.subtitle}
      </p>

      <div className="hero-buttons">
        <a href="#diensten" onClick={(e) => handleNavClick(e, 'diensten')} className="btn btn-primary" style={{ borderRadius: '8px' }}>
          {t.hero.btnServices}
        </a>
        <a href="#projecten" onClick={(e) => handleNavClick(e, 'projecten')} className="btn btn-outline" style={{ borderRadius: '8px' }}>
          {t.hero.btnWork}
        </a>
      </div>

      <TrustBadges t={t} />

      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', width: '100%', paddingTop: '20px' }}>
        <a href="#missie" onClick={(e) => handleNavClick(e, 'missie')}>
          <DownArrow />
        </a>
      </div>
    </div>
  </section>
);
