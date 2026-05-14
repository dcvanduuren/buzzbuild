import React, { useState, useRef, useEffect } from 'react';
import { TranslationData } from '../../translations';

interface TestimonialsProps {
  t: TranslationData;
}

const GoogleStarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbc04" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const ReviewCard = ({ item, t }: { item: any; t: TranslationData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 120;
  
  const shouldTruncate = item.text.length > maxLength;
  const displayText = isExpanded || !shouldTruncate ? item.text : item.text.substring(0, maxLength) + '...';

  // Google Profile Initial Background Colors
  const colors = ['#4285F4', '#EA4335', '#FBBC04', '#34A853', '#8A2BE2', '#FF69B4'];
  const colorIndex = item.name.charCodeAt(0) % colors.length;
  const bgColor = colors[colorIndex];

  return (
    <div className="glass-card carousel-card-width" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      flexShrink: 0,
      padding: '24px',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-main)',
      color: 'var(--text-main)',
      textAlign: 'left'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          backgroundColor: bgColor,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '600',
          fontSize: '18px'
        }}>
          {item.name.charAt(0).toUpperCase()}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ margin: 0, fontWeight: '700', color: 'var(--text-main)', fontSize: '15px' }}>{item.name}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
            <div style={{ display: 'flex', gap: '1px' }}>
              <GoogleStarIcon /><GoogleStarIcon /><GoogleStarIcon /><GoogleStarIcon /><GoogleStarIcon />
            </div>
            <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>{item.date}</span>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '4px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', margin: 0, whiteSpace: 'pre-wrap', opacity: 0.9 }}>
          {displayText}
        </p>
        {shouldTruncate && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              color: 'var(--accent-primary)',
              cursor: 'pointer',
              fontWeight: '600',
              marginTop: '8px',
              fontSize: '14px'
            }}
          >
            {isExpanded ? t.testimonials.showLess : t.testimonials.readMore}
          </button>
        )}
      </div>
    </div>
  );
};

import { GoogleIcon } from '../UI/Icons';

export const Testimonials = ({ t }: TestimonialsProps) => {
  const reviews = t.testimonials.reviews;
  // We duplicate the array to allow for a seamless infinite scroll loop
  const seamlessReviews = [...reviews, ...reviews, ...reviews];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    let animationId: number;
    const container = containerRef.current;
    if (!container) return;
    
    let thirdWidth = 0;

    // Defer measurement to avoid forced reflow on mount
    setTimeout(() => {
      if (container) thirdWidth = container.scrollWidth / 3;
    }, 500);

    const resizeObserver = new ResizeObserver(() => {
      if (container) thirdWidth = container.scrollWidth / 3;
    });
    resizeObserver.observe(container);
    
    const animate = () => {
      if (!isDragging && !isHovering) {
        container.scrollLeft += 0.5;
        
        // Reset scroll position to create infinite effect without querying scrollWidth
        if (container.scrollLeft >= thirdWidth) {
          container.scrollLeft -= thirdWidth;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [isDragging, isHovering]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setIsHovering(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const onTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="resultaten" className="section-padding" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header text-center">
          <h2>{t.testimonials.title}</h2>
          <p className="subtext" style={{ color: 'var(--text-muted)' }}>{t.testimonials.subtitle}</p>
        </div>

        <div 
          className="carousel-container"
          ref={containerRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseEnter={() => setIsHovering(true)}
        >
          <div className="carousel-track">
            {seamlessReviews.map((item, index) => (
              <ReviewCard key={`${item.name}-${index}`} item={item} t={t} />
            ))}
          </div>
        </div>

        <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'center' }}>
          <a 
            href="https://www.google.com/maps/search/Buzzbuild+Eindhoven" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 24px' }}
          >
            <GoogleIcon />
            {t.testimonials.viewAllGoogle}
          </a>
        </div>
      </div>
    </section>
  );
};
