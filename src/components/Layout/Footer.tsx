import React from 'react';
import { TranslationData } from '../../translations';
import { TrustBadges } from '../Conversion/TrustBadges';

interface FooterProps {
  t: TranslationData;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, target: string) => void;
}

export const Footer = ({ t, handleNavClick }: FooterProps) => {
  const handlePhoneClick = () => {
    console.log("Telefoon knop aangeklikt in Footer, gtag checken...");
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
    <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-left">
          <div>
            <a href="tel:+31638715895" onClick={handlePhoneClick} className="btn btn-primary" style={{ padding: '10px 24px', opacity: 0.9 }}>
              {t.footer.btnBuzz}
            </a>
          </div>
          <TrustBadges t={t} />
        </div>

        <div className="footer-right">
          <a href="#projecten" onClick={(e) => handleNavClick(e, 'projecten')}>{t.footer.nav.werk}</a>
          <a href="#waarden" onClick={(e) => handleNavClick(e, 'waarden')}>{t.footer.nav.proces}</a>
          <a href="#resultaten" onClick={(e) => handleNavClick(e, 'resultaten')}>{t.footer.nav.resultaten}</a>
          <a href="#diensten" onClick={(e) => handleNavClick(e, 'diensten')}>{t.footer.nav.diensten}</a>
          <a href="#over" onClick={(e) => handleNavClick(e, 'over')}>{t.footer.nav.over}</a>
        </div>
      </div>
    </div>
  </footer>
  );
};
