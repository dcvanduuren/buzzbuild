import React from 'react';
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

          <a href={mailtoLink} className="btn btn-outline" style={{ width: '100%' }}>
            {t.services.btnEmail}
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

          <a href={mailtoLink} className="btn btn-primary" style={{ width: '100%' }}>
            {t.services.btnEmail}
          </a>
        </div>
      </div>
    </div>
  </section>
);
