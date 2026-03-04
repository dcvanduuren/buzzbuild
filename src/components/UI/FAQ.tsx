import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TranslationData } from '../../translations';

interface FAQProps {
    t: TranslationData;
}

export const FAQ: React.FC<FAQProps> = ({ t }) => {
    // Generate the FAQPage JSON-LD strictly based on the current language
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": t.faq.items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section id="faq" className="section-padding">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="section-header text-center">
                    <h2>{t.faq.title}</h2>
                    <p className="subtext">{t.faq.subtitle}</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {t.faq.items.map((item, index) => (
                        <details key={index} style={{
                            background: 'var(--card-bg)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                            overflow: 'hidden'
                        }}>
                            <summary style={{
                                padding: '24px',
                                fontWeight: '600',
                                fontSize: '1.1rem',
                                color: 'var(--text-main)',
                                cursor: 'pointer',
                                listStyle: 'none',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                {item.question}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </summary>
                            <div style={{
                                padding: '0 24px 24px 24px',
                                color: 'var(--text-muted)',
                                lineHeight: '1.7',
                                fontSize: '0.95rem'
                            }}>
                                <p style={{ margin: 0, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>{item.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};
