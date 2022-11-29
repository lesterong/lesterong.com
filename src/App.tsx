import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Section from './components/Section';

const App = () => {
  return (
    <Section color="bg-beige-100">
      <Navbar />
      <HeroSection />
    </Section>
  );
};

export default App;
