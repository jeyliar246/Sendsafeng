import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Bike } from 'lucide-react';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Navigate to home page after loading completes
          setTimeout(() => {
            navigate('/home');
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a1a0a] flex flex-col justify-center items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff9d]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#22c55e]/20 rounded-full blur-3xl animate-pulse-slower"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Main content */}
      <div className="z-10 text-center">
        {/* Logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <Package className="w-12 h-12 text-black" />
          </div>
          <div className="absolute -inset-2 bg-[#22c55e] blur-sm opacity-70 rounded-full animate-pulse"></div>
          <div className="absolute -inset-4 bg-[#00ff9d] blur-md opacity-30 rounded-full animate-pulse-slow"></div>
        </div>

        {/* App name */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#00ff9d] via-[#22c55e] to-[#16a34a] text-transparent bg-clip-text">
            SendSafe
          </span>
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
          Fast, reliable, and secure delivery services across Nigeria
        </p>

        {/* Loading animation */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-white/60">
            <Bike className="w-5 h-5 animate-spin" />
            <span>Loading...</span>
          </div>
          
          {/* Progress bar */}
          <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          
          <div className="text-sm text-white/60">
            {loadingProgress}%
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 animate-float">
        <Package className="w-8 h-8 text-[#00ff9d]/30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Bike className="w-8 h-8 text-[#22c55e]/30" />
      </div>
      <div className="absolute bottom-40 left-32 animate-float" style={{ animationDelay: '2s' }}>
        <Package className="w-6 h-6 text-pink-500/30" />
      </div>
      <div className="absolute bottom-20 right-32 animate-float" style={{ animationDelay: '0.5s' }}>
        <Bike className="w-6 h-6 text-[#16a34a]/30" />
      </div>
    </div>
  );
};

export default WelcomePage;
