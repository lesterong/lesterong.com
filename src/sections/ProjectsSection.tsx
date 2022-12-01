import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import Bgcolors from '../types/Bgcolors';
import Section from './Section';

const ProjectsSection = () => {
  const featProjects = projects.filter((p) => p.isFeatured);
  return (
    <Section color={Bgcolors.Beige}>
      <div className="mb-6">
        <h2 className="mt-6">Featured Projects</h2>
        {featProjects.map((p) => (
          <ProjectCard key={p.title} title={p.title} position={p.position} description={p.description} />
        ))}
        <Link to="projects" className="nav-link mt-6">
          View All Projects <span className="move-arrow inline-block">&#x2192;</span>
        </Link>
      </div>
    </Section>
  );
};

export default ProjectsSection;
