import { TranslationData } from '../../translations';

interface TeamProps {
  t: TranslationData;
}

export const Team = ({ t }: TeamProps) => (
  <section id="over" className="section-padding">
    <div className="container">
      <div className="section-header text-center" style={{ marginBottom: '60px' }}>
        <h2>{t.team.title}</h2>
        <p className="subtext" style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{t.team.subtitle}</p>
      </div>

      <div className="responsive-grid grid-2" style={{ gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
        {/* Profile 1 */}
        <div className="glass-card" style={{
          padding: '16px',
          aspectRatio: '3/4',
          position: 'relative'
        }}>
          <div style={{ width: '100%', height: '100%', borderRadius: 'var(--radius-md)', overflow: 'hidden', position: 'relative' }}>
            <img
              src="/assets/images/optimized/founder images/Diederik_Gen.webp"
              alt="Diederik van Duuren"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 4px', fontSize: '1.2rem' }}>Diederik van Duuren</h3>
              <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.9rem' }}>{t.team.founder}</p>
            </div>
          </div>
        </div>
        {/* Profile 2 */}
        <div className="glass-card" style={{
          padding: '16px',
          aspectRatio: '3/4',
          position: 'relative'
        }}>
          <div style={{ width: '100%', height: '100%', borderRadius: 'var(--radius-md)', overflow: 'hidden', position: 'relative' }}>
            <img
              src="/assets/images/optimized/founder images/Lodewijk_Gen.webp"
              alt="Lodewijk van Duuren"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 4px', fontSize: '1.2rem' }}>Lodewijk van Duuren</h3>
              <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.9rem' }}>{t.team.founder}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
