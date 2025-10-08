import React, { useRef, useEffect } from 'react';
import { useAnimation } from '../context/AnimationContext';
import { Package, UserCheck, Truck, Check } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const { animate } = useAnimation();
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (sectionRef.current && animate) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            sectionRef.current.classList.add('animate-fade-in');
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }
  }, [animate]);

  const steps = [
    {
      icon: <UserCheck className="w-12 h-12 text-[#00ff9d]" />,
      title: "Create Account",
      description: "Sign up and create your unique username that others will use to send packages to you."
    },
    {
      icon: <Package className="w-12 h-12 text-[#22c55e]" />,
      title: "Send Package",
      description: "Enter recipient's username, package details, and choose your preferred delivery option."
    },
    {
      icon: <Truck className="w-12 h-12 text-[#16a34a]" />,
      title: "Track Delivery",
      description: "Monitor your package in real-time as it makes its way to the recipient."
    },
    {
      icon: <Check className="w-12 h-12 text-[#00ff9d]" />,
      title: "Secure Receipt",
      description: "Recipient verifies identity and receives the package without sharing their address."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="how-it-works"
      className="py-20 relative opacity-0 transition-opacity duration-1000"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a1a0a] to-black"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-[#00ff9d]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-[#22c55e]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How SendSafe Works
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] mx-auto"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mt-6">
            Delivering packages has never been easier or more secure. Follow these simple steps:
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#00ff9d] via-[#22c55e] to-[#16a34a] transform -translate-y-1/2 opacity-30"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex-1 relative group"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
                              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,157,0.2)] h-full">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="absolute -inset-3 bg-gradient-to-r from-[#00ff9d]/40 to-[#22c55e]/40 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 w-20 h-20 flex items-center justify-center bg-black rounded-full border border-white/20">
                      {step.icon}
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#00ff9d] text-black rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-[#22c55e] transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-white/70 text-center group-hover:text-white/90 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-[#00ff9d] to-[#22c55e] px-8 py-3 rounded-full text-white font-medium hover:shadow-[0_0_20px_rgba(0,255,157,0.6)] transition-all duration-300">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;