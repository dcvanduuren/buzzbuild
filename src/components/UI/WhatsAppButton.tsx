import React from 'react';
import { WhatsAppIcon } from './Icons';

export const WhatsAppButton = () => {
  const phoneNumber = '31638715895';
  const message = 'Hallo Buzzbuild! Ik zou graag een offerte willen ontvangen voor mijn badkamer. Hier zijn foto\'s van de huidige situatie.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
};
