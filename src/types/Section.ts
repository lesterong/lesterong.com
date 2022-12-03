import React from 'react';

export type SectionProps = {
  color?: string;
  textColor?: string;
  isFillViewport?: boolean;
  isVerticallyCentered?: boolean;
  children: Array<React.ReactNode> | React.ReactNode;
};
