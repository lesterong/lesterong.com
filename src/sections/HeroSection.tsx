import Section from './Section';

const HeroSection = () => (
  <Section isVerticallyCentered isFillViewport>
    <div className="home__hero">
      <h1>
        Hello, I&apos;m <span className="text-gradient animate-gradient">Lester</span>.
      </h1>
      <p>I am a software engineer with a passion in design and animation.</p>
      <p>Currently an undergraduate at the National University of Singapore, majoring in Computer Science.</p>
    </div>
  </Section>
);

export default HeroSection;
