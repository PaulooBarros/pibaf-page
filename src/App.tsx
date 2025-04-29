import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import WorshipTimes from "./components/WorshipTimes/WorshipTimes";
import PastorsSection from "./components/PastorsSection/PastorsSection";
import LocationSection from "./components/LocationSection/LocationSection";
import Footer from "./components/Footer/Footer";
import HelpTheWorkSection from "./components/HelpTheWorkSection/HelpTheWorkSection";
import MinistriesSection from "./components/MinistriesSection/MinistriesSection";
import YouTubeSection from "./components/YouTubeSection/YouTubeSection";
// import YouTubeSection from "./components/YouTubeSection/YouTubeSection";


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorshipTimes />
        <PastorsSection />
        <YouTubeSection />
        <MinistriesSection/>
        {/* <LoveYourChurchSection />  */}
        <HelpTheWorkSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
