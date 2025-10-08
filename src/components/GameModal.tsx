import React, { useState, useEffect, useRef } from 'react';
import { X, Package, Timer } from 'lucide-react';
import { Howl } from 'howler';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWin: () => void;
}

interface Box {
  id: number;
  x: number;
  y: number;
}

const catchSound = new Howl({
  src: ['https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'],
  volume: 0.5
});

const GameModal: React.FC<GameModalProps> = ({ isOpen, onClose, onWin }) => {
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15); // 15 seconds to catch 10 packages
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const lastSpawnTimeRef = useRef(0);
  const spawnIntervalRef = useRef(800); // Spawn every 0.8 seconds
  const timerRef = useRef<NodeJS.Timeout>();
  
  useEffect(() => {
    if (!isOpen) {
      setBoxes([]);
      setScore(0);
      setTimeLeft(15);
      return;
    }

    // Start timer
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          onClose();
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    let lastTime = performance.now();
    
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Spawn new boxes
      if (currentTime - lastSpawnTimeRef.current > spawnIntervalRef.current) {
        setBoxes(prevBoxes => [
          ...prevBoxes,
          {
            id: currentTime,
            x: Math.random() * (gameAreaRef.current?.clientWidth ?? 300 - 40),
            y: -40
          }
        ]);
        lastSpawnTimeRef.current = currentTime;
      }

      // Update box positions
      setBoxes(prevBoxes => 
        prevBoxes
          .map(box => ({
            ...box,
            y: box.y + (deltaTime * 0.2) // Adjust speed here
          }))
          .filter(box => box.y < (gameAreaRef.current?.clientHeight ?? 400))
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (score >= 10) {
      onWin();
      onClose();
    }
  }, [score, onWin, onClose]);

  const handleClick = (boxId: number) => {
    catchSound.play();
    setBoxes(prevBoxes => prevBoxes.filter(box => box.id !== boxId));
    setScore(prevScore => prevScore + 1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 max-w-md w-full mx-4 border border-white/20 shadow-xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
            <Timer className="w-4 h-4 text-[#ff00ff]" />
            <span className="text-white/90">{timeLeft}s</span>
          </div>
          <div className="bg-white/10 px-3 py-1 rounded-full">
            <span className="text-white/90">Score: {score}/10</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2 text-center">
          Catch 10 Packages in {timeLeft} Seconds!
        </h2>
        <p className="text-white/70 text-center mb-4">
          Tap the packages to catch them
        </p>

        <div 
          ref={gameAreaRef}
          className="relative w-full h-[400px] bg-black/30 rounded-xl overflow-hidden"
        >
          {boxes.map(box => (
            <button
              key={box.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-colors"
              style={{ left: box.x, top: box.y }}
              onClick={() => handleClick(box.id)}
            >
              <Package className="w-10 h-10 text-[#ff00ff] hover:text-[#00ff9d] transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameModal;