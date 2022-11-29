import { SectionProps } from '../types/Section';

const Section = ({ color, isFillViewport = false, isVerticallyCentered = false, children }: SectionProps) => {
  return (
    <div className={`${isFillViewport && 'h-screen min-h-[448px]'} ${color} flex`}>
      <div className={`mx-auto ${isVerticallyCentered && 'my-auto'} w-full max-w-6xl px-6`}>{children}</div>
    </div>
  );
};

export default Section;
