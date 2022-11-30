import ProjectCard from '../components/ProjectCard';
import Bgcolors from '../types/Bgcolors';
import Section from './Section';

const ProjectsSection = () => (
  <Section color={Bgcolors.Beige}>
    <div className="mb-6">
      <h2 className="mt-6">Featured Projects</h2>
      <ProjectCard
        title="Dine Inn Pte Ltd"
        duty="UI/UX Design"
        description={[
          'Dine Inn is a e-commerce platform that connects home chefs to their customers.',
          'I redesigned their user interface for improved user experience and conversion rates.',
        ]}
      />
      <ProjectCard
        title="Taskority"
        duty="Developer and Designer"
        description={[
          'Taskority is a web application to manage all your tasks across all your devices.',
          'Built with React and Ruby on Rails.',
        ]}
      />
    </div>
  </Section>
);

export default ProjectsSection;
