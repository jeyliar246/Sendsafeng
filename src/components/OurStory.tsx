import React, { useRef, useEffect } from 'react';
import { useAnimation } from '../context/AnimationContext';
import { Shield, UserCheck, Zap } from 'lucide-react';

const OurStory: React.FC = () => {
  const { animate } = useAnimation();
  const storyRef = useRef(null);
  
  useEffect(() => {
    if (storyRef.current && animate) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            storyRef.current.classList.add('animate-fade-in');
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(storyRef.current);
      return () => observer.disconnect();
    }
  }, [animate]);

  return (
    <section 
      ref={storyRef}
      id="our-story"
      className="py-20 relative opacity-0 transition-opacity duration-1000"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#ff00ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#00ff9d]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Story
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#ff00ff] to-[#00ff9d] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#ff00ff] via-[#9d00ff] to-[#00ff9d] text-transparent bg-clip-text">
              Redefining Delivery For The Digital Age
            </h3>
            
            <p className="text-lg text-white/80 mb-6">
              SendSafe was born from a simple yet powerful idea: What if people could receive packages without revealing their home address? In today's digital world, privacy is more important than ever, yet the delivery industry has remained stuck in the past.
            </p>
            
            <p className="text-lg text-white/80 mb-6">
              Our founding team, with backgrounds in technology and logistics, set out to create a solution that would bridge this gap. We envisioned a platform where users could send and receive packages using only usernames, keeping their physical addresses private.
            </p>
            
            <p className="text-lg text-white/80 mb-8">
              Today, SendSafe is revolutionizing the delivery industry with our innovative approach to privacy-focused shipping. We're not just delivering packages; we're delivering peace of mind.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-[#00ff9d] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Enhanced Privacy</h4>
                  <p className="text-white/70">Our platform ensures your home address remains confidential, protecting your privacy in an increasingly public world.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <UserCheck className="w-6 h-6 text-[#ff00ff] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">User-Centric Approach</h4>
                  <p className="text-white/70">Every feature is designed with our users in mind, making the delivery experience seamless, secure, and stress-free.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-[#9d00ff] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Continuous Innovation</h4>
                  <p className="text-white/70">We're constantly improving our technology to provide the fastest, most reliable delivery service possible.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 perspective-1000">
            <div className="relative transform rotate-y-10 rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ff00ff] via-[#9d00ff] to-[#00ff9d] rounded-3xl blur-md opacity-70"></div>
              <div className="relative w-full h-full bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/8853508/pexels-photo-8853508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team working on delivery solutions" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                  <p className="text-xl font-bold text-white">Innovating for a safer tomorrow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;