import React from 'react';

export const BackgroundGlows = () => (
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
    <div className="glow-orb glow-orb-1" style={{ top: '12%', right: '-5%', width: '1000px', height: '650px', opacity: 0.9 }}></div>
    <div className="glow-orb glow-orb-4" style={{ top: '35%', left: '-10%', width: '750px', height: '1200px', opacity: 0.85 }}></div>
    <div className="glow-orb glow-orb-3" style={{ top: '55%', right: '5%', width: '1080px', height: '675px', opacity: 1 }}></div>
    <div className="glow-orb glow-orb-5" style={{ top: '75%', left: '-8%', width: '580px', height: '900px', opacity: 0.8 }}></div>
    <div className="glow-orb glow-orb-2" style={{ top: '90%', right: '-12%', width: '990px', height: '760px', opacity: 0.9 }}></div>
  </div>
);
