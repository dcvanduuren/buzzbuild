import React from 'react';
import { TranslationData } from '../../translations';

interface GuaranteesProps {
    t: TranslationData;
}

export const Guarantees: React.FC<GuaranteesProps> = ({ t }) => {
    return (
        <section id="garanties" className="section-padding" style={{ background: 'var(--card-bg)' }}>
            <div className="container">
                <div className="section-header text-center">
                    <h2>{t.guarantees.title}</h2>
                    <p className="subtext">{t.guarantees.subtitle}</p>
                </div>

                <div className="responsive-grid grid-3" style={{ gap: '24px' }}>
                    {t.guarantees.items.map((item, index) => (
                        <div key={index} className="glass-card" style={{
                            borderRadius: 'var(--radius-md)',
                            padding: '32px',
                            borderTop: '3px solid var(--accent-primary)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '50%',
                                background: 'rgba(255, 145, 77, 0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '24px', color: 'var(--accent-primary)'
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <h3 className="text-accent" style={{ fontSize: '1.1rem', marginBottom: '16px', fontWeight: '600' }}>
                                {item.title}
                            </h3>
                            <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0, opacity: 0.9 }}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
