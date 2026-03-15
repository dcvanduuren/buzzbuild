import React from 'react';
import { TranslationData } from '../../translations';

interface TrustBadgesProps {
    t: TranslationData;
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({ t }) => {
    return (
        <div style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: '24px',
            marginBottom: '24px',
            flexWrap: 'wrap'
        }}>
            {t.trustBadges.map((badge, index) => (
                <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    {badge}
                </div>
            ))}
        </div>
    );
};
