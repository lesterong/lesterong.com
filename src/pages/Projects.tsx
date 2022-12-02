import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import Section from '../sections/Section';
import Bgcolors from '../types/Bgcolors';
import Sorters from '../utils/Sorters';

const Projects = () => {
  document.title = 'Lester Ong | Projects';
  const variants: { order: Array<'ascending' | 'descending'>; type: Array<'date' | 'alphabetical'> } = {
    order: ['ascending', 'descending'],
    type: ['date', 'alphabetical'],
  };
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
      <span className="mt-4 flex space-x-1 text-lg">
        <span>Sort by</span>
        {Object.entries(variants).map((v) => {
          const [variant, values] = v;
          return (
            <div key={variant}>
              <Listbox
                value={sorter[variant as keyof typeof sorter]}
                onChange={(e: string) => setSorter({ ...sorter, [variant]: e })}
              >
                <Listbox.Button className="border-b border-b-gray-300">
                  {sorter[variant as keyof typeof sorter]}
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-1 w-[168px] cursor-pointer overflow-auto rounded-md border border-gray-100/30 bg-white py-2 text-base shadow-sm">
                  {values.map((o) => (
                    <Listbox.Option value={o} key={o}>
                      {({ active, selected }) => (
                        <div
                          className={`py-1 pl-2 ${selected ? 'font-semibold' : 'font-normal'} ${
                            active ? 'bg-indigo-100/30' : 'bg-white'
                          }`}
                        >
                          {o}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
          );
        })}
      </span>
      {projectsToShow.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </Section>
  );
};

export default Projects;
