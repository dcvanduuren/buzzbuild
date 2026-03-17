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
      <header className="header">
        {/* Left: Logo */}
        <div className="logo-container" onClick={(e) => onNavClick(e, 'hero')}>
          <LogoIcon />
        </div>

        {/* Center: Desktop Nav */}
        <nav className={`main-nav ${menuOpen ? 'mobile-open' : ''}`}>
          <a href="#projecten" onClick={(e) => onNavClick(e, 'projecten')}>{t.nav.projecten}</a>
          <a href="#waarden" onClick={(e) => onNavClick(e, 'waarden')}>{t.nav.waarden}</a>
          <a href="#resultaten" onClick={(e) => onNavClick(e, 'resultaten')}>{t.nav.resultaten}</a>
          <a href="#diensten" onClick={(e) => onNavClick(e, 'diensten')}>{t.nav.diensten}</a>
          <a href="#over" onClick={(e) => onNavClick(e, 'over')}>{t.nav.over}</a>
        </nav>

        {/* Right: Actions */}
        <div className="header-actions">
          {/* Hamburger (Mobile Only) */}
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <button
            className="lang-toggle"
            style={{ color: 'var(--text-main)', fontSize: '0.85rem' }}
            onClick={() => setLang(lang === 'nl' ? 'en' : 'nl')}
          >
            {lang.toUpperCase()}
          </button>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm wa-btn" style={{ padding: '8px 16px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="wa-icon-wrapper"><WhatsAppIcon /></span>
            <span className="wa-text">{t.nav.whatsapp}</span>
          </a>
        </div>
      </header>
    </div>
  );
};
