import { useLottie } from 'lottie-react';
import Section from './Section';
import hero from '../assets/lottie/hero.json';

const HeroSection = () => {
  const options = {
    animationData: hero,
    autoplay: true,
    speed: 2,
  };
  const HeroAnimation = useLottie(options);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    HeroAnimation.goToAndStop(110, true);
  }
  return (
    <Section>
      <div className="home__hero min-h-full md:min-h-[448px]">
        <div className="home__hero__content">
          <div>
            <h3>Hello, I&apos;m Lester!</h3>
            <h1>
              I design and build digital experiences like&nbsp;
              <span className="text-gradient animate-gradient">no other</span>.
            </h1>
            <p>
              I&apos;m a software engineer that speaks and loves design. Currently, I&apos;m building&nbsp;
              <a className="nav-link" href="https://www.nus-digital-twin.com" target="_blank" rel="noreferrer">
                NUS Digital Twin
              </a>
              &nbsp;over at&nbsp;
              <a className="nav-link" href="https://www.citysyntax.io" target="_blank" rel="noopener noreferrer">
                City Syntax Lab
              </a>
              .
            </p>
          </div>
          <div>{HeroAnimation.View}</div>
        </div>
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            })
          }
          className="home__hero__link nav-link"
        >
          Scroll Down <span className="inline-block animate-bounce-down motion-reduce:animate-none">&#8595;</span>
        </button>
      </div>
    </Section>
  );
};
export default HeroSection;
