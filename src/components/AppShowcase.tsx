import React, { useRef, useEffect } from 'react';
import { useAnimation } from '../context/AnimationContext';

const AppShowcase: React.FC = () => {
  const { animate } = useAnimation();
  const showcaseRef = useRef(null);
  const screenshotRef1 = useRef(null);
  const screenshotRef2 = useRef(null);
  
  useEffect(() => {
    if (showcaseRef.current && animate) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            showcaseRef.current.classList.add('animate-fade-in');
            if (screenshotRef1.current) {
              screenshotRef1.current.classList.add('animate-slide-in-right');
            }
            if (screenshotRef2.current) {
              screenshotRef2.current.classList.add('animate-slide-in-left');
            }
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(showcaseRef.current);
      return () => observer.disconnect();
    }
  }, [animate]);

  return (
    <section 
      ref={showcaseRef}
      id="screenshots"
      className="py-20 relative opacity-0 transition-opacity duration-1000"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#ff00ff]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/5 w-96 h-96 bg-[#00ff9d]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Experience The App
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00ff9d] to-[#ff00ff] mx-auto"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mt-6">
            See how SendSafe revolutionizes the delivery experience with our intuitive and secure interface.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
          <div 
            ref={screenshotRef1}
            className="relative opacity-0 transform translate-x-24 transition-all duration-1000"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff00ff] to-[#9d00ff] rounded-3xl blur-md opacity-60"></div>
            <div className="relative rounded-3xl overflow-hidden border-8 border-[#1a0033] shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="SendSafe App Screenshot - Username Search" 
                className="w-64 h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#00ff9d] to-[#00ff9d]/50 text-black font-bold px-4 py-2 rounded-full transform rotate-12">
              Privacy First!
            </div>
          </div>
          
          <div className="max-w-md text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#ff00ff] via-[#9d00ff] to-[#00ff9d] text-transparent bg-clip-text">
              Find People By Username
            </h3>
            <p className="text-lg text-white/80 mb-6">
              No more sharing your home address with strangers. SendSafe allows you to receive packages using just your username, keeping your location private and secure.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Enhanced Privacy</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Identity Protection</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Username Search</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-8 lg:gap-16 mt-20">
          <div 
            ref={screenshotRef2}
            className="relative opacity-0 transform -translate-x-24 transition-all duration-1000"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#9d00ff] to-[#00ff9d] rounded-3xl blur-md opacity-60"></div>
            <div className="relative rounded-3xl overflow-hidden border-8 border-[#1a0033] shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/6214931/pexels-photo-6214931.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="SendSafe App Screenshot - Services" 
                className="w-64 h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#ff00ff] to-[#ff00ff]/50 text-white font-bold px-4 py-2 rounded-full transform -rotate-12">
              So Easy!
            </div>
          </div>
          
          <div className="max-w-md text-center lg:text-right">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#00ff9d] via-[#9d00ff] to-[#ff00ff] text-transparent bg-clip-text">
              Multiple Delivery Options
            </h3>
            <p className="text-lg text-white/80 mb-6">
              Choose from a variety of delivery options including same-day, international, and bulk deliveries. SendSafe makes shipping flexible, affordable, and convenient.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Instant Delivery</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">International Shipping</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Bulk Options</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;