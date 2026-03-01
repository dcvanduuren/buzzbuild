import { useState } from 'react';
import { translations } from './translations';
import './index.css';

// --- SVGs & Icons ---
const LogoIcon = () => (
  <img src="/assets/images/Logo.png" alt="Buzzbuild Logo" className="header-logo-icon" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
);

const DownArrow = ({ onClick }) => (
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

// --- Component Fragments ---

const Header = ({ lang, setLang, t, whatsappLink, handleNavClick }) => (
  <header className="header">
    <div className="container header-content">
      <div className="logo-container" onClick={(e) => handleNavClick(e, 'hero')}>
        <LogoIcon />
      </div>

      <nav className="main-nav">
        <a href="#waarden" onClick={(e) => handleNavClick(e, 'waarden')}>{t.nav.waarden}</a>
        <a href="#projecten" onClick={(e) => handleNavClick(e, 'projecten')}>{t.nav.projecten}</a>
        <a href="#diensten" onClick={(e) => handleNavClick(e, 'diensten')}>{t.nav.diensten}</a>
        <a href="#over" onClick={(e) => handleNavClick(e, 'over')}>{t.nav.over}</a>
      </nav>

      <div className="header-actions">
        <button
          className="lang-toggle"
          style={{ color: 'var(--text-main)', fontSize: '0.85rem' }}
          onClick={() => setLang(lang === 'nl' ? 'en' : 'nl')}
        >
          {lang.toUpperCase()}
        </button>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" style={{ borderRadius: '8px', padding: '8px 20px', fontSize: '0.85rem' }}>
          {t.nav.whatsapp}
        </a>
      </div>
    </div>
  </header>
);

const Hero = ({ t, handleNavClick }) => (
  <section id="hero" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '40px' }}>
    <div className="container">
      {/* Stylized Logo Title */}
      <div style={{ marginBottom: '24px' }}>
        <h1 className="title-font" style={{ fontSize: '5rem', letterSpacing: '0.02em', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: 0 }}>
          <span style={{ color: 'var(--accent-primary)' }}>Buzz</span>
          <span style={{ color: 'var(--text-main)' }}>build</span>
        </h1>
      </div>

      <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', fontWeight: '500', maxWidth: '800px', margin: '0 0 40px 0' }}>
        {t.hero.title}
      </p>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-start', marginBottom: '80px' }}>
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

const Mission = ({ t }) => (
  <section id="missie" style={{ padding: '100px 0' }}>
    <div className="container" style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>

      {/* Left side: Text */}
      <div style={{ flex: '1 1 500px' }}>
        <h2 className="title-font" style={{ fontSize: '3rem', fontWeight: 'normal', color: 'var(--text-main)', marginBottom: '16px', lineHeight: '1.1' }}>
          {t.mission.title}
        </h2>
        <h3 className="text-accent" style={{ fontSize: '1.4rem', fontWeight: '500', marginBottom: '32px' }}>
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

const Values = ({ t }) => {
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
    <section id="waarden" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="section-header text-center">
          <h2>{t.values.title}</h2>
          <p className="subtext">{t.values.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {cardData.map((card, index) => (
            <div key={index} className="glass-card" style={{
              borderRadius: 'var(--radius-md)',
              padding: '40px',
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

const Projects = ({ t }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project) => {
    setActiveProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  };

  const closeProject = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto'; // re-enable scrolling
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % activeProject.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? activeProject.images.length - 1 : prev - 1));
  };

  return (
    <section id="projecten" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="section-header text-center">
          <h2>{t.projects.title}</h2>
          <p className="subtext" style={{ color: 'var(--text-muted)' }}>{t.projects.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
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

const Testimonials = ({ t }) => {
  const reviews = [1, 2, 3, 4, 5];
  // We duplicate the array to allow for a seamless infinite scroll loop
  const seamlessReviews = [...reviews, ...reviews];

  return (
    <section style={{ padding: '80px 0', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header text-center">
          <h2>{t.testimonials.title}</h2>
          <p className="subtext" style={{ color: 'var(--text-muted)' }}>{t.testimonials.subtitle}</p>
        </div>

        <div className="carousel-container">
          <div className="carousel-track">
            {seamlessReviews.map((item, index) => (
              <div key={`${item}-${index}`} className="glass-card" style={{
                borderRadius: 'var(--radius-md)',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                width: '400px',
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

const Services = ({ t, mailtoLink }) => (
  <section id="diensten" style={{ padding: '80px 0' }}>
    <div className="container">
      <div className="section-header text-center">
        <h2 style={{ fontSize: '2.5rem' }}>{t.services.title}</h2>
        <p className="subtext" style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{t.services.subtitle}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
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

const Team = ({ t }) => (
  <section id="over" style={{ padding: '80px 0' }}>
    <div className="container">
      <div className="section-header text-center">
        <h2>{t.team.title}</h2>
        <p className="subtext" style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>Ontmoet ons team dat met trots en vakmanschap jouw badkamer en huis transformeert.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
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

const Footer = ({ t, handleNavClick }) => (
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
          <a href="#waarden" onClick={(e) => handleNavClick(e, 'waarden')} style={{ fontSize: '0.85rem', fontWeight: '500' }}>Proces</a>
          <a href="#projecten" onClick={(e) => handleNavClick(e, 'projecten')} style={{ fontSize: '0.85rem', fontWeight: '500' }}>Werk</a>
          <a href="#diensten" onClick={(e) => handleNavClick(e, 'diensten')} style={{ fontSize: '0.85rem', fontWeight: '500' }}>Diensten</a>
          <a href="#over" onClick={(e) => handleNavClick(e, 'over')} style={{ fontSize: '0.85rem', fontWeight: '500' }}>Over ons</a>
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
  const [lang, setLang] = useState('nl');
  const t = translations[lang];

  const handleNavClick = (e, targetId) => {
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
