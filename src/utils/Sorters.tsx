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
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return 1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return -1;
    }
    return 0;
  },
};

export default Sorters;
