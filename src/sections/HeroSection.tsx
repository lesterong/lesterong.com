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
              A software engineer, a UI/UX designer, and a student. Currently, I&apos;m a final year Computer Science
              undergraduate at the&nbsp;
              <a className="nav-link" href="https://nus.edu.sg" target="blank" rel="noopener noreferrer">
                National University of Singapore
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
