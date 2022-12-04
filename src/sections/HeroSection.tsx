import Section from './Section';

const HeroSection = () => {
  return (
    <Section isFillViewport>
      <div className="h-full pt-16">
        <div className="home__hero flex">
          <div className="home__hero__content">
            <h1>
              Hello, I&apos;m <span className="text-gradient animate-gradient">Lester</span>.
            </h1>
            <p>I am a software engineer with a passion in design and animation.</p>
            <p>Currently an undergraduate at the National University of Singapore, majoring in Computer Science.</p>
          </div>
        </div>
        <a href="#about-section" className="nav-link relative bottom-12">
          Scroll Down <span className="inline-block animate-bounce-down">&#8595;</span>
        </a>
      </div>
    </Section>
  );
};
export default HeroSection;
