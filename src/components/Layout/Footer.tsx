import React from 'react';
import { TranslationData } from '../../translations';
import { LogoIcon } from '../UI/Icons';
import { TrustBadges } from '../Conversion/TrustBadges';

interface FooterProps {
  t: TranslationData;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, target: string) => void;
}

export const Footer = ({ t, handleNavClick }: FooterProps) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo-container">
            <LogoIcon />
          </div>
          <div style={{ marginTop: '16px' }}>
            <a href="tel:+31638715895" className="btn btn-primary" style={{ padding: '10px 24px', opacity: 0.9 }}>
              {t.footer.btnBuzz}
            </a>
          </div>
          <div style={{ transform: 'scale(0.85)', transformOrigin: 'left center', marginTop: '-8px' }}>
            <TrustBadges t={t} />
          </div>
        </div>

        <div className="footer-right">
          <a href="#waarden" onClick={(e) => handleNavClick(e, 'waarden')} style={{ fontSize: '0.85rem', fontWeight: '500' }}>{t.footer.nav.proces}</a>
          <a href="#projecten" onClick={(e) => handleNavClick(e, 'projecten')} style={{ fontSize: '0.85rem', fontWeight: '500' }}>{t.footer.nav.werk}</a>
          <a href="#diensten" onClick={(e) => handleNavClick(e, 'diensten')} style={{ fontSize: '0.85rem', fontWeight: '500' }}>{t.footer.nav.diensten}</a>
          <a href="#over" onClick={(e) => handleNavClick(e, 'over')} style={{ fontSize: '0.85rem', fontWeight: '500' }}>{t.footer.nav.over}</a>
        </div>
      </div>
    </div>
  </footer>
);
