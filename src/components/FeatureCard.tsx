import React, { useRef, useEffect } from 'react';
import { useAnimation } from '../context/AnimationContext';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const { animate } = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (cardRef.current && animate) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            cardRef.current.style.opacity = '1';
            cardRef.current.style.transform = 'translateY(0)';
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(cardRef.current);
      return () => observer.disconnect();
    }
  }, [animate]);

  return (
    <div 
      ref={cardRef}
      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 group hover:shadow-[0_0_20px_rgba(0,255,157,0.3)] opacity-0 transform translate-y-10"
      style={{ 
        transitionDelay: `${delay}s`,
        transitionProperty: 'opacity, transform',
        transitionDuration: '0.5s'
      }}
    >
      <div className="relative inline-block mb-4">
        <div className="absolute -inset-2 bg-gradient-to-r from-[#00ff9d]/40 to-[#22c55e]/40 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 group-hover:text-[#22c55e] transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;