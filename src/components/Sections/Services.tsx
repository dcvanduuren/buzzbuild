import { TranslationData } from '../../translations';

interface ServicesProps {
  t: TranslationData;
  mailtoLink: string;
}

export const Services = ({ t, mailtoLink }: ServicesProps) => (
  <section id="diensten" className="section-padding">
    <div className="container">
      <div className="section-header text-center">
        <h2 style={{ fontSize: '2.5rem' }}>{t.services.title}</h2>
        <p className="subtext" style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{t.services.subtitle}</p>
      </div>

      <div className="responsive-grid grid-2" style={{ gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
        {/* Hourly Card */}
        <div className="glass-card" style={{
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}>
          <h3 className="text-accent" style={{ fontSize: '1rem', marginBottom: '24px' }}>{t.services.card1.title}</h3>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '8px' }}>{t.services.card1.from}</div>
          <div className="text-accent" style={{ fontSize: '3.5rem', fontWeight: '500', lineHeight: 1, marginBottom: '24px' }}>
            {t.services.card1.price}<span style={{ fontSize: '2rem' }}>{t.services.card1.unit}</span>
          </div>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '24px' }}>
            {t.services.card1.body}
          </p>

          <p style={{ fontSize: '0.75rem', color: 'var(--text-main)', fontWeight: '600', marginBottom: '16px' }}>
            {t.services.card1.howItWorks}
          </p>

          <ul className="bullet-list" style={{ color: 'var(--accent-primary)', marginBottom: '40px', flexGrow: 1 }}>
            {t.services.card1.bullets.map((bullet, i) => (
              <li key={i}><span style={{ color: 'var(--text-muted)' }}>{bullet}</span></li>
            ))}
          </ul>

          <a href={mailtoLink} className="btn btn-outline" style={{ width: '100%' }}>
            {t.services.btnEmail}
          </a>
        </div>

        {/* Project Card */}
        <div className="glass-card" style={{
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}>
          <h3 className="text-accent" style={{ fontSize: '1rem', marginBottom: '24px' }}>{t.services.card2.title}</h3>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '8px' }}>{t.services.card2.from}</div>
          <div className="text-accent" style={{ fontSize: '3rem', fontWeight: '500', lineHeight: 1.1, marginBottom: '24px' }}>
            {t.services.card2.price}
          </div>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '24px' }}>
            {t.services.card2.body}
          </p>

          <p style={{ fontSize: '0.75rem', color: 'var(--text-main)', fontWeight: '600', marginBottom: '16px' }}>
            {t.services.card2.howItWorks}
          </p>

          <ul className="bullet-list" style={{ color: 'var(--accent-primary)', marginBottom: '40px', flexGrow: 1 }}>
            {t.services.card2.bullets.map((bullet, i) => (
              <li key={i}><span style={{ color: 'var(--text-muted)' }}>{bullet}</span></li>
            ))}
          </ul>

          <a href={mailtoLink} className="btn btn-primary" style={{ width: '100%' }}>
            {t.services.btnEmail}
          </a>
        </div>
      </div>
    </div>
  </section>
);
