import { Link } from 'react-router-dom';
import Section from './Section';

const AboutSection = () => (
  <Section color="bg-color--tertiary" textColor="text-color--tertiary">
    <div className="home__about">
      <h2>About Me</h2>
      <p>Hey there, nice to meet you!</p>
      <p>
        I&apos;m a front-end software engineer based in Singapore. I love designing and building fluid software that are
        functional and fun to use.
      </p>
      <p>
        I first began my software development journey 3 years ago when I picked up web development, and learnt about
        HTML and CSS.
      </p>
      <p>
        Since then, I have picked up various other languages and frameworks, built a couple of{' '}
        <Link to="projects" className="nav-link secondary">
          projects
        </Link>
        , and also dabbled in design work during{' '}
        <Link to="resume" className="nav-link secondary">
          my time at Dine Inn
        </Link>
        .
      </p>
      <p>
        You can also find me on{' '}
        <a
          href="https://www.github.com/lesterong/"
          target="blank"
          rel="noopener noreferrer"
          className="nav-link secondary"
        >
          GitHub
        </a>
        &nbsp;and{' '}
        <a
          href="https://www.linkedin.com/in/lesterongpc/"
          target="blank"
          rel="noopener noreferrer"
          className="nav-link secondary"
        >
          LinkedIn
        </a>
        .
      </p>
    </div>
  </Section>
);

export default AboutSection;
