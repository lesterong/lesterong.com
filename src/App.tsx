import React from 'react';
import AboutSection from './sections/AboutSection';
import HeroSection from './sections/HeroSection';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </>
  );
};

export default App;
