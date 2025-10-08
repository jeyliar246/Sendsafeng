import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Smartphone, Share, MoreVertical, X, Apple, Download } from 'lucide-react';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);
  const [showAppStoreModal, setShowAppStoreModal] = useState(false);
  const [appStoreType, setAppStoreType] = useState<'apple' | 'google'>('apple');

  useEffect(() => {
    // Start loading after showing instructions
    if (!showInstructions) {
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
          return prev + 1; // 1% per 100ms = 10 seconds total
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [navigate, showInstructions]);

  const handleContinue = () => {
    setShowInstructions(false);
  };

  const handleAppStoreClick = (type: 'apple' | 'google') => {
    setAppStoreType(type);
    setShowAppStoreModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a1a0a] flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* Installation Instructions */}
      {showInstructions && (
        <div className="z-20 w-full max-w-2xl">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full flex items-center justify-center">
                <Package className="w-10 h-10 text-black" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
              <span className="bg-gradient-to-r from-[#00ff9d] via-[#22c55e] to-[#16a34a] text-transparent bg-clip-text">
                Welcome to SendSafe
              </span>
            </h1>
            <p className="text-center text-white/80 mb-8">
              Add SendSafe to your home screen for easy access
            </p>

            {/* Instructions */}
            <div className="space-y-6 mb-8">
              {/* iOS Instructions */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-lg flex items-center justify-center">
                    <Apple className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-white">For iOS Users (Safari)</h3>
                </div>
                <ol className="space-y-3 text-white/80 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#00ff9d]/20 rounded-full flex items-center justify-center text-[#00ff9d] text-xs font-bold">1</span>
                    <span>Tap the <Share className="w-4 h-4 inline mx-1" /> Share button at the bottom of your browser</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#00ff9d]/20 rounded-full flex items-center justify-center text-[#00ff9d] text-xs font-bold">2</span>
                    <span>Scroll down and tap "Add to Home Screen"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#00ff9d]/20 rounded-full flex items-center justify-center text-[#00ff9d] text-xs font-bold">3</span>
                    <span>Tap "Add" in the top right corner</span>
                  </li>
                </ol>
              </div>

              {/* Android Instructions */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#22c55e] to-[#16a34a] rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-white">For Android Users (Chrome)</h3>
                </div>
                <ol className="space-y-3 text-white/80 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#22c55e]/20 rounded-full flex items-center justify-center text-[#22c55e] text-xs font-bold">1</span>
                    <span>Tap the <MoreVertical className="w-4 h-4 inline mx-1" /> menu icon (three dots) at the top right</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#22c55e]/20 rounded-full flex items-center justify-center text-[#22c55e] text-xs font-bold">2</span>
                    <span>Tap "Add to Home screen" or "Install app"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#22c55e]/20 rounded-full flex items-center justify-center text-[#22c55e] text-xs font-bold">3</span>
                    <span>Tap "Add" or "Install"</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="mb-6">
              <p className="text-center text-white/60 text-sm mb-4">Or download our native apps</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleAppStoreClick('apple')}
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300"
                >
                  <Apple className="w-6 h-6 text-white" />
                  <div className="text-left">
                    <div className="text-xs text-white/60">Download on the</div>
                    <div className="text-sm font-semibold text-white">App Store</div>
                  </div>
                </button>
                <button
                  onClick={() => handleAppStoreClick('google')}
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300"
                >
                  <Download className="w-6 h-6 text-white" />
                  <div className="text-left">
                    <div className="text-xs text-white/60">GET IT ON</div>
                    <div className="text-sm font-semibold text-white">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              className="w-full bg-gradient-to-r from-[#00ff9d] to-[#22c55e] py-4 rounded-xl text-black font-bold text-lg hover:shadow-lg hover:shadow-[#00ff9d]/25 transition-all duration-300"
            >
              Continue to App
            </button>
          </div>
        </div>
      )}

      {/* Loading Screen */}
      {!showInstructions && (
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
      )}

      {/* App Store Modal */}
      {showAppStoreModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-b from-[#0a1a0a] to-black border border-white/20 rounded-2xl p-6 md:p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowAppStoreModal(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-4">
                {appStoreType === 'apple' ? (
                  <Apple className="w-8 h-8 text-black" />
                ) : (
                  <Download className="w-8 h-8 text-black" />
                )}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Coming Soon!
              </h3>
              <p className="text-white/80 mb-6">
                Our native {appStoreType === 'apple' ? 'iOS' : 'Android'} app is currently being worked on to provide you with an even better experience. 
                In the meantime, you can use our Progressive Web App (PWA) by adding it to your home screen for quick and easy access.
              </p>

              <button
                onClick={() => setShowAppStoreModal(false)}
                className="w-full bg-gradient-to-r from-[#00ff9d] to-[#22c55e] py-3 rounded-xl text-black font-semibold hover:shadow-lg hover:shadow-[#00ff9d]/25 transition-all duration-300"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
