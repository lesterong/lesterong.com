import React from 'react';
import Bgcolors from './Bgcolors';

export type SectionProps = {
  color: Bgcolors;
  children: Array<React.ReactNode> | React.ReactNode;
};
