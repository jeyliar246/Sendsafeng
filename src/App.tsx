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

function App() {
  return (
    <Router>
      <AnimationProvider>
        <div className="min-h-screen bg-gradient-to-b from-black to-[#0a1a0a] text-white overflow-hidden">
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
    </Router>
  );
}

export default App;