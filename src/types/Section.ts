import React from 'react';
import Bgcolors from './Bgcolors';

export type SectionProps = {
  color: Bgcolors;
  isFillViewport?: boolean;
  isVerticallyCentered?: boolean;
  children: Array<React.ReactNode> | React.ReactNode;
};
