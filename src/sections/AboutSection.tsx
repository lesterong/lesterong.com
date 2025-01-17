import { Link } from 'react-router';
import Section from './Section';

const AboutSection = () => (
  <Section color="bg-color--tertiary" textColor="text-color--tertiary">
    <div className="home__about">
      <h2>About Me</h2>
      <p>Hey there, nice to meet you!</p>
      <p>
        I&apos;m Lester, a software engineer based in Singapore. I love designing and building fluid software that are
        functional and fun to use.
      </p>
      <p>
        I first began my software development journey {new Date().getFullYear() - 2019} years ago when I picked up web
        development, and learnt about HTML and CSS.
      </p>
      <p>
        Since then, I have picked up various other languages and frameworks, built and designed a couple of&nbsp;
        <Link to="projects" className="nav-link secondary">
          projects
        </Link>
        &nbsp;and interned in a few companies.
      </p>
      <p>Right now, I&apos;m working with City Syntax Lab to build a crowd-sourced campus digital twin of NUS.</p>
      <p>
        Find me on&nbsp;
        <a
          href="https://www.github.com/lesterong/"
          target="blank"
          rel="noopener noreferrer"
          className="nav-link secondary"
        >
          GitHub
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://www.linkedin.com/in/lesterongpc/"
          target="blank"
          rel="noopener noreferrer"
          className="nav-link secondary"
        >
          LinkedIn
        </a>
        !
      </p>
    </div>
  </Section>
);

export default AboutSection;
