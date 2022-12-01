import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import Section from '../sections/Section';
import Bgcolors from '../types/Bgcolors';

const Projects = () => {
  document.title = 'Lester Ong | Projects';
  return (
    <Section color={Bgcolors.Beige}>
      <h1 className="mt-16 text-center">Projects</h1>
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </Section>
  );
};

export default Projects;
