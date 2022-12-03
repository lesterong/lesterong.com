import React from 'react';
import BgColor from '../utils/BgColor';
import TextColor from '../utils/TextColor';

export type SectionProps = {
  color: BgColor;
  textColor?: TextColor;
  isFillViewport?: boolean;
  isVerticallyCentered?: boolean;
  children: Array<React.ReactNode> | React.ReactNode;
};
