import React from 'react';
import { TranslationData } from '../../translations';

interface ValuesProps {
  t: TranslationData;
}

export const Values = ({ t }: ValuesProps) => {
  // Parsing the translation strings into bullets for the cards based on new design
  const cardData = t.values.cards;

  return (
    <section id="waarden" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2>{t.values.title}</h2>
          <p className="subtext">{t.values.subtitle}</p>
        </div>

        <div className="responsive-grid grid-3" style={{ gap: '20px' }}>
          {cardData.map((card, index) => (
            <div key={index} className="glass-card">
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
