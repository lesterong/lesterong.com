import Section from './Section';
import Bgcolors from '../types/Bgcolors';

const HeroSection = () => (
  <Section color={Bgcolors.Beige} isVerticallyCentered>
    <div className="max-w-xl">
      <h1>Hello, I&apos;m Lester.</h1>
      <p className="pt-4">I am a software engineer with a passion in design and animation.</p>
      <p className="pt-1">
        Currently an undergraduate at the National University of Singapore, majoring in Computer Science.
      </p>
    </div>
  </Section>
);

export default HeroSection;
