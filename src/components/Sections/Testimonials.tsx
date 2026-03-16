import React from 'react';
import { TranslationData } from '../../translations';
import { StarIcon } from '../UI/Icons';

interface TestimonialsProps {
  t: TranslationData;
}

export const Testimonials = ({ t }: TestimonialsProps) => {
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
