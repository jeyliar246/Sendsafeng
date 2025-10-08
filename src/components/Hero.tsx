import React, { useRef, useEffect, useState } from 'react';
import { Shield, UserCircle, ArrowRight, Gift } from 'lucide-react';
import { useAnimation } from '../context/AnimationContext';
import GetStartedModal from './GetStartedModal';

const Hero: React.FC = () => {
  const { animate } = useAnimation();
  const heroRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    if (heroRef.current && animate) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            heroRef.current.classList.add('animate-fade-in');
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(heroRef.current);
      return () => observer.disconnect();
    }
  }, [animate]);

  return (
    <>
      <section 
        ref={heroRef}
        className="min-h-screen pt-20 flex flex-col justify-center items-center relative opacity-0 transition-opacity duration-1000"
        id="hero"
      >
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff9d]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#22c55e]/20 rounded-full blur-3xl animate-pulse-slower"></div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Connect, Share, and 
            <span className="block bg-gradient-to-r from-[#00ff9d] via-[#22c55e] to-[#16a34a] text-transparent bg-clip-text">
              Deliver Joy
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10">
            Send packages with usernames, share digital gifts, and join a community that celebrates every delivery. The next generation of social delivery is here.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#00ff9d] to-[#22c55e] px-8 py-3 rounded-full text-white font-medium hover:shadow-[0_0_20px_rgba(0,255,157,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Get Started 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-3 rounded-full text-white font-medium border border-white/30 hover:border-[#22c55e] hover:text-[#22c55e] transition-all duration-300 backdrop-blur-sm bg-white/5">
              Learn More
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl">
              <Shield className="w-8 h-8 text-[#00ff9d]" />
              <span>Privacy Protected</span>
            </div>
            
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl">
              <UserCircle className="w-8 h-8 text-[#22c55e]" />
              <span>Username Delivery</span>
            </div>
            
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl">
              <Gift className="w-8 h-8 text-[#16a34a]" />
              <span>Digital Gifts</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      <GetStartedModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Hero;