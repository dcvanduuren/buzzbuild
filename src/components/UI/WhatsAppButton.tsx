import React from 'react';
import { WhatsAppIcon } from './Icons';

export const WhatsAppButton = () => {
  const phoneNumber = '31638715895';
  const message = 'Hallo Buzzbuild! Ik zou graag een offerte willen ontvangen voor mijn badkamer. Hier zijn foto\'s van de huidige situatie.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log("WhatsApp knop aangeklikt, gtag checken...");
    if (typeof window !== 'undefined' && (window as any).gtag) {
      console.log("gtag gevonden! Event wordt verstuurd.");
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18038797105/3YUtCOHdwascELHmyJlD',
        'event_callback': () => {
          console.log("Google heeft de conversie succesvol ontvangen!");
        }
      });
    } else {
      console.error("Gtag is niet geladen op deze pagina!");
    }
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp"
      onClick={handleClick}
    >
      <WhatsAppIcon />
    </a>
  );
};
