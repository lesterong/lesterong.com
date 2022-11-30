import React from 'react';
import AboutSection from './sections/AboutSection';
import HeroSection from './sections/HeroSection';
import Navbar from './components/Navbar';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import FooterSection from './sections/FooterSection';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </>
  );
};

export default App;
