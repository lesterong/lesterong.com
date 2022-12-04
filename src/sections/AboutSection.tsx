import Section from './Section';

const AboutSection = () => (
  <Section color="bg-color--tertiary" textColor="text-color--tertiary">
    <div className="home__about">
      <h2 id="about-section">About Me</h2>
      <p>Hey there, nice to meet you!</p>
      <p>
        I am a software engineer, with a dose of designer. I love designing and building fluid software that are
        functional, yet fun to use.
      </p>
    </div>
  </Section>
);

export default AboutSection;
