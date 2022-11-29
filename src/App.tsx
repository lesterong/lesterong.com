import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Bgcolors from './types/Bgcolors';

const App = () => {
  return (
    <Section color={Bgcolors.Beige}>
      <Navbar />
      <HeroSection />
    </Section>
  );
};

export default App;
