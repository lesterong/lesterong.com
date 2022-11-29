import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Bgcolors from './types/Bgcolors';

const App = () => {
  return (
    <>
      <Navbar />
      <Section color={Bgcolors.Beige}>
        <HeroSection />
      </Section>
    </>
  );
};

export default App;
