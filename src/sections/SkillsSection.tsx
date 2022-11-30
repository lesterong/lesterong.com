import Bgcolors from '../types/Bgcolors';
import Textcolors from '../types/Textcolors';
import Section from './Section';
import Skills from '../assets/Skills';

const SkillsSection = () => {
  return (
    <Section color={Bgcolors.Gray} textColor={Textcolors.White}>
      <div className="max-w-xl">
        <h2 className="pt-6">Skills</h2>
        <div className="mt-4 mb-6">
          <p>Familiar with...</p>
          <div className="grid grid-cols-auto-fill gap-2">
            <Skills.Java />
            <Skills.Javascript />
            <Skills.Typescript />
            <Skills.React />
            <Skills.Html />
            <Skills.Css />
            <Skills.Git />
            <Skills.Tailwind />
            <Skills.Figma />
          </div>

          <p>Experimented with...</p>
          <div className="grid grid-cols-auto-fill gap-2">
            <Skills.Python />
            <Skills.Numpy />
            <Skills.Firebase />
            <Skills.PgSql />
            <Skills.Ruby />
            <Skills.RubyOnRails />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
