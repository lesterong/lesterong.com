import { ProjectProps } from '../types/Project';

const Sorters = {
  date: (a: ProjectProps, b: ProjectProps) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  },
  alphabetical: (a: ProjectProps, b: ProjectProps) => {
    if (a.title < b.title) {
      return 1;
    }
    if (a.title > b.title) {
      return -1;
    }
    return 0;
  },
};

export default Sorters;
