import { SectionProps } from '../types/Section';

const Section = ({ color, isVerticallyCentered = false, children }: SectionProps) => {
  return (
    <div className={`h-screen ${color} flex`}>
      <div className={`mx-auto ${isVerticallyCentered && 'my-auto'} w-full max-w-6xl px-6`}>{children}</div>
    </div>
  );
};

export default Section;
