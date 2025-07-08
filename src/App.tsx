import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import SecurityFeatures from './components/SecurityFeatures';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <SecurityFeatures />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;