import { Fragment, useEffect, useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import Section from '../sections/Section';
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
    <Section>
      <h1 className="heading--primary">Projects</h1>
      <h2 className="heading--secondary">All Projects</h2>
      <span className="sorter">
        <span>Sort by</span>
        {Object.entries(variants).map((v) => {
          const [variant, values] = v;
          return (
            <div key={variant} className="relative">
              <Listbox
                value={sorter[variant as keyof typeof sorter]}
                onChange={(e: string) => {
                  setSorter({ ...sorter, [variant]: e });
                }}
              >
                <ListboxButton className="sorter__button">
                  {({ open }) => (
                    <>
                      {sorter[variant as keyof typeof sorter]}
                      <ChevronDown isExpanded={open} />
                    </>
                  )}
                </ListboxButton>
                <Transition
                  as={Fragment}
                  enterFrom="dropdown-transition-is-close"
                  enterTo={`dropdown-transition-is-open ${variant === 'type' ? 'origin-top-right' : 'origin-top-left'}`}
                  enter="dropdown-transition"
                  leave="dropdown-transition"
                  leaveFrom="dropdown-transition-is-open"
                  leaveTo={`dropdown-transition-is-close ${
                    variant === 'type' ? 'origin-top-right' : 'origin-top-left'
                  }`}
                >
                  <ListboxOptions className={`sorter__dropdown ${variant === 'type' ? 'right-0' : 'left-0'}`}>
                    {values.map((val) => (
                      <ListboxOption value={val} key={val}>
                        {({ focus, selected }) => (
                          <div
                            className={`sorter__dropdown__item ${selected ? 'selected' : ''} ${focus ? 'active' : ''}`}
                          >
                            {val}
                          </div>
                        )}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
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
          ),
        )}
      </Flipper>
    </Section>
  );
};

export default Projects;
