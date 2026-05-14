import React, { useState } from 'react';
import { TranslationData, SupportedLang } from '../../translations';
import { LogoIcon, WhatsAppIcon } from '../UI/Icons';

interface HeaderProps {
  lang: SupportedLang;
  setLang: React.Dispatch<React.SetStateAction<SupportedLang>>;
  t: TranslationData;
  whatsappLink: string;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, target: string) => void;
}

export const Header = ({ lang, setLang, t, whatsappLink, handleNavClick }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, target: string) => {
    setMenuOpen(false); // Close dropdown on click
    handleNavClick(e, target);
  };

  return (
    <div className="header-wrapper">
      <header className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Left: Logo container (Equal width) */}
        <div className="logo-container" onClick={(e) => onNavClick(e, 'hero')} style={{ flex: '1 1 0', display: 'flex', justifyContent: 'flex-start', minWidth: 0 }}>
          <LogoIcon />
        </div>

        {/* Center: Hamburger (Centered) */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            <svg width="36" height="20" viewBox="0 0 36 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="2" y1="10" x2="34" y2="10"></line>
              <line x1="2" y1="3" x2="34" y2="3"></line>
              <line x1="2" y1="17" x2="34" y2="17"></line>
            </svg>
          </button>
        </div>

        {/* Center: Desktop Nav (Hidden on mobile) */}
        <nav className={`main-nav ${menuOpen ? 'mobile-open' : ''}`}>
          <a href="#projecten" onClick={(e) => onNavClick(e, 'projecten')}>{t.nav.projecten}</a>
          <a href="#waarden" onClick={(e) => onNavClick(e, 'waarden')}>{t.nav.waarden}</a>
          <a href="#resultaten" onClick={(e) => onNavClick(e, 'resultaten')}>{t.nav.resultaten}</a>
          <a href="#diensten" onClick={(e) => onNavClick(e, 'diensten')}>{t.nav.diensten}</a>
          <a href="#over" onClick={(e) => onNavClick(e, 'over')}>{t.nav.over}</a>
        </nav>

        {/* Right: Actions (Equal width) */}
        <div className="header-actions" style={{ flex: '1 1 0', display: 'flex', justifyContent: 'flex-end', minWidth: 0 }}>
          <button
            className="lang-toggle"
            style={{ color: 'var(--text-main)', fontSize: '0.85rem' }}
            onClick={() => setLang(lang === 'nl' ? 'en' : 'nl')}
          >
            {lang.toUpperCase()}
          </button>
        </div>
      </header>
    </div>
  );
};
