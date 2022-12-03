import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import Section from '../sections/Section';
import Bgcolors from '../types/Bgcolors';
import Sorters from '../utils/Sorters';
import ChevronDown from '../assets/ChevronDown';

const Projects = () => {
  document.title = 'Lester Ong | Projects';
  const variants: { order: Array<'ascending' | 'descending'>; type: Array<'date' | 'alphabetical'> } = {
    order: ['ascending', 'descending'],
    type: ['alphabetical', 'date'],
  };

  const initialSorter = sessionStorage.getItem('sorter')
    ? JSON.parse(sessionStorage.getItem('sorter') || '')
    : {
        order: 'descending',
        type: 'date',
      };
  const [sorter, setSorter] = useState(initialSorter);

  let projectsToShow = projects.sort(Sorters[sorter.type as keyof typeof Sorters]);
  const isAscending = sorter.order === 'ascending';
  if (isAscending) {
    projectsToShow = projectsToShow.reverse();
  }

  useEffect(() => {
    sessionStorage.setItem('sorter', JSON.stringify(sorter));
  }, [sorter]);

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
                onChange={(e: string) => {
                  setSorter({ ...sorter, [variant]: e });
                }}
              >
                <Listbox.Button className="flex flex-row items-center gap-1 border-b border-b-gray-300">
                  {({ open }) => (
                    <>
                      {sorter[variant as keyof typeof sorter]}
                      <ChevronDown isExpanded={open} />
                    </>
                  )}
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  enter="transition ease-in-out duration-150"
                  leave="transition ease-in-out duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
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
                </Transition>
              </Listbox>
            </div>
          );
        })}
      </span>
      <Flipper
        flipKey={JSON.stringify(sorter)}
        staggerConfig={{
          default: {
            reverse: true,
            speed: 1,
          },
        }}
      >
        {projectsToShow.map((p) =>
          window.matchMedia('(prefers-reduced-motion)').matches ? (
            <ProjectCard key={p.title} project={p} />
          ) : (
            <Flipped key={p.title} flipId={p.title} stagger>
              <div>
                <ProjectCard project={p} />
              </div>
            </Flipped>
          )
        )}
      </Flipper>
    </Section>
  );
};

export default Projects;
