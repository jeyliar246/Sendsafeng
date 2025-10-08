import React from 'react';
import { X, Apple, Play } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 max-w-md w-full mx-4 border border-white/20 shadow-xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-2 text-center">
          Start Sending the Smart Way
        </h2>
        <p className="text-white/70 text-center mb-8">
          How would you like to get our app?
        </p>

        <div className="flex flex-col gap-4">
          <a 
            href="https://apps.apple.com/us/app/sendsafe/id6612034715"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 border border-white/10 hover:border-[#ff00ff]/50 group"
          >
            <Apple className="w-6 h-6 group-hover:text-[#ff00ff]" />
            <span>Download on App Store</span>
          </a>
          
          <a 
            href="https://play.google.com/store/apps/details?id=com.sendsafe.android"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#ff00ff] to-[#9d00ff] px-6 py-3 rounded-xl text-white font-medium hover:shadow-[0_0_20px_rgba(255,0,255,0.5)] transition-all duration-300 group"
          >
            <Play className="w-6 h-6" />
            <span>Get it on Play Store</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetStartedModal;