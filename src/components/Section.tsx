import { SectionProps } from '../types/Section';

const Section = ({ color, children }: SectionProps) => (
  <div className={`h-screen ${color}`}>
    <div className="mx-auto max-w-6xl px-6">{children}</div>
  </div>
);

export default Section;
