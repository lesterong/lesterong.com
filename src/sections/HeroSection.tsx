import Section from './Section';
import Bgcolors from '../types/Bgcolors';

const HeroSection = () => (
  <Section color={Bgcolors.Beige} isVerticallyCentered isFillViewport>
    <div className="max-w-xl">
      <h1>
        Hello, I&apos;m <span className="text-gradient animate-gradient">Lester</span>.
      </h1>
      <p className="mt-4">I am a software engineer with a passion in design and animation.</p>
      <p className="mt-1">
        Currently an undergraduate at the National University of Singapore, majoring in Computer Science.
      </p>
    </div>
  </Section>
);

export default HeroSection;
