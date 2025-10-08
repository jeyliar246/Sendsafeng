import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import SubscriptionPackages from './components/SubscriptionPackages';
import Footer from './components/Footer';
import TermsAndPrivacy from './components/TermsAndPrivacy';
import { AnimationProvider } from './context/AnimationContext';

function App() {
  return (
    <Router>
      <AnimationProvider>
        <div className="min-h-screen bg-gradient-to-b from-black to-[#0a1a0a] text-white overflow-hidden">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/subscriptions" element={<SubscriptionPackages />} />
              <Route path="/terms" element={<TermsAndPrivacy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AnimationProvider>
    </Router>
  );
}

export default App;