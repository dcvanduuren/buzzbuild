import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SchemaManager: React.FC = () => {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
                "name": "Buzzbuild",
                "image": "https://buzzbuild.nl/assets/images/Logo.png",
                "description": "Hét aannemersbedrijf gespecialiseerd in luxe badkamer renovaties en bouwprojecten in regio Eindhoven.",
                "url": "https://buzzbuild.nl",
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
            <title>Buzzbuild | High-end aannemer & badkamer renovaties Eindhoven</title>
            <meta name="description" content="Buzzbuild is de betrouwbare aannemer in Eindhoven, gespecialiseerd in hoogwaardige badkamerrenovaties, duurzame verbouwingen en timmerwerk op maat." />
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};
