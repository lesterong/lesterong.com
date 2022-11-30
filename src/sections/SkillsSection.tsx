import Bgcolors from '../types/Bgcolors';
import Textcolors from '../types/Textcolors';
import Section from './Section';

const SkillsSection = () => (
  <Section color={Bgcolors.Gray} textColor={Textcolors.White}>
    <div className="max-w-xl">
      <h2 className="pt-6">Skills</h2>
      <p className="pt-6 pb-6">Skills go here.</p>
    </div>
  </Section>
);

export default SkillsSection;
