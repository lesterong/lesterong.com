import Bgcolors from '../types/Bgcolors';
import Textcolors from '../types/Textcolors';
import Section from './Section';
import Wave from '../assets/Wave';

const AboutSection = () => (
  <>
    <div className="bg-gray-200">
      <Wave />
    </div>
    <Section color={Bgcolors.Gray} textColor={Textcolors.White}>
      <div className="max-w-xl">
        <h2 className="mt-6">About Me</h2>
        <p className="mt-6">Hey there, nice to meet you!</p>
        <p className="mt-2 mb-6">
          I am a software engineer, with a dose of designer. I love designing and building fluid software that are
          functional, yet fun to use.
        </p>
      </div>
    </Section>
  </>
);

export default AboutSection;
