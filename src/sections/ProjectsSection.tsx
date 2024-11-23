import { Link } from 'react-router';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import Section from './Section';
import Sorters from '../utils/Sorters';

const ProjectsSection = () => {
  const featProjects = projects.filter((p) => p.isFeatured).sort(Sorters.date);
  return (
    <Section>
      <div className="home__projects">
        <h2>Featured Projects</h2>
        <p>Here&apos;s some of my favourite projects that I helped build.</p>
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
