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
      {/* Main content */}
      <div className="z-10 text-center">
        {/* Logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-12 h-12 text-black" />
          </div>
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

    </div>
  );
};

export default WelcomePage;
