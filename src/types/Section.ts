import React from 'react';
import Bgcolors from './Bgcolors';
import Textcolors from './Textcolors';

export type SectionProps = {
  color: Bgcolors;
  textColor?: Textcolors;
  isFillViewport?: boolean;
  isVerticallyCentered?: boolean;
  children: Array<React.ReactNode> | React.ReactNode;
};
