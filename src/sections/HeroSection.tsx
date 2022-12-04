import { useLottie } from 'lottie-react';
import Section from './Section';
import hero from '../assets/lottie/hero.json';

const HeroAnimation = () => {
  const options = {
    animationData: hero,
    autoplay: true,
    speed: 2,
  };

  const { View } = useLottie(options);

  return View;
};

const HeroSection = () => {
  return (
    <Section>
      <div className="home__hero min-h-full md:min-h-[448px]">
        <div className="home__hero__content">
          <div>
            <h1>
              Hello, I&apos;m <span className="text-gradient animate-gradient">Lester</span>.
            </h1>
            <p>
              I&apos;m a software engineer with a passion in design and animation. Currently, I&apos;m a Computer
              Science undergraduate at{' '}
              <a className="nav-link" href="https://nus.edu.sg" target="blank" rel="noopener noreferrer">
                NUS
              </a>
              .
            </p>
          </div>
          <div>
            <HeroAnimation />
          </div>
        </div>
        <a href="#about-section" className="home__hero__link nav-link">
          Scroll Down <span className="inline-block animate-bounce-down motion-reduce:animate-none">&#8595;</span>
        </a>
      </div>
    </Section>
  );
};
export default HeroSection;
