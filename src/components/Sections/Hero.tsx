import React from 'react';
import { TranslationData } from '../../translations';
import { TrustBadges } from '../Conversion/TrustBadges';
import { DownArrow, MailIcon, PhoneIcon } from '../UI/Icons';
import { FadeIn } from '../UI/FadeIn';

interface HeroProps {
  t: TranslationData;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, target: string) => void;
}

export const Hero = ({ t, handleNavClick }: HeroProps) => {
  const handleEmailClick = () => {
    console.log("Email link aangeklikt in Hero, gtag checken...");
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18038797105/8-FxCPCk86scELHmyJlD',
        'event_callback': () => {
          console.log("Google heeft de conversie (email) succesvol ontvangen!");
        }
      });
    }
  };

  const handlePhoneClick = () => {
    console.log("Telefoon link aangeklikt in Hero, gtag checken...");
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18038797105/IDGlCNzniqwcELHmyJlD',
        'value': 1.0,
        'currency': 'EUR',
        'event_callback': () => {
          console.log("Google heeft de conversie (telefoon) succesvol ontvangen!");
        }
      });
    }
  };

  return (
    <section id="hero" style={{ position: 'relative' }}>
    {/* Immersive Background Image Wrapper with mask fade */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url('/assets/images/badkamer 3/4.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -2,
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(7, 28, 46, 0.9) 0%, rgba(7, 28, 46, 0.4) 20%, rgba(7, 28, 46, 0.4) 75%, var(--bg-primary) 100%)',
        zIndex: -1
      }} />
    </div>
    
    <div className="container hero-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
      
      {/* Stylized Logo Title */}
        <div className="hero-title-wrapper" style={{ marginBottom: '24px' }}>
          <div className="title-font hero-title">
            <span style={{ color: 'var(--accent-primary)' }}>Buzz</span>build
          </div>
        </div>

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
          <a href="mailto:info@buzzbuild.nl" onClick={handleEmailClick} style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8, transition: 'all 0.2s' }}>
            <MailIcon /> info@buzzbuild.nl
          </a>
          <a href="tel:+31638715895" onClick={handlePhoneClick} style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8, transition: 'all 0.2s' }}>
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
        <a href="#missie" onClick={(e) => handleNavClick(e, 'missie')} className="animate-bounce" aria-label="Scroll naar missie sectie">
          <DownArrow />
        </a>
      </FadeIn>
    </div>
  </section>
  );
};
