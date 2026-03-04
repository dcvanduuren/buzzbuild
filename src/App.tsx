import React, { useState } from 'react';
import { translations, TranslationData, SupportedLang } from './translations';
import './index.css';

interface BasicProps {
  t: TranslationData;
}

interface NavProps {
  t: TranslationData;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, target: string) => void;
}

// --- SVGs & Icons ---
const LogoIcon = () => (
  <img src="/assets/images/Logo.png" alt="Buzzbuild Logo" className="header-logo-icon" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
);

const DownArrow = ({ onClick }: { onClick?: React.MouseEventHandler<SVGSVGElement> }) => (
  <svg onClick={onClick} className="animate-bounce" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5, cursor: 'pointer' }}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="8 12 12 16 16 12"></polyline>
    <line x1="12" y1="8" x2="12" y2="16"></line>
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent-primary)" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// --- Component Fragments ---

interface HeaderProps extends NavProps {
  lang: SupportedLang;
  setLang: React.Dispatch<React.SetStateAction<SupportedLang>>;
  whatsappLink: string;
}

const Header = ({ lang, setLang, t, whatsappLink, handleNavClick }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, target: string) => {
    setMenuOpen(false); // Close dropdown on click
    handleNavClick(e, target);
  };

  return (
    <header className="header">
      <div className="container header-content">
        {/* Left: Logo */}
        <div className="logo-container" onClick={(e) => onNavClick(e, 'hero')}>
          <LogoIcon />
        </div>

        {/* Center: Desktop Nav */}
        <nav className={`main-nav ${menuOpen ? 'mobile-open' : ''}`}>
          <a href="#waarden" onClick={(e) => onNavClick(e, 'waarden')}>{t.nav.waarden}</a>
          <a href="#projecten" onClick={(e) => onNavClick(e, 'projecten')}>{t.nav.projecten}</a>
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

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm wa-btn" style={{ borderRadius: '8px', padding: '8px 16px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="wa-icon-wrapper"><WhatsAppIcon /></span>
            <span className="wa-text">{t.nav.whatsapp}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

const Hero = ({ t, handleNavClick }: NavProps) => (
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

      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', width: '100%' }}>
        <a href="#missie" onClick={(e) => handleNavClick(e, 'missie')}>
          <DownArrow />
        </a>
      </div>
    </div>
  </section>
);

const Mission = ({ t }: BasicProps) => (
  <section id="missie" className="mission-padding">
    <div className="container" style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>

      {/* Left side: Text */}
      <div style={{ flex: '1 1 500px' }}>
        <h2 className="title-font mission-title">
          {t.mission.title}
        </h2>
        <h3 className="text-accent mission-subtitle">
          {t.mission.subtitle}
        </h3>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', opacity: 0.9, lineHeight: '1.7', margin: 0 }}>
          {t.mission.body}
        </p>
      </div>

      {/* Right side: Handshake Photo */}
      <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '500px',
          aspectRatio: '1/1',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <img
            src="/assets/images/handshake.JPG"
            alt="Persoonlijke aanpak: Handdruk Buzzbuild"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

    </div>
  </section>
);

const Values = ({ t }: BasicProps) => {
  // Parsing the translation strings into bullets for the cards based on new design
  const cardData = [
    {
      title: 'Vakmanschap & Kwaliteit',
      bullets: [
        'Zichtbaar beter resultaat door precisie.',
        'Duurzame materialen voor een lange levensduur.'
      ]
    },
    {
      title: 'Helder & Transparant',
      bullets: [
        'Eerlijke afspraken en een strakke planning.',
        'Geen onverwachte kosten en altijd duidelijkheid.'
      ]
    },
    {
      title: 'Persoonlijke Aanpak',
      bullets: [
        'Oplossingen volledig op jouw wensen afgestemd.',
        'Betrokken van het eerste advies tot de oplevering.'
      ]
    }
  ];

  return (
    <section id="waarden" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2>{t.values.title}</h2>
          <p className="subtext">{t.values.subtitle}</p>
        </div>

        <div className="responsive-grid grid-3" style={{ gap: '20px' }}>
          {cardData.map((card, index) => (
            <div key={index} className="glass-card" style={{
              borderRadius: 'var(--radius-md)',
            }}>
              <h3 className="text-accent" style={{ fontSize: '1.1rem', marginBottom: '24px', fontWeight: '600' }}>
                {card.title}
              </h3>
              <ul className="bullet-list">
                {card.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const projectData = [
  {
    id: 1,
    title: 'Badkamer 1',
    folder: 'badkamer 1',
    images: ["1.png", "FullSizeRender (1).png", "FullSizeRender (2).png", "FullSizeRender.png", "IMG_2284.png", "IMG_2327 (1).png", "IMG_2332.png", "IMG_2338.png"]
  },
  {
    id: 2,
    title: 'Badkamer 2',
    folder: 'badkamer 2',
    images: ["1.png", "2.png", "IMG_5633.png", "IMG_5640.png", "IMG_5649.png"]
  },
  {
    id: 3,
    title: 'Badkamer 3',
    folder: 'badkamer 3',
    images: ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "R0001041.JPG", "R0001052.JPG", "R0001056.JPG", "R0001059.JPG"]
  },
  {
    id: 4,
    title: 'Badkamer 4',
    folder: 'badkamer 4',
    images: ["1.png", "IMG_1640.png"]
  }
];

interface ProjectItem {
  id: number;
  title: string;
  folder: string;
  images: string[];
}

const Projects = ({ t }: BasicProps) => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project: ProjectItem) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  };

  const closeProject = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto'; // re-enable scrolling
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeProject) {
      setCurrentImageIndex((prev) => (prev + 1) % activeProject.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? activeProject.images.length - 1 : prev - 1));
    }
  };

  return (
    <section id="projecten" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2>{t.projects.title}</h2>
          <p className="subtext" style={{ color: 'var(--text-muted)' }}>{t.projects.subtitle}</p>
        </div>

        <div className="responsive-grid grid-2" style={{ gap: '24px' }}>
          {projectData.map((project) => (
            <div key={project.id} className="project-card" onClick={() => openProject(project)}>
              <img
                src={`/assets/images/${project.folder}/${project.images[0]}`}
                alt={project.title}
                className="project-card-img"
              />
              <div className="project-card-overlay">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <div className="project-card-overlay-text">Bekijk {project.images.length} foto's</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="modal-overlay" onClick={closeProject}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProject}>&times;</button>

            {activeProject.images.length > 1 && (
              <button className="modal-btn modal-prev" onClick={prevImage}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
            )}

            <img
              src={`/assets/images/${activeProject.folder}/${activeProject.images[currentImageIndex]}`}
              alt={`${activeProject.title} foto`}
              className="modal-img"
            />

            {activeProject.images.length > 1 && (
              <button className="modal-btn modal-next" onClick={nextImage}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            )}

            <div style={{ position: 'absolute', bottom: '-40px', color: 'white', opacity: 0.7 }}>
              {currentImageIndex + 1} / {activeProject.images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Testimonials = ({ t }: BasicProps) => {
  const reviews = [1, 2, 3, 4, 5];
  // We duplicate the array to allow for a seamless infinite scroll loop
  const seamlessReviews = [...reviews, ...reviews];

  return (
    <section className="section-padding" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header text-center">
          <h2>{t.testimonials.title}</h2>
          <p className="subtext" style={{ color: 'var(--text-muted)' }}>{t.testimonials.subtitle}</p>
        </div>

        <div className="carousel-container">
          <div className="carousel-track">
            {seamlessReviews.map((item, index) => (
              <div key={`${item}-${index}`} className="glass-card carousel-card-width" style={{
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                flexShrink: 0
              }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: '600', margin: 0, lineHeight: '1.5' }}>
                  "{t.testimonials.emptyText}"
                </p>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0a0d14', marginTop: 'auto', border: '1px solid rgba(255,255,255,0.1)' }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = ({ t, mailtoLink }: BasicProps & { mailtoLink: string }) => (
  <section id="diensten" className="section-padding">
    <div className="container">
      <div className="section-header text-center">
        <h2 style={{ fontSize: '2.5rem' }}>{t.services.title}</h2>
        <p className="subtext" style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{t.services.subtitle}</p>
      </div>

      <div className="responsive-grid grid-2" style={{ gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
        {/* Hourly Card */}
        <div className="glass-card" style={{
          borderRadius: 'var(--radius-md)',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 className="text-accent" style={{ fontSize: '1rem', marginBottom: '24px' }}>{t.services.card1.title}</h3>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '8px' }}>Vanaf:</div>
          <div className="text-accent" style={{ fontSize: '3.5rem', fontWeight: '500', lineHeight: 1, marginBottom: '24px' }}>
            €50<span style={{ fontSize: '2rem' }}>/uur</span>
          </div>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '24px' }}>
            Voor kleinere projecten of urgente taken bieden wij een uurtarief aan. Hierdoor kunnen we snel aan de slag zonder ingewikkelde offertes of lange planningsfases.
          </p>

          <p style={{ fontSize: '0.75rem', color: 'var(--text-main)', fontWeight: '600', marginBottom: '16px' }}>
            Hoe het werkt: Je betaalt een vast uurtarief per vakman, exclusief materiaalkosten.
          </p>

          <ul className="bullet-list" style={{ color: 'var(--accent-primary)', marginBottom: '40px', flexGrow: 1 }}>
            <li><span style={{ color: 'var(--text-muted)' }}>Snel en flexibel</span></li>
            <li><span style={{ color: 'var(--text-muted)' }}>Geen grote kosten vooraf</span></li>
            <li><span style={{ color: 'var(--text-muted)' }}>Ideaal voor kortlopende of veranderende projecten</span></li>
          </ul>

          <a href={mailtoLink} className="btn" style={{ width: '100%', background: 'var(--accent-primary)', color: '#fff', opacity: 0.9 }}>
            Email ons
          </a>
        </div>

        {/* Project Card */}
        <div className="glass-card" style={{
          borderRadius: 'var(--radius-md)',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 className="text-accent" style={{ fontSize: '1rem', marginBottom: '24px' }}>{t.services.card2.title}</h3>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '8px' }}>Vanaf:</div>
          <div className="text-accent" style={{ fontSize: '3rem', fontWeight: '500', lineHeight: 1.1, marginBottom: '24px' }}>
            Op aanvraag
          </div>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '24px' }}>
            Voor grotere projecten bieden we een gedetailleerde offerte met een vaste prijs. Dit zorgt voor transparantie en een efficiënte planning van begin tot eind.
          </p>

          <p style={{ fontSize: '0.75rem', color: 'var(--text-main)', fontWeight: '600', marginBottom: '16px' }}>
            Hoe het werkt: We berekenen arbeid, materialen en planning in één vaste prijs—geen verrassingen achteraf.
          </p>

          <ul className="bullet-list" style={{ color: 'var(--accent-primary)', marginBottom: '40px', flexGrow: 1 }}>
            <li><span style={{ color: 'var(--text-muted)' }}>Duidelijke prijs vooraf</span></li>
            <li><span style={{ color: 'var(--text-muted)' }}>Efficiënte uitvoering met gestructureerde planning</span></li>
            <li><span style={{ color: 'var(--text-muted)' }}>Ideaal voor langdurige projecten met een omlijnd traject</span></li>
          </ul>

          <a href={mailtoLink} className="btn" style={{ width: '100%', background: 'transparent', color: 'var(--text-main)', border: '1px solid var(--text-muted)' }}>
            Email ons
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Team = ({ t }: BasicProps) => (
  <section id="over" className="section-padding">
    <div className="container">
      <div className="section-header text-center">
        <h2>{t.team.title}</h2>
        <p className="subtext" style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>Ontmoet ons team dat met trots en vakmanschap jouw badkamer en huis transformeert.</p>
      </div>

      <div className="responsive-grid grid-2" style={{ gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
        {/* Profile 1 */}
        <div style={{
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          aspectRatio: '3/4',
          position: 'relative',
          background: 'var(--card-bg)'
        }}>
          <img
            src={`/assets/images/diederik.jpg`}
            alt={`Diederik van Duuren`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 4px', fontSize: '1.2rem' }}>Diederik van Duuren</h3>
            <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.9rem' }}>Oprichter</p>
          </div>
        </div>
        {/* Profile 2 */}
        <div style={{
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          aspectRatio: '3/4',
          position: 'relative',
          background: 'var(--card-bg)'
        }}>
          <img
            src={`/assets/images/lodewijk.jpg`}
            alt={`Lodewijk van Duuren`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 4px', fontSize: '1.2rem' }}>Lodewijk van Duuren</h3>
            <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.9rem' }}>Oprichter</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ t, handleNavClick }: NavProps) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo-container">
            <LogoIcon />
          </div>
          <a href="tel:+31638715895" className="btn btn-primary" style={{ borderRadius: '6px', padding: '10px 24px', opacity: 0.9 }}>
            Buzz ons
          </a>
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


// --- Background Occasional Glows ---
const BackgroundGlows = () => (
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
    <div className="glow-orb glow-orb-1" style={{ top: '12%', right: '-5%', width: '1000px', height: '650px', opacity: 0.9 }}></div>
    <div className="glow-orb glow-orb-4" style={{ top: '35%', left: '-10%', width: '750px', height: '1200px', opacity: 0.85 }}></div>
    <div className="glow-orb glow-orb-3" style={{ top: '55%', right: '5%', width: '1080px', height: '675px', opacity: 1 }}></div>
    <div className="glow-orb glow-orb-5" style={{ top: '75%', left: '-8%', width: '580px', height: '900px', opacity: 0.8 }}></div>
    <div className="glow-orb glow-orb-2" style={{ top: '90%', right: '-12%', width: '990px', height: '760px', opacity: 0.9 }}></div>
  </div>
);

// --- Main App Composer ---

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
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <BackgroundGlows />
      <Header lang={lang} setLang={setLang} t={t} whatsappLink={whatsappLink} handleNavClick={handleNavClick} />
      <main>
        <Hero t={t} handleNavClick={handleNavClick} />
        <Mission t={t} />
        <Projects t={t} />
        <Values t={t} />
        <Testimonials t={t} />
        <Services t={t} mailtoLink={mailtoLink} />
        <Team t={t} />
      </main>
      <Footer t={t} handleNavClick={handleNavClick} />
    </div>
  );
}

export default App;
