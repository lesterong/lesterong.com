import AboutSection from '../sections/AboutSection';
import HeroSection from '../sections/HeroSection';
import SkillsSection from '../sections/SkillsSection';
import ProjectsSection from '../sections/ProjectsSection';

const Home = () => {
  document.title = 'Lester Ong';
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
};

export default Home;
