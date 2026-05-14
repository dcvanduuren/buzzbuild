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
      <FadeIn delay={0.2}>
        <div className="hero-title-wrapper" style={{ marginBottom: '24px' }}>
          <div className="title-font hero-title">
            <span style={{ color: 'var(--accent-primary)' }}>Buzz</span>build
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
        <div className="google-badge-wrapper" style={{ marginTop: '16px' }}>
          <a href="https://g.page/buzzbuild" target="_blank" rel="noopener noreferrer" className="google-badge" aria-label="Bekijk onze 5-sterren reviews op Google">
            <div style={{ display: 'flex', color: '#FABB05', gap: '2px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
              <span style={{ fontWeight: 600 }}>5.0</span> op Google
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </span>
          </a>
        </div>
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
