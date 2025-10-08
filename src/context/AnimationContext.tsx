import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface AnimationContextType {
  animate: boolean;
}

const AnimationContext = createContext<AnimationContextType>({ animate: false });

export const useAnimation = () => useContext(AnimationContext);

interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Wait a bit for initial load then enable animations
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <AnimationContext.Provider value={{ animate }}>
      {children}
    </AnimationContext.Provider>
  );
};