import BgColor from '../utils/BgColor';
import TextColor from '../utils/TextColor';
import Section from './Section';

const AboutSection = () => (
  <Section color={BgColor.BaseDark} textColor={TextColor.White}>
    <div className="max-w-xl">
      <h2 className="mt-6">About Me</h2>
      <p className="mt-6">Hey there, nice to meet you!</p>
      <p className="mt-2 mb-6">
        I am a software engineer, with a dose of designer. I love designing and building fluid software that are
        functional, yet fun to use.
      </p>
    </div>
  </Section>
);

export default AboutSection;
