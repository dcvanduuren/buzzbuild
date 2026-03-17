import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  fullWidth?: boolean;
}

export const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  duration = 0.7,
  className = '',
  fullWidth = false
}: FadeInProps) => {
  const shouldReduceMotion = useReducedMotion();
  const directionOffset = 30;
  
  const getInitialY = () => {
    if (direction === 'up') return directionOffset;
    if (direction === 'down') return -directionOffset;
    return 0;
  };
  
  const getInitialX = () => {
    if (direction === 'left') return directionOffset;
    if (direction === 'right') return -directionOffset;
    return 0;
  };

  if (shouldReduceMotion) {
    return <div className={className} style={fullWidth ? { width: '100%' } : {}}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: getInitialY(), 
        x: getInitialX() 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] // Premium ease-out curve
      }}
      style={fullWidth ? { width: '100%' } : {}}
    >
      {children}
    </motion.div>
  );
};
