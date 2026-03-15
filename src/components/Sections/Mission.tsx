import React from 'react';
import { TranslationData } from '../../translations';

interface MissionProps {
  t: TranslationData;
}

export const Mission = ({ t }: MissionProps) => (
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
            src="/assets/images/optimized/handshake.webp"
            alt="Persoonlijke aanpak: Handdruk Buzzbuild"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

    </div>
  </section>
);
