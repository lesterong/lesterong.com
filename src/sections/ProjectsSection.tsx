import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import Section from './Section';

const ProjectsSection = () => {
  const featProjects = projects.filter((p) => p.isFeatured);
  return (
    <Section>
      <div className="home__projects">
        <h2>Featured Projects</h2>
        {featProjects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
        <Link to="projects" className="nav-link">
          View All Projects <span className="right-arrow">&#x2192;</span>
        </Link>
      </div>
    </Section>
  );
};

export default ProjectsSection;
