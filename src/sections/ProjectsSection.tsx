import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import BgColor from '../utils/BgColor';
import Section from './Section';

const ProjectsSection = () => {
  const featProjects = projects.filter((p) => p.isFeatured);
  return (
    <Section color={BgColor.Base}>
      <div className="mb-6">
        <h2 className="mt-6">Featured Projects</h2>
        {featProjects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
        <Link to="projects" className="nav-link mt-6">
          View All Projects <span className="right-arrow inline-block">&#x2192;</span>
        </Link>
      </div>
    </Section>
  );
};

export default ProjectsSection;
