import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import Section from '../sections/Section';
import Bgcolors from '../types/Bgcolors';
import Sorters from '../utils/Sorters';

const Projects = () => {
  document.title = 'Lester Ong | Projects';
  const [sorter, setSorter] = useState({
    order: 'descending',
    type: 'date',
  });

  let projectsToShow = projects.sort(Sorters[sorter.type as keyof typeof Sorters]);
  const isAscending = sorter.order === 'ascending';
  if (isAscending) {
    projectsToShow = projectsToShow.reverse();
  }

  return (
    <Section color={Bgcolors.Beige}>
      <h1 className="mt-16 text-center">Projects</h1>
      <p className="mt-4">
        Sort by{' '}
        <select
          className="border-b border-b-gray-300 bg-transparent"
          value={sorter.order}
          onChange={(e: any) => setSorter({ ...sorter, order: e.target.value })}
        >
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>{' '}
        <select
          className="border-b border-b-gray-300 bg-transparent"
          onChange={(e: any) => setSorter({ ...sorter, type: e.target.value })}
        >
          <option value="date">date</option>
          <option value="alphabetical">alphabet</option>
        </select>
      </p>
      {projectsToShow.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </Section>
  );
};

export default Projects;
