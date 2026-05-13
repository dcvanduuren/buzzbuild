import React from 'react';
import { Helmet } from 'react-helmet-async';
import { translations, SupportedLang } from '../../translations';

interface SchemaManagerProps {
    lang: SupportedLang;
}

export const SchemaManager: React.FC<SchemaManagerProps> = ({ lang }) => {
    const t = translations[lang];
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
                "name": "Buzzbuild",
                "image": "https://buzzbuild.nl/assets/images/Logo.png",
                "description": t.seo.description,
                "url": lang === 'nl' ? "https://buzzbuild.nl" : "https://buzzbuild.nl/en",
                "telephone": "+31638715895",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Eindhoven",
                    "addressRegion": "Noord-Brabant",
                    "addressCountry": "NL"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 51.4416,
                    "longitude": 5.4697
                },
                "areaServed": {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                        "@type": "GeoCoordinates",
                        "latitude": 51.4416,
                        "longitude": 5.4697
                    },
                    "geoRadius": "30000"
                },
                "priceRange": "$$$",
                "knowsAbout": [
                    "Luxe Badkamer Renovatie",
                    "Turn-key Oplevering",
                    "Timmerwerk op Maat"
                ]
            }
        ]
    };

    return (
        <Helmet>
            <title>{t.seo.title}</title>
            <meta name="description" content={t.seo.description} />
            
            {/* International SEO / Hreflang Tags */}
            <link rel="alternate" hrefLang="nl" href="https://buzzbuild.nl/" />
            <link rel="alternate" hrefLang="en" href="https://buzzbuild.nl/en" />
            <link rel="alternate" hrefLang="x-default" href="https://buzzbuild.nl/" />

            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};
