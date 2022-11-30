import Bgcolors from '../types/Bgcolors';
import Section from './Section';

const ProjectsSection = () => (
  <Section color={Bgcolors.Beige}>
    <div className="max-w-xl">
      <h2 className="pt-6">Featured Projects</h2>
      <p className="pt-6 pb-6">Projects go here.</p>
    </div>
  </Section>
);

export default ProjectsSection;
