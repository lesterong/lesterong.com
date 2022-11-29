import React from 'react';
import Bgcolors from './Bgcolors';

export type SectionProps = {
  color: Bgcolors;
  isVerticallyCentered?: boolean;
  children: Array<React.ReactNode> | React.ReactNode;
};
