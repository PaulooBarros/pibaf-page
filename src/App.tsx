import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import WorshipTimes from './components/WorshipTimes/WorshipTimes';
import PastorsSection from './components/PastorsSection/PastorsSection';
import LocationSection from './components/LocationSection/LocationSection';
import Footer from './components/Footer/Footer';
import LoveYourChurchSection from './components/LoveYourChurchSection/LoveYourChurchSection'
import HelpTheWorkSection from './components/HelpTheWorkSection/HelpTheWorkSection';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorshipTimes />
        <PastorsSection />
        <LoveYourChurchSection/> {/* Substituído aqui */}
        <HelpTheWorkSection/>
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;