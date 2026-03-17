import React from 'react';
import { TranslationData } from '../../translations';
import { TrustBadges } from '../Conversion/TrustBadges';
import { DownArrow, MailIcon, PhoneIcon } from '../UI/Icons';
import { FadeIn } from '../UI/FadeIn';

interface HeroProps {
  t: TranslationData;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, target: string) => void;
}

export const Hero = ({ t, handleNavClick }: HeroProps) => (
  <section id="hero" className="hero-padding" style={{ height: '100vh', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', paddingBottom: '4vh', overflow: 'hidden' }}>
    <div className="container hero-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      
      {/* Stylized Logo Title */}
      <FadeIn delay={0.1}>
        <div className="hero-title-wrapper" style={{ marginBottom: '24px' }}>
          <div className="title-font hero-title" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <span style={{ color: 'var(--accent-primary)' }}>Buzz</span>
            <span style={{ color: 'var(--text-main)' }}>build</span>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h1 className="hero-h1" style={{ color: 'var(--text-main)', fontWeight: '600', maxWidth: '800px', margin: '0 0 16px 0', lineHeight: '1.5' }}>
          {t.hero.title}
        </h1>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="hero-subtitle" style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 0 32px 0', lineHeight: '1.6', opacity: 0.8 }}>
          {t.hero.subtitle}
        </p>
      </FadeIn>

      {/* Quick Contact Info - Now placed before actions */}
      <FadeIn delay={0.4}>
        <div className="hero-contact-info" style={{ display: 'flex', gap: '24px', marginBottom: '32px', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          <a href="mailto:info@buzzbuild.nl" style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8, transition: 'all 0.2s' }}>
            <MailIcon /> info@buzzbuild.nl
          </a>
          <a href="tel:+31638715895" style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8, transition: 'all 0.2s' }}>
            <PhoneIcon /> +31 6 38 71 58 95
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={0.5}>
        <div className="hero-buttons" style={{ marginBottom: '40px' }}>
          <a href="#diensten" onClick={(e) => handleNavClick(e, 'diensten')} className="btn btn-primary">
            {t.hero.btnServices}
          </a>
          <a href="#projecten" onClick={(e) => handleNavClick(e, 'projecten')} className="btn btn-outline">
            {t.hero.btnWork}
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={0.6}>
        <TrustBadges t={t} />
      </FadeIn>

    </div>

    <div style={{ 
      position: 'absolute', 
      bottom: '40px', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      display: 'flex', 
      justifyContent: 'center' 
    }}>
      <FadeIn delay={1} direction="none" duration={1}>
        <a href="#missie" onClick={(e) => handleNavClick(e, 'missie')} className="animate-bounce">
          <DownArrow />
        </a>
      </FadeIn>
    </div>
  </section>
);
