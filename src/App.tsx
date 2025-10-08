import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import SubscriptionPackages from './components/SubscriptionPackages';
import SubscriptionSelection from './components/SubscriptionSelection';
import BottomNavigation from './components/BottomNavigation';
import TermsAndPrivacy from './components/TermsAndPrivacy';
import { AnimationProvider } from './context/AnimationContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  // Register service worker for PWA
  React.useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return (
    <Router>
      <ThemeProvider>
        <AnimationProvider>
          <div className="min-h-screen bg-gradient-to-b from-black to-[#0a1a0a] dark:from-black dark:to-[#0a1a0a] light:from-gray-50 light:to-gray-100 text-white dark:text-white light:text-gray-900 overflow-hidden">
            <Header />
            <main className="pb-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/subscriptions" element={<SubscriptionPackages />} />
                <Route path="/subscription-selection" element={<SubscriptionSelection />} />
                <Route path="/terms" element={<TermsAndPrivacy />} />
              </Routes>
            </main>
            <BottomNavigation />
          </div>
        </AnimationProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;