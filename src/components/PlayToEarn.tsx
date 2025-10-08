import React, { useState } from 'react';
import { Gift, Trophy, Star, Coins } from 'lucide-react';
import GetStartedModal from './GetStartedModal';
import GameModal from './GameModal';

const PlayToEarn: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [currentReward, setCurrentReward] = useState('');

  const rewards = [
    '2 Free Deliveries! 🎁',
    '10% Off Your Next Delivery! 🛍️',
    '₦2000 Cash Gift! 💰',
    'Free Digital Gift! 🎉'
  ];

  const handleGameWin = () => {
    setShowReward(false);
    // Simulate game play with setTimeout
    setTimeout(() => {
      const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
      setCurrentReward(randomReward);
      setShowReward(true);
      setIsModalOpen(true);
    }, 1000);
  };

  return (
    <section className="min-h-screen pt-20 relative">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff00ff]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#00ff9d]/20 rounded-full blur-3xl animate-pulse-slower"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Play &
            <span className="block bg-gradient-to-r from-[#ff00ff] via-[#9d00ff] to-[#00ff9d] text-transparent bg-clip-text">
              Win Rewards
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Play our fun game and win amazing rewards! From free deliveries to cash gifts, every play is a chance to win.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Trophy className="w-12 h-12 text-[#ff00ff] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Deliveries</h3>
              <p className="text-white/70">Win up to 2 free deliveries</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Coins className="w-12 h-12 text-[#00ff9d] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cash Gifts</h3>
              <p className="text-white/70">Win ₦2000 cash rewards</p>
            </div>
          </div>

          {showReward ? (
            <div className="text-center mb-8 animate-bounce">
              <Star className="w-16 h-16 text-[#ff00ff] mx-auto mb-4" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#ff00ff] to-[#00ff9d] text-transparent bg-clip-text">
                Congratulations! You've Won
              </h2>
              <p className="text-xl mt-2">{currentReward}</p>
            </div>
          ) : (
            <div className="text-center mb-8">
              <Gift className="w-16 h-16 text-[#9d00ff] mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Ready to Win?</h2>
              <p className="text-white/70 mt-2">Click play to catch packages and win rewards!</p>
            </div>
          )}

          <button
            onClick={() => setIsGameModalOpen(true)}
            className="w-full bg-gradient-to-r from-[#ff00ff] to-[#9d00ff] px-8 py-4 rounded-xl text-white font-medium hover:shadow-[0_0_20px_rgba(255,0,255,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            {showReward ? 'Play Again' : 'Play Now'}
            <Star className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      </div>

      <GameModal 
        isOpen={isGameModalOpen}
        onClose={() => setIsGameModalOpen(false)}
        onWin={handleGameWin}
      />

      <GetStartedModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default PlayToEarn;