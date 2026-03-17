import { TranslationData } from '../../translations';

interface MissionProps {
  t: TranslationData;
}

export const Mission = ({ t }: MissionProps) => (
  <section id="missie" className="mission-padding">
    <div className="container mission-grid" style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>

      {/* Left side: Text */}
      <div style={{ flex: '1 1 500px' }}>
        <h2 className="title-font mission-title">
          {t.mission.title}
        </h2>
        <h3 className="text-accent mission-subtitle">
          {t.mission.subtitle}
        </h3>
        <p className="mission-body" style={{ color: 'var(--text-main)', opacity: 0.9, lineHeight: '1.7', margin: 0 }}>
          {t.mission.body}
        </p>
      </div>

      {/* Right side: Handshake Photo */}
      <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
        <div className="glass-card" style={{
          position: 'relative',
          width: '100%',
          maxWidth: '500px',
          aspectRatio: '1/1',
          padding: '16px', // Matches project card padding
          overflow: 'hidden'
        }}>
          <img
            src="/assets/images/optimized/handshake.webp"
            alt="Persoonlijke aanpak: Handdruk Buzzbuild"
            loading="lazy"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              borderRadius: 'var(--radius-md)' // Matches project image radius
            }}
          />
        </div>
      </div>

    </div>
  </section>
);
